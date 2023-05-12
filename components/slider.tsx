import * as SliderPrimitive from "@radix-ui/react-slider";

export default function Slider({
  input,
  onChange,
  disabled = false,
  max = 100,
  min,
}: {
  input: number;
  onChange: (val: number) => void;
} & Omit<React.ComponentProps<typeof SliderPrimitive.Root>, "onChange">) {
  return (
    <div className="flex w-full items-center space-x-4">
      <p className="p1 w-12">
        {input <= 100 ? `${input.toLocaleString()}%` : "🔥🔥"}
      </p>
      <form className="w-full">
        <SliderPrimitive.Root
          className="relative flex h-5 w-full touch-none select-none items-center"
          defaultValue={[input]}
          disabled={disabled}
          value={[input]}
          onValueChange={([input]) => onChange(input!)}
          max={max}
          min={min}
          aria-label="Volume"
        >
          <SliderPrimitive.Track className="relative  h-[4px] grow rounded-full bg-gray-200">
            <SliderPrimitive.Range className="absolute  h-full rounded-full bg-brand" />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb className="block  h-5 w-2 cursor-pointer rounded-[10px] bg-brand ring-white ring-2" />
        </SliderPrimitive.Root>
      </form>
    </div>
  );
}
