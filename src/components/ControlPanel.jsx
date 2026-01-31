import React from "react";

const ControlPanel = ({
  shadows,
  activeShadowIndex,
  onUpdateShadow,
  onAddShadow,
  onRemoveShadow,
  onSelectShadow,
}) => {
  const currentShadow = shadows[activeShadowIndex];

  const handleChange = (key, value) => {
    onUpdateShadow(activeShadowIndex, key, value);
  };

  return (
    <div className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      <h2 className="text-xl font-semibold mb-6 pb-2 border-b border-gray-100">
        Shadow Controls
      </h2>
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-sm font-medium text-gray-700">Layers</label>
          <div className="flex gap-2">
            <button
              onClick={onAddShadow}
              className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded hover:bg-blue-200 transition-colors"
            >
              + Add
            </button>
            <button
              onClick={() => onRemoveShadow(activeShadowIndex)}
              disabled={shadows.length <= 1}
              className={`text-xs px-2 py-1 rounded transition-colors ${
                shadows.length <= 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-red-100 text-red-700 hover:bg-red-200"
              }`}
            >
              - Remove
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2">
          {shadows.map((_, index) => (
            <button
              key={index}
              onClick={() => onSelectShadow(index)}
              className={`w-8 h-8 rounded-full text-sm font-medium transition-all ${
                index === activeShadowIndex
                  ? "bg-blue-600 text-white shadow-md scale-110"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <div className="flex justify-between mb-1">
            <label
              htmlFor="horizontal"
              className="text-sm font-medium text-gray-700"
            >
              Shift Right
            </label>
            <span className="text-sm text-gray-500">
              {currentShadow.horizontal}px
            </span>
          </div>
          <input
            type="range"
            id="horizontal"
            min="-100"
            max="100"
            value={currentShadow.horizontal}
            onChange={(e) => handleChange("horizontal", Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label
              htmlFor="vertical"
              className="text-sm font-medium text-gray-700"
            >
              Shift Down
            </label>
            <span className="text-sm text-gray-500">
              {currentShadow.vertical}px
            </span>
          </div>
          <input
            type="range"
            id="vertical"
            min="-100"
            max="100"
            value={currentShadow.vertical}
            onChange={(e) => handleChange("vertical", Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label htmlFor="blur" className="text-sm font-medium text-gray-700">
              Blur
            </label>
            <span className="text-sm text-gray-500">
              {currentShadow.blur}px
            </span>
          </div>
          <input
            type="range"
            id="blur"
            min="0"
            max="100"
            value={currentShadow.blur}
            onChange={(e) => handleChange("blur", Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label
              htmlFor="spread"
              className="text-sm font-medium text-gray-700"
            >
              Spread
            </label>
            <span className="text-sm text-gray-500">
              {currentShadow.spread}px
            </span>
          </div>
          <input
            type="range"
            id="spread"
            min="-100"
            max="100"
            value={currentShadow.spread}
            onChange={(e) => handleChange("spread", Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        <div>
          <div className="flex justify-between mb-1">
            <label
              htmlFor="opacity"
              className="text-sm font-medium text-gray-700"
            >
              Opacity
            </label>
            <span className="text-sm text-gray-500">
              {currentShadow.opacity}
            </span>
          </div>
          <input
            type="range"
            id="opacity"
            min="0"
            max="1"
            step="0.01"
            value={currentShadow.opacity}
            onChange={(e) => handleChange("opacity", Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
          />
        </div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3">
            <label
              htmlFor="inset"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="checkbox"
                id="inset"
                checked={currentShadow.inset}
                onChange={(e) => handleChange("inset", e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
              />
              <span className="text-sm font-medium text-gray-700">Inset</span>
            </label>
          </div>
          <div className="flex items-center gap-2">
            <label
              htmlFor="color"
              className="text-sm font-medium text-gray-700"
            >
              Color
            </label>
            <div className="relative overflow-hidden w-10 h-10 rounded-full border border-gray-200 shadow-sm">
              <input
                type="color"
                id="color"
                value={currentShadow.color}
                onChange={(e) => handleChange("color", e.target.value)}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] p-0 border-0 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;