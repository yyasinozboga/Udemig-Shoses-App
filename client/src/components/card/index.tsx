import React from "react";
import { ShoseType } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import Price from "./Price";
import Badge from "../badge";

type Props = {
  shose: ShoseType;
};

const Card = ({ shose }: Props) => {
  const { _id, name, picture, price, discount, isNew } = shose;
  const navigate = useNavigate();

  return (
    <div>
      <div className="relative border-8 border-white rounded-[24px] overflow-hidden">
        <img
          src={picture[0]}
          alt={name}
          className="w-full h-[200px] object-cover"
        />

        <Badge isNew={isNew} discount={discount} />
      </div>

      <h3 className="font-bold my-5 line-clamp-1">{name}</h3>

      <button
        onClick={() => navigate(`/detail/${_id}`)}
        className="py-2 bg-black text-white rounded-lg w-full text-center"
      >
        Ürünü Görüntüle - <Price price={price} discount={discount} />
      </button>
    </div>
  );
};

export default Card;
