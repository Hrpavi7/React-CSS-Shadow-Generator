// presets for the shadow templates

export const SHADOW_PRESETS = [
  {
    name: "Default",
    shadows: [
      { horizontal: 10, vertical: 10, blur: 5, spread: 0, color: '#000000', opacity: 0.5, inset: false }
    ]
  },
  {
    name: "Hover",
    shadows: [
      { horizontal: 0, vertical: 10, blur: 20, spread: 0, color: '#000000', opacity: 0.19, inset: false },
      { horizontal: 0, vertical: 6, blur: 6, spread: 0, color: '#000000', opacity: 0.23, inset: false }
    ]
  },
  {
    name: "Sides",
    shadows: [
      { horizontal: 10, vertical: 0, blur: 10, spread: -5, color: '#000000', opacity: 0.5, inset: false },
      { horizontal: -10, vertical: 0, blur: 10, spread: -5, color: '#000000', opacity: 0.5, inset: false }
    ]
  },
  {
    name: "Button",
    shadows: [
      { horizontal: 0, vertical: 3, blur: 5, spread: 0, color: '#000000', opacity: 0.2, inset: false }
    ]
  },
  {
    name: "Mirrors",
    shadows: [
      { horizontal: 10, vertical: 10, blur: 0, spread: 0, color: '#2c3e50', opacity: 0.5, inset: false },
      { horizontal: -10, vertical: -10, blur: 0, spread: 0, color: '#2c3e50', opacity: 0.5, inset: false }
    ]
  },
  {
    name: "In & Out",
    shadows: [
      { horizontal: 5, vertical: 5, blur: 10, spread: 0, color: '#000000', opacity: 0.25, inset: true },
      { horizontal: 5, vertical: 5, blur: 10, spread: 0, color: '#000000', opacity: 0.25, inset: false }
    ]
  },
  {
    name: "Gradient",
    shadows: [
      { horizontal: 5, vertical: 5, blur: 10, spread: 0, color: '#3498db', opacity: 0.7, inset: false },
      { horizontal: 10, vertical: 10, blur: 20, spread: 0, color: '#e74c3c', opacity: 0.7, inset: false }
    ]
  },
  {
    name: "Pile",
    shadows: [
      { horizontal: 1, vertical: 1, blur: 0, spread: 0, color: '#1abc9c', opacity: 1, inset: false },
      { horizontal: 2, vertical: 2, blur: 0, spread: 0, color: '#1abc9c', opacity: 1, inset: false },
      { horizontal: 3, vertical: 3, blur: 0, spread: 0, color: '#1abc9c', opacity: 1, inset: false },
      { horizontal: 4, vertical: 4, blur: 0, spread: 0, color: '#1abc9c', opacity: 1, inset: false },
      { horizontal: 5, vertical: 5, blur: 0, spread: 0, color: '#1abc9c', opacity: 1, inset: false }
    ]
  },
  {
    name: "Checker",
    shadows: [
      { horizontal: 0, vertical: 0, blur: 0, spread: 5, color: '#000000', opacity: 0.1, inset: true },
      { horizontal: 0, vertical: 0, blur: 0, spread: 10, color: '#000000', opacity: 0.1, inset: true },
      { horizontal: 0, vertical: 0, blur: 0, spread: 15, color: '#000000', opacity: 0.1, inset: true }
    ]
  },
  {
    name: "Borders",
    shadows: [
      { horizontal: 0, vertical: 0, blur: 0, spread: 3, color: '#34495e', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 6, color: '#95a5a6', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 9, color: '#34495e', opacity: 1, inset: false }
    ]
  },
  {
    name: "Rainbow",
    shadows: [
      { horizontal: 0, vertical: 0, blur: 0, spread: 2, color: '#e74c3c', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 4, color: '#e67e22', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 6, color: '#f1c40f', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 8, color: '#2ecc71', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 10, color: '#3498db', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 12, color: '#9b59b6', opacity: 1, inset: false }
    ]
  },
  {
    name: "Candy",
    shadows: [
      { horizontal: 2, vertical: 2, blur: 0, spread: 0, color: '#e91e63', opacity: 1, inset: false },
      { horizontal: 4, vertical: 4, blur: 0, spread: 0, color: '#ffffff', opacity: 1, inset: false },
      { horizontal: 6, vertical: 6, blur: 0, spread: 0, color: '#e91e63', opacity: 1, inset: false }
    ]
  },
  {
    name: "Flames",
    shadows: [
      { horizontal: 0, vertical: -5, blur: 10, spread: 0, color: '#e67e22', opacity: 0.8, inset: false },
      { horizontal: 0, vertical: -10, blur: 20, spread: 0, color: '#e74c3c', opacity: 0.6, inset: false },
      { horizontal: 0, vertical: -15, blur: 30, spread: 0, color: '#f1c40f', opacity: 0.4, inset: false }
    ]
  },
  {
    name: "Candle",
    shadows: [
      { horizontal: 0, vertical: -10, blur: 25, spread: 0, color: '#ffffff', opacity: 0.5, inset: true },
      { horizontal: 0, vertical: -20, blur: 40, spread: 0, color: '#f1c40f', opacity: 0.5, inset: true },
      { horizontal: 0, vertical: -25, blur: 60, spread: 0, color: '#e67e22', opacity: 0.5, inset: true }
    ]
  },
  {
    name: "Well",
    shadows: [
      { horizontal: 0, vertical: 0, blur: 10, spread: 0, color: '#000000', opacity: 0.5, inset: true },
      { horizontal: 0, vertical: 0, blur: 20, spread: 0, color: '#000000', opacity: 0.5, inset: true }
    ]
  },
  {
    name: "Pyramid",
    shadows: [
      { horizontal: -10, vertical: -10, blur: 0, spread: 0, color: '#ecf0f1', opacity: 1, inset: true },
      { horizontal: 10, vertical: 10, blur: 0, spread: 0, color: '#bdc3c7', opacity: 1, inset: true }
    ]
  },
  {
    name: "Target",
    shadows: [
      { horizontal: 0, vertical: 0, blur: 0, spread: 10, color: '#e74c3c', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 20, color: '#ffffff', opacity: 1, inset: false },
      { horizontal: 0, vertical: 0, blur: 0, spread: 30, color: '#e74c3c', opacity: 1, inset: false }
    ]
  }
];