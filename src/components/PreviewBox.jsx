import React from "react";

const PreviewBox = ({ shadowCSS }) => {
  return (
    <div className="bg-white p-12 rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center min-h-100 overflow-hidden">
      <div
        className="w-48 h-48 bg-blue-500 rounded-xl flex items-center justify-center transition-all duration-200"
        style={{
          boxShadow: shadowCSS.replace("box-shadow: ", "").replace(";", ""),
          backgroundColor: "#3b82f6",
        }}
      >
        <span className="text-white font-medium">Preview</span>
      </div>
    </div>
  );
};

export default PreviewBox;