import React from "react";
import Size from "./Size";
import Color from "./Color";
import Gender from "./Gender";
import Price from "./Price";
import { useSearchParams } from "react-router-dom";

type Props = {
  close?: () => void;
  isOpen?: boolean;
};

const Filter = ({ close, isOpen }: Props) => {
  const [params, setParams] = useSearchParams();

  const handleReset = () => {
    const newParams = new URLSearchParams();
    setParams(newParams);
  };

  return (
    <div className="max-lg:fixed max-lg:inset-0 z-10 max-lg:bg-zinc-900 max-lg:bg-opacity-60 backdrop-blur-md grid place-items-center">
      <div className={`${isOpen && "w-[80vw]"}`}>
        {isOpen ? (
          <div className="flex justify-between items-center p-3 bg-white rounded-t-lg">
            <h2 className="font-medium">Filtreler</h2>
            <button onClick={close}>X</button>
          </div>
        ) : (
          <h2 className="font-medium pl-3">Filtreler</h2>
        )}

        <div className="p-3 flex flex-col gap-3 bg-gray rounded-b-lg">
          <Size />
          <Color />
          <Gender />
          <Price />

          <button
            onClick={handleReset}
            className="py-2 border border-black rounded-lg"
          >
            Sıfırla
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
