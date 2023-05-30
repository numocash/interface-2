import { useChain } from "../useChain";
import { getQueryKey } from "./utils";
import { ReverseMirage } from "@/lib/reverseMirage/types";
import { PublicClient, usePublicClient } from "wagmi";

export const useQueryGenerator = <
  TArgs extends object,
  TRet extends unknown,
  TParse extends unknown,
>(
  reverseMirage: (
    publicClient: PublicClient,
    args: TArgs,
  ) => ReverseMirage<TRet, TParse>,
) => {
  const publicClient = usePublicClient();
  const chainID = useChain();

  return (args: Partial<TArgs>) =>
    ({
      queryKey: getQueryKey(reverseMirage, args, chainID),
      queryFn: () => reverseMirage(publicClient, args as TArgs).read(),
      select: (data: TRet) =>
        reverseMirage(publicClient, args as TArgs).parse(data),
      enabled: !Object.keys(args).some(
        (key) => args[key as keyof Partial<TArgs>] === undefined,
      ),
      staleTime: Infinity,
    }) as const;
};
