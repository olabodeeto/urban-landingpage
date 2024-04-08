import React from "react";

type PropT = {
  title: string;
  handlePress: Function;
};
export default function PrimaryBtn({ title, handlePress }: PropT) {
  return (
    <button
      className="px-10 py-3 rounded-md text-white bg-urban-green"
      onClick={() => handlePress()}
    >
      {title}
    </button>
  );
}
