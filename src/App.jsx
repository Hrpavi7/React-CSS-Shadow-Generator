import { useState, useMemo, useCallback } from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import PreviewBox from './components/PreviewBox';
import CodeBlock from './components/CodeBlock';
import PresetGallery from './components/PresetGallery';
import { generateShadowCSS } from './utils/shadowUtils';
import { SHADOW_PRESETS } from './data/presets';

function App() {
  const [shadows, setShadows] = useState(SHADOW_PRESETS[0].shadows);
  const [activeShadowIndex, setActiveShadowIndex] = useState(0);

  // Derived state calculated during render
  const shadowCSS = useMemo(() => {
    return generateShadowCSS(shadows);
  }, [shadows]);

  const handleUpdateShadow = useCallback((index, key, value) => {
    setShadows(prev => {
      const newShadows = [...prev];
      newShadows[index] = { ...newShadows[index], [key]: value };
      return newShadows;
    });
  }, []);

  const handleAddShadow = useCallback(() => {
    setShadows(prev => [
      ...prev,
      { horizontal: 10, vertical: 10, blur: 5, spread: 0, color: '#000000', opacity: 0.5, inset: false }
    ]);
    setActiveShadowIndex(prev => prev + 1);
  }, []);

  const handleRemoveShadow = useCallback((index) => {
    if (shadows.length <= 1) return;
    setShadows(prev => prev.filter((_, i) => i !== index));
    setActiveShadowIndex(prev => Math.max(0, prev - 1));
  }, [shadows.length]);

  const handleSelectPreset = useCallback((newShadows) => {
    setShadows(newShadows);
    setActiveShadowIndex(0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto">
        <Header />
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-1/3 flex flex-col gap-6 lg:sticky lg:top-8 order-2 lg:order-1">
            <ControlPanel 
              shadows={shadows}
              activeShadowIndex={activeShadowIndex}
              onUpdateShadow={handleUpdateShadow}
              onAddShadow={handleAddShadow}
              onRemoveShadow={handleRemoveShadow}
              onSelectShadow={setActiveShadowIndex}
            />
          </div>
          <div className="w-full lg:w-2/3 flex flex-col gap-6 order-1 lg:order-2">
            <PreviewBox shadowCSS={shadowCSS} />
            <PresetGallery onSelectPreset={handleSelectPreset} />
            <CodeBlock shadowCSS={shadowCSS} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
