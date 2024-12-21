import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[170px] md:h-[200px] lg:h-[300px] rounded-3xl overflow-hidden mt-5">
      <img
        src="/banner.png"
        alt="bannger-png"
        className="size-full object-cover"
      />

      <div className="flex flex-col gap-2 lg:gap-5 text-white absolute top-1/2 -translate-y-1/2 left-5 lg:w-[500px]">
        <p>Sadece geçerli süreyle</p>
        <h2 className="font-medium text-2xl lg:text-6xl">%30 indirim</h2>
        <p>
          Rahatınız düşünülerek tasarlanan spor ayakkabılar, bir sonraki
          seansınıza tüm odağınızı verebilmenizi sağlar.
        </p>
      </div>
    </div>
  );
};

export default React.memo(Hero);
