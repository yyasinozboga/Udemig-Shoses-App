import React from "react";

const Images = ({ images }: { images: string[] }) => {
  return images.map((picture, key) => (
    <img key={key} src={picture} alt={picture} className="size-full" />
  ));
};

export default React.memo(Images);
