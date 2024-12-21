import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getAllShoses } from "../../api";
import { useSearchParams } from "react-router-dom";
import Card from "../card";

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
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 w-full">
      {isPending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error!</div>
      ) : (
        data.map((item) => <Card key={item._id} shose={item} />)
      )}
    </div>
  );
};

export default List;
