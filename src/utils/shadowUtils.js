// convert Hex to RGBA
export const hexToRgba = (hex, alpha) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// generate CSS shadow string
export const generateShadowCSS = (shadows) => {
  const shadowStrings = shadows.map(shadow => {
    const { horizontal, vertical, blur, spread, color, opacity, inset } = shadow;
    const rgbaColor = hexToRgba(color, opacity);
    return `${inset ? 'inset ' : ''}${horizontal}px ${vertical}px ${blur}px ${spread}px ${rgbaColor}`;
  });
  
  return `box-shadow: ${shadowStrings.join(', ')};`;
};
