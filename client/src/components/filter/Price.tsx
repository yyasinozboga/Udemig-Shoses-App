import React, { ChangeEvent } from "react";
import { useSearchParams } from "react-router-dom";

const Price = () => {
  const [params, setParams] = useSearchParams();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.value > "0") {
      params.set("price[lte]", target.value);
    } else {
      params.delete("price[lte]");
    }
    setParams(params);
  };
  return (
    <div>
      <h2 className="font-medium mb-2">Fiyat</h2>

      <input
        type="range"
        min={0}
        max={1000}
        className="w-full"
        onChange={handleChange}
        value={params.get("price[lte]") || 0}
      />

      <div className="flex justify-between font-open font-semibold">
        <span>${params.get("price[lte]")}</span>
        <span>$1000</span>
      </div>
    </div>
  );
};

export default Price;
