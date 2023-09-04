import React from "react";

const Button = ({ label, iconUrl }) => {
  return (
    <button className="flex justify-center items-center border border-coral-red font-montserrat text-lg leading-none py-2 px-3 rounded-full bg-coral-red">
      <span className="text-white m-2">{label}</span>
      <img
        src={iconUrl}
        alt="arrowRightIcon"
        className="ml-2 rounded-full w-5 h-5"
      />
    </button>
  );
};

export default Button;
