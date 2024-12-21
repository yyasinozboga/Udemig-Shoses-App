import React from "react";
import { colors } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Color = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = (number: string) => {
    if (params.has("color", number)) {
      params.delete("color", number);
    } else {
      params.append("color", number);
    }

    setParams(params);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-medium">Renkler</h2>
      <div className="flex flex-wrap gap-3">
        {colors.map(({ code, id }) => (
          <button
            key={id}
            className={`w-[60px] h-[40px] rounded-lg ${
              params.has("color", id)
                ? "border-4 border-blue"
                : "border-4 border-transparent"
            }`}
            onClick={() => handleClick(id)}
            style={{ background: code }}
          />
        ))}
      </div>
    </div>
  );
};

export default Color;
