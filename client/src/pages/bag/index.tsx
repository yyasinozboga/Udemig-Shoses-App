import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getShosesFromBag } from "../../api";
import { ShoeFromBagType } from "../../types";
import AddedCard from "../../components/addedCard";
import Loader from "../../components/loader";
import PayBox from "./PayBox";

const Bag = () => {
  const { isPending, error, data } = useQuery<ShoeFromBagType[]>({
    queryKey: ["bag"],
    queryFn: () => getShosesFromBag(),
  });

  return (
    <div className="flex gap-3 mt-3">
      {isPending ? (
        <Loader />
      ) : error ? (
        <div>Error!</div>
      ) : data.length === 0 ? (
        <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl xl:text-7xl absolute top-1/2 left-1/2 text-nowrap -translate-x-1/2 -translate-y-1/2">
          Sepette Ürün Yok
        </h1>
      ) : (
        <>
          <div className="flex flex-col gap-3 w-full">
            {data.map((item) => (
              <AddedCard key={item._id} shoe={item} />
            ))}
          </div>
          <PayBox data={data} />
        </>
      )}
    </div>
  );
};

export default Bag;
