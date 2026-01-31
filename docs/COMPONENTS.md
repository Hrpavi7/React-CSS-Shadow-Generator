# Component Guide

## Overview

The CSS Shadow Generator is built with React components that work together to provide a complete shadow creation experience. Each component has a specific responsibility and communicates through well-defined props.

## Component Architecture

```
App.jsx (Root Component)
├── Header.jsx
├── ControlPanel.jsx
├── PreviewBox.jsx
├── PresetGallery.jsx
└── CodeBlock.jsx
```

## Detailed Component Descriptions

### App.jsx
**Purpose**: Main application component that manages global state and coordinates between child components.

**Key Features**:
- Manages shadow state array
- Handles layer management (add/remove/select)
- Provides preset selection functionality
- Optimizes performance with useMemo and useCallback

**State Management**:
- `shadows`: Array of shadow configurations
- `activeShadowIndex`: Currently selected layer index

### Header.jsx
**Purpose**: Displays application title and description.

**Features**:
- Clean, minimal design
- Responsive typography
- Memoized for performance

### ControlPanel.jsx
**Purpose**: Primary interface for shadow manipulation and layer management.

**Features**:
- Layer selection dropdown
- Individual shadow parameter controls (sliders)
- Add/remove layer buttons
- Real-time parameter updates

**Controls Include**:
- Horizontal offset slider (-50 to 50px)
- Vertical offset slider (-50 to 50px)
- Blur radius slider (0 to 50px)
- Spread radius slider (-20 to 20px)
- Opacity slider (0 to 1)
- Color picker (hex input)
- Inset shadow toggle

### PreviewBox.jsx
**Purpose**: Displays real-time shadow preview.

**Features**:
- Clean white background
- Responsive sizing
- Instant shadow updates
- Visual feedback for shadow changes

### PresetGallery.jsx
**Purpose**: Visual gallery of predefined shadow styles.

**Features**:
- Grid layout with responsive columns
- Visual preview of each preset
- One-click preset application
- Hover effects for better UX

**Grid Layout**:
- Mobile: 2 columns
- Tablet: 4 columns
- Desktop: 6 columns

### CodeBlock.jsx
**Purpose**: Displays generated CSS code with copy functionality.

**Features**:
- Syntax-highlighted CSS display
- One-click copy button
- Visual feedback on copy
- Responsive code block sizing

## Component Communication Flow

1. **User Interaction** → ControlPanel/PresetGallery
2. **State Update** → App.jsx handles state changes
3. **Derived State** → shadowCSS calculated with useMemo
4. **Props Distribution** → Updated props passed to PreviewBox and CodeBlock
5. **Visual Update** → Components re-render with new shadow data

## Performance Optimizations

### useMemo Usage
- `shadowCSS` calculation is memoized to prevent unnecessary recalculations
- Only recalculates when `shadows` array changes

### useCallback Usage
- Event handlers are memoized to prevent unnecessary re-renders
- Stable function references across renders

### React.memo Usage
- Header component is wrapped in React.memo for additional optimization
- Prevents re-renders when props haven't changed

## Responsive Design Patterns

### Mobile-First Approach
- Base styles designed for mobile devices
- Progressive enhancement for larger screens
- Touch-friendly interactive elements

### Flexbox Layout
- Main layout uses flexbox for responsive behavior
- Column stacking on mobile, side-by-side on desktop
- Sticky positioning for controls on desktop

### Grid Systems
- PresetGallery uses CSS Grid for flexible layouts
- Responsive column counts based on screen size
- Consistent spacing with gap utilities

## Accessibility Considerations

### Semantic HTML
- Proper heading hierarchy
- Label elements for form controls
- Button elements for interactive elements

### Visual Feedback
- Hover states for interactive elements
- Focus indicators for keyboard navigation
- Clear visual hierarchy

### Color Contrast
- High contrast text colors
- Accessible color combinations
- Clear visual separation between elements