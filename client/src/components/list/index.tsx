import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllShoses } from "../../api";
import { useSearchParams } from "react-router-dom";
import Card from "../card";
import Loader from "../loader";

const List = () => {
  const [searchParams] = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  const sizes = searchParams.getAll("size").join(",");
  const colors = searchParams.getAll("color").join(",");

  const newParams = { ...params, size: sizes, color: colors };

  const { isPending, error, data } = useQuery({
    queryKey: ["shoses", newParams],
    queryFn: () => getAllShoses(newParams),
  });

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 gap-y-5 w-full relative">
      {isPending ? (
        <Loader />
      ) : error ? (
        <div>Error!</div>
      ) : data.length === 0 ? (
        <h1 className="font-medium text-2xl md:text-4xl 2xl:text-5xl text-nowrap absolute top-60 lg:top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Aradığınız kritelere göre ürün yok
        </h1>
      ) : (
        data.map((item) => <Card key={item._id} shose={item} />)
      )}
    </div>
  );
};

export default List;
