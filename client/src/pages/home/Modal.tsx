import React from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
  close: () => void;
  setText: (text: string) => void;
};

const Modal = ({ close, setText }: Props) => {
  const [params, setParams] = useSearchParams();

  const handleSort = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    params.set("sort", target.value);
    setParams(params);

    setText(target.textContent as string);
    close();
  };

  return (
    <div className="absolute top-14 p-3 flex flex-col gap-3 bg-white rounded-lg w-full text-center z-10">
      <button value="price-asc" onClick={handleSort}>
        Fiyat: Yüksekten, küçüğe
      </button>
      <button value="price-desc" onClick={handleSort}>
        Fiyat: Küçükten, Yükseğe
      </button>
    </div>
  );
};

export default Modal;
