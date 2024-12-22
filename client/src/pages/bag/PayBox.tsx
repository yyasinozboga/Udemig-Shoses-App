import React from "react";
import { ShoeFromBagType } from "../../types";

const PayBox = ({ data }: { data: ShoeFromBagType[] }) => {
  const shoses = data.reduce((acc, shose) => acc + shose.amount, 0);

  const price = data.reduce(
    (acc, shose) => acc + shose.amount * shose.price,
    0,
  );

  const discount = data.reduce(
    (acc, shose) => acc + (shose.amount * (shose.price * shose.discount)) / 100,
    0,
  );

  return (
    <div className="p-3 rounded-lg bg-white w-[200px] h-[170px] flex flex-col gap-2">
      <b>Ürün Sayısı: ({shoses})</b>

      <h1 className="font-medium text-3xl">
        <span className="text-xl">$</span>
        {price.toFixed(2).replace(".", ",")}
      </h1>

      <b>
        <small className="text-nowrap">
          {discount.toFixed(2).replace(".", ",")}$ Kazancın var
        </small>
      </b>

      <button className="bg-blue py-2 rounded-lg text-white text-sm lg:text-md w-full">
        Alışverişi tamamla
      </button>
    </div>
  );
};

export default PayBox;
