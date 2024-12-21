import React from "react";
import { useSearchParams } from "react-router-dom";

const Gender = () => {
  const [params, setParams] = useSearchParams();

  const handleClick = (gender: string) => {
    params.set("gender", gender);
    setParams(params);
  };

  return (
    <div>
      <h2 className="font-medium">Cinsiyet</h2>
      <div className="flex flex-col mt-2">
        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="man"
            checked={params.get("gender") === "men"}
            name="gender"
            onChange={() => handleClick("men")}
          />
          <label htmlFor="man" className="font-medium">
            Erkek
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="woman"
            checked={params.get("gender") === "women"}
            name="gender"
            onChange={() => handleClick("women")}
          />
          <label htmlFor="woman" className="font-medium">
            Kadın
          </label>
        </div>
      </div>
    </div>
  );
};

export default Gender;
