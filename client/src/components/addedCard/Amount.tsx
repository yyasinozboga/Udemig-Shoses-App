import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { ShoeFromBagType } from "../../types";
import { deleteShoeFromBag, updateShoeFromBag } from "../../api";

const Amount = ({ body }: { body: ShoeFromBagType }) => {
  const queryClient = useQueryClient();

  const updateMutate = useMutation({
    mutationKey: ["bag"],
    mutationFn: (body: ShoeFromBagType) => updateShoeFromBag(body),

    onSuccess: (data) => {
      body.amount = data.amount;
    },
  });

  const deleteMutate = useMutation({
    mutationKey: ["bag"],
    mutationFn: (id: string) => deleteShoeFromBag(id),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bag"],
      });
    },
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const name = e.currentTarget.name;
    if (name === "plus") {
      updateMutate.mutate({ ...body, amount: body.amount + 1 });
    } else {
      if (body.amount === 1) {
        deleteMutate.mutate(body._id as string);
      } else {
        updateMutate.mutate({ ...body, amount: body.amount - 1 });
      }
    }
  };

  return (
    <div className="flex items-center justify-around w-[120px] border border-black rounded-lg py-2">
      <button name="minus" onClick={handleClick}>
        {body.amount === 1 ? (
          <img src="/trash.svg" alt="trash-svg" className="size-5" />
        ) : (
          <img src="/minus.svg" alt="minus-svg" className="size-5" />
        )}
      </button>
      <span>{body.amount}</span>
      <button name="plus" onClick={handleClick}>
        <img src="/plus.svg" alt="plus-svg" className="size-5" />
      </button>
    </div>
  );
};

export default Amount;
