import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getShosesFromBag } from "../../api";
import { ShoseFromBagType } from "../../types";
import AddedCard from "../../components/addedCard";

const Bag = () => {
  const { isPending, error, data } = useQuery<ShoseFromBagType[]>({
    queryKey: ["bag"],
    queryFn: () => getShosesFromBag(),
  });

  return (
    <div className="flex flex-wrap gap-3 mt-3">
      {isPending ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error!</div>
      ) : (
        data.map((item) => <AddedCard key={item._id} shoe={item} />)
      )}
    </div>
  );
};

export default Bag;
