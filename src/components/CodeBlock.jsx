import React, { useState } from "react";

const CodeBlock = ({ shadowCSS }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shadowCSS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-slate-800 rounded-xl p-6 shadow-lg text-slate-300">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-sm font-medium uppercase tracking-wider text-slate-400">
          CSS Code
        </h3>
        <button
          onClick={handleCopy}
          className={`text-xs font-semibold px-3 py-1.5 rounded-md transition-all ${
            copied
              ? "bg-green-500 text-white"
              : "bg-slate-700 hover:bg-slate-600 text-white"
          }`}
        >
          {copied ? "Copied!" : "Copy Code"}
        </button>
      </div>
      <code className="block font-mono text-sm break-all bg-slate-900 p-4 rounded-lg border border-slate-700">
        {shadowCSS}
      </code>
    </div>
  );
};

export default CodeBlock;
