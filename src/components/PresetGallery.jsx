import React, { memo } from "react";
import { SHADOW_PRESETS } from "../data/presets";
import { generateShadowCSS } from "../utils/shadowUtils";

const PresetGallery = ({ onSelectPreset }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-4 pb-2 border-b border-gray-100">
        Presets
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 gap-4">
        {SHADOW_PRESETS.map((preset) => {
          const shadowStyle = generateShadowCSS(preset.shadows);
          const styleObject = {
            boxShadow: shadowStyle.replace("box-shadow: ", "").replace(";", ""),
            backgroundColor: "#ffffff",
          };

          return (
            <button
              key={preset.name}
              onClick={() => onSelectPreset(preset.shadows)}
              className="group flex flex-col items-center gap-2 p-2 rounded-lg hover:bg-gray-50 transition-colors"
              title={preset.name}
            >
              <div
                className="w-16 h-16 rounded-lg border border-gray-100 transition-all group-hover:scale-105"
                style={styleObject}
              />
              <span className="text-xs font-medium text-gray-600 group-hover:text-blue-600">
                {preset.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(PresetGallery);