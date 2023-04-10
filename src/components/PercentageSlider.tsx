import {
  SliderInput as ReachSlider,
  SliderHandle,
  SliderRange,
  SliderTrack,
} from "@reach/slider";

interface Props {
  input: number;
  onChange: (n: number) => void;
  disabled?: boolean;
}

export const PercentageSlider: React.FC<Props> = ({
  input,
  onChange,
  disabled,
}: Props) => {
  return (
    <div className="flex items-center justify-between w-full rounded-lg">
      <div className="flex">
        <div className="justify-center w-16 text-xl rounded-xl text-default">
          {input.toFixed(0)}%
        </div>
      </div>
      <div className="w-5/6 mr-3">
        <SliderInput
          value={input}
          min={0}
          max={100}
          step={1}
          onChange={(e) => onChange(e)}
          disabled={disabled}
        >
          <SliderTrack>
            <SliderRange />
            <SliderHandle />
          </SliderTrack>
        </SliderInput>
      </div>
    </div>
  );
};

const styledSlider = styled(ReachSlider);

export const SliderInput = styledSlider(
  () => css`
    background: none;

    [data-reach-slider-range] {
      ${tw`h-1 rounded bg-blue`}
    }

    [data-reach-slider-track] {
      ${tw`h-1 bg-gray-500 rounded`}
    }

    [data-reach-slider-handle] {
      ${tw`bg-white mt-[-6px] `}

      width: 18px;
      height: 18px;
      border-radius: 12px;

      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.1);
    }
  `
);