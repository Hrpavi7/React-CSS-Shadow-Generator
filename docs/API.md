# API Documentation

## Shadow Utilities

### `hexToRgba(hex, alpha)`

Converts a hexadecimal color to RGBA format.

**Parameters:**
- `hex` (string): Hex color code (e.g., '#FF0000' or '#F00')
- `alpha` (number): Opacity value between 0 and 1

**Returns:**
- `string`: RGBA color string (e.g., 'rgba(255, 0, 0, 0.5)')

**Example:**
```javascript
const rgba = hexToRgba('#FF0000', 0.5);
// Returns: 'rgba(255, 0, 0, 0.5)'
```

### `generateShadowCSS(shadows)`

Generates a complete CSS box-shadow property from an array of shadow configurations.

**Parameters:**
- `shadows` (Array): Array of shadow objects with the following properties:
  - `horizontal` (number): Horizontal offset in pixels
  - `vertical` (number): Vertical offset in pixels
  - `blur` (number): Blur radius in pixels
  - `spread` (number): Spread radius in pixels
  - `color` (string): Hex color code
  - `opacity` (number): Opacity value between 0 and 1
  - `inset` (boolean): Whether the shadow is inset

**Returns:**
- `string`: Complete CSS box-shadow property

**Example:**
```javascript
const shadows = [
  {
    horizontal: 10,
    vertical: 10,
    blur: 5,
    spread: 0,
    color: '#000000',
    opacity: 0.5,
    inset: false
  }
];

const css = generateShadowCSS(shadows);
// Returns: 'box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.5);'
```

## Component Props

### ControlPanel Props

| Prop | Type | Description |
|------|------|-------------|
| `shadows` | Array | Array of shadow configuration objects |
| `activeShadowIndex` | number | Index of the currently active shadow layer |
| `onUpdateShadow` | function | Callback to update a shadow property |
| `onAddShadow` | function | Callback to add a new shadow layer |
| `onRemoveShadow` | function | Callback to remove a shadow layer |
| `onSelectShadow` | function | Callback to select a different shadow layer |

### PresetGallery Props

| Prop | Type | Description |
|------|------|-------------|
| `onSelectPreset` | function | Callback when a preset is selected |

### PreviewBox Props

| Prop | Type | Description |
|------|------|-------------|
| `shadowCSS` | string | Generated CSS shadow property |

### CodeBlock Props

| Prop | Type | Description |
|------||-------------|
| `shadowCSS` | string | Generated CSS shadow property to display |

## Shadow Object Structure

```typescript
interface Shadow {
  horizontal: number;  // Horizontal offset in pixels
  vertical: number;    // Vertical offset in pixels
  blur: number;        // Blur radius in pixels
  spread: number;      // Spread radius in pixels
  color: string;       // Hex color code (e.g., '#000000')
  opacity: number;     // Opacity value (0-1)
  inset: boolean;      // Whether shadow is inset
}
```

## Preset Data Structure

```typescript
interface Preset {
  name: string;        // Display name of the preset
  shadows: Shadow[];   // Array of shadow configurations
}
```