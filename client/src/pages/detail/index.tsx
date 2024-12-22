import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getShoseById } from "../../api";
import { useParams } from "react-router-dom";
import { ShoeDetailType } from "../../types";
import Images from "./Images";
import Head from "./Head";
import Color from "./Color";
import Size from "./Size";
import Button from "./Button";
import Foot from "./Foot";
import Loader from "../../components/loader";

const Detail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const { isPending, error, data } = useQuery<ShoeDetailType>({
    queryKey: ["shose"],
    queryFn: () => getShoseById(id as string),
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
      {isPending ? (
        <Loader />
      ) : error ? (
        <div>Error!</div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-5">
            <Images images={data.picture} />
          </div>

          <div className="relative flex flex-col gap-5">
            <Head
              name={data.name}
              discount={data.discount}
              price={data.price}
              isNew={data.isNew}
            />
            <Color
              color={data.color}
              setSelectedColor={setSelectedColor}
              selectedColor={selectedColor}
            />
            <Size
              size={data.size}
              setSelectedSize={setSelectedSize}
              selectedSize={selectedSize}
            />
            <Button
              id={data._id}
              name={data.name}
              price={data.price}
              discount={data.discount}
              picture={data.picture}
              amount={1}
              size={selectedSize}
              color={selectedColor}
            />
            <Foot description={data.description} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
