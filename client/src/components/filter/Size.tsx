import React from "react";
import { numbers } from "../../utils/constants";
import { useSearchParams } from "react-router-dom";

const Size = () => {
  const [params, setParams] = useSearchParams();
  const handleClick = (number: string) => {
    if (params.has("size", number)) {
      params.delete("size", number);
    } else {
      params.append("size", number);
    }

    setParams(params);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-medium">Numaralar</h2>
      <div className="flex flex-wrap gap-3">
        {numbers.map((number) => (
          <button
            key={number}
            className={`w-[60px] h-[40px] rounded-lg ${
              params.has("size", number)
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
            onClick={() => handleClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Size;
