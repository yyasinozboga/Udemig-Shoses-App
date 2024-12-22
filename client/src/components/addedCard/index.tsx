import React from "react";
import { ShoeFromBagType } from "../../types";
import Amount from "./Amount";

const AddedCard = ({ shoe }: { shoe: ShoeFromBagType }) => {
  const { color, discount, name, picture, price, size } = shoe;

  let newPrice = price;

  if (discount) {
    newPrice = (price * (100 - discount)) / 100;
  }

  return (
    <div className="w-full rounded-lg p-3 bg-white relative">
      <div className="flex gap-3">
        <img
          src={picture[0]}
          alt={name}
          className="size-20 md:size-32 rounded-lg"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h3 className="font-medium text-nowrap text-sm md:text-lg">
              {name}
            </h3>
            <span>
              {color}/{size}
            </span>
          </div>

          <Amount body={shoe} />
        </div>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col">
        <span className={`text-xl ${discount && "line-through"}`}>
          ${price}
        </span>
        {discount && <span className="text-xl text-blue">${newPrice}</span>}
      </div>
    </div>
  );
};

export default AddedCard;
