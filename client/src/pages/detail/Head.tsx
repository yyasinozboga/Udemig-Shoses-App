import React from "react";
import Badge from "../../components/badge";

type Props = {
  name: string;
  discount: number;
  price: number;
  isNew: boolean;
};

const Head = ({ name, discount, price, isNew }: Props) => {
  let newPrice = price;

  if (discount) {
    newPrice = (newPrice * (100 - discount)) / 100;
  }

  return (
    <div>
      <Badge discount={discount} isNew={isNew} designs="rounded-tl-[24px]" />

      <div className="mt-16 flex flex-col gap-5">
        <h1 className="font-bold text-5xl">{name}</h1>

        <div className="flex items-center gap-5">
          <span className="text-blue text-3xl">${newPrice}</span>
          <span className="line-through text-3xl">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Head);
