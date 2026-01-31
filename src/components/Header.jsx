import React, { memo } from "react";

const Header = () => {
  return (
    <header className="mb-10 text-center">
      <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
        CSS Shadow Generator
      </h1>
      <p className="mt-2 text-lg text-gray-600">
        Visually design and generate CSS box-shadow code.
      </p>
    </header>
  );
};

export default memo(Header);