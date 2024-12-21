import React from "react";
import xss from "xss";

const Foot = ({ description }: { description: string }) => {
  return (
    <div>
      <h2 className="font-semibold mt-8 mb-2 text-[24px] text-gray-dark">
        Bu ürün hakkında
      </h2>

      <p
        className="font-open text-[20px] text-gray-dark"
        dangerouslySetInnerHTML={{ __html: xss(description) }}
      ></p>
    </div>
  );
};

export default React.memo(Foot);
