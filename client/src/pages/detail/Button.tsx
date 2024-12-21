import { useMutation } from "@tanstack/react-query";
import React from "react";
import { addShoeToBag } from "../../api";
import { initialValue } from "../../types";

const Button = ({
  name,
  price,
  discount,
  picture,
  color,
  size,
  amount,
}: initialValue) => {
  const { mutate } = useMutation({
    mutationKey: ["bag"],
    mutationFn: (body: initialValue) => addShoeToBag(body),
  });

  const handleClick = () => {
    if (size && color) {
      const body: initialValue = {
        name,
        price,
        discount,
        picture,
        color: color,
        size: size,
        amount,
      };

      mutate(body);
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <button
          className="py-4 rounded-lg bg-black text-white w-full"
          onClick={handleClick}
        >
          Sepete Ekle
        </button>

        <button className="rounded-lg bg-black text-white w-12 grid place-items-center">
          <img src="/heart.svg" alt="heart-svg" className="w-[40%]" />
        </button>
      </div>

      <button className="bg-blue py-4 rounded-lg text-white w-full mt-2">
        Hemen Satın Al
      </button>
    </div>
  );
};

export default Button;
