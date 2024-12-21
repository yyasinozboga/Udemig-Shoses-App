import React, { useState } from "react";
import { colors } from "../../utils/constants";

type Props = {
  color: string;
  setSelectedColor: React.Dispatch<React.SetStateAction<string | null>>;
  selectedColor: string | null;
};

const Color = ({ color, setSelectedColor, selectedColor }: Props) => {
  const newColors = colors.filter((item) => color.includes(item.id) && item);

  return (
    <div>
      <h2 className="font-medium mb-3">Renk Seçiniz</h2>

      <div className="flex gap-5">
        {newColors.map(({ code, id }) => (
          <button
            key={id}
            className={`size-10 rounded-full border-2 ${
              selectedColor === id ? "ring ring-blue" : ""
            }`}
            style={{ background: code }}
            onClick={() => setSelectedColor(id)}
          />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Color);
