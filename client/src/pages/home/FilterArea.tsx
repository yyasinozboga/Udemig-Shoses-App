import React, { useEffect, useState } from "react";
import Filter from "../../components/filter";
import Modal from "./Modal";

type Params = {
  text: string;
  icon: string;
  alt: string;
  open?: () => void;
};

type Props = {
  open: () => void;
};

const FilterArea = ({ open }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [text, setText] = useState<string>("Sırala");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
  }, []);

  const CreateButton = ({ text, icon, alt, open }: Params) => (
    <button
      className="flex items-center justify-between p-3 bg-white rounded-lg"
      onClick={open}
    >
      {text}
      <img src={icon} alt={alt} />
    </button>
  );

  return (
    <div className="lg:w-[50%] xl:w-[30%]">
      <div className="hidden lg:flex">
        <Filter />
      </div>

      <div className="grid grid-cols-2 lg:hidden gap-5">
        <CreateButton
          text="Filtreler"
          icon="/filter.svg"
          alt="filter-svg"
          open={open}
        />
        <div className="relative flex flex-col">
          <CreateButton
            text={text}
            icon="/down.svg"
            alt="down-svg"
            open={() => setIsOpen(!isOpen)}
          />

          {isOpen && <Modal close={() => setIsOpen(false)} setText={setText} />}
        </div>
      </div>
    </div>
  );
};

export default FilterArea;
