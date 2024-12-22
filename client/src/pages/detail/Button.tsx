import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { addShoeToBag, getShosesFromBag, updateShoeFromBag } from "../../api";
import { initialValues, ShoeFromBagType } from "../../types";

const Button = ({
  id,
  name,
  price,
  discount,
  picture,
  amount,
  size,
  color,
}: ShoeFromBagType) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: ["bag"],
    mutationFn: (body: initialValues | ShoeFromBagType) => addShoeToBag(body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bag"],
      });
    },
  });

  const updateMutation = useMutation({
    mutationKey: ["bag"],
    mutationFn: (body: ShoeFromBagType) => updateShoeFromBag(body),

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["bag"],
      });
    },
  });

  const { data } = useQuery({
    queryKey: ["bag"],
    queryFn: () => getShosesFromBag(),
  });

  const handleClick = () => {
    if (size && color && data) {
      const found = data.find((item) => item.id === id);

      const body: ShoeFromBagType = {
        id,
        name,
        price,
        discount,
        picture,
        color,
        size,
        amount,
      };

      if (found) {
        if (found.size === size && found.color === color) {
          updateMutation.mutate({ ...found, amount: found.amount + 1 });
        } else {
          const { id, ...newBody } = body;
          mutate(newBody);
        }
      } else {
        mutate(body);
      }
    }
  };

  return (
    <div>
      <div className="flex gap-2">
        <button
          disabled={data ? false : true}
          className="py-4 rounded-lg bg-black text-white w-full"
          onClick={handleClick}
        >
          Sepete Ekle
        </button>

        <button className="rounded-lg bg-black text-white w-12 grid place-items-center">
          <img src="/heart.svg" alt="heart-svg" className="w-[40%]" />
        </button>
      </div>

      <button className="bg-blue py-4 rounded-lg text-white w-full mt-2">
        Hemen Satın Al
      </button>
    </div>
  );
};

export default Button;
