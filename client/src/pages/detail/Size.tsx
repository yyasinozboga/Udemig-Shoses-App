import React, { useState } from "react";
import { numbers } from "../../utils/constants";

type Props = {
  size: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string | null>>;
  selectedSize: string | null;
};

const Size = ({ size, setSelectedSize, selectedSize }: Props) => {
  const sizes = size.split(",");

  const newSizes = numbers.map((number) =>
    sizes.includes(number)
      ? { size: number, disabled: false }
      : { size: number, disabled: true },
  );

  return (
    <div>
      <h2 className="font-medium mb-2">Numara Seçiniz</h2>

      <div className="flex flex-wrap gap-3">
        {newSizes.map(({ size, disabled }, key) => (
          <button
            key={key}
            onClick={() => setSelectedSize(size)}
            disabled={disabled}
            className={`w-[70px] rounded-lg py-2 ${
              disabled
                ? "opacity-40 bg-white"
                : selectedSize === size
                ? "bg-black text-white"
                : "bg-white"
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(Size);
