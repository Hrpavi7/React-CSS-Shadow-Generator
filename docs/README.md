# CSS Shadow Generator

A modern, interactive CSS box-shadow generator built with React and Tailwind CSS. Create beautiful multi-layer shadows with real-time preview and copy-to-clipboard functionality.

## 🌟 Features

- **Multi-layer Shadow Support**: Create complex shadows with multiple layers
- **16 Built-in Presets**: Quick-start with professionally designed shadow styles
- **Real-time Preview**: See your shadow changes instantly
- **Interactive Controls**: Fine-tune every shadow parameter with intuitive sliders
- **Responsive Design**: Works perfectly on desktop and mobile devices
- **Copy-to-Clipboard**: One-click CSS code copying
- **Layer Management**: Add, remove, and switch between shadow layers
- **Modern UI**: Clean, professional interface with smooth animations

## 🚀 Preset Styles

The generator includes 16 professionally designed preset styles:

- **Hover**: Elegant hover effects with subtle depth
- **Sides**: Side-focused shadows for dimensional effects
- **Button**: Clean button-style shadows
- **Mirrors**: Reflective shadow combinations
- **In & Out**: Combined inset and outset shadows
- **Gradient**: Multi-layer gradient-style shadows
- **Pile**: Stacked shadow effects
- **Checker**: Alternating shadow patterns
- **Borders**: Border-style shadow effects
- **Rainbow**: Colorful multi-shadow combinations
- **Candy**: Playful, vibrant shadow styles
- **Flames**: Dynamic, fiery shadow effects
- **Candle**: Soft, warm shadow combinations
- **Well**: Deep, recessed shadow effects
- **Pyramid**: Structured, geometric shadows
- **Target**: Focused, target-style shadows

## 🛠️ Technical Stack

- **Frontend Framework**: React 19.2.0 with modern hooks
- **Styling**: Tailwind CSS 4.1.18 with Vite integration
- **Build Tool**: Vite 7.2.4 for fast development and building
- **Code Quality**: ESLint with React-specific rules
- **Performance**: Optimized with useMemo and useCallback hooks

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ControlPanel.jsx  # Main shadow controls and layer management
│   ├── PreviewBox.jsx    # Shadow preview display
│   ├── CodeBlock.jsx     # CSS code display with copy functionality
│   ├── PresetGallery.jsx # Visual preset selection grid
│   └── Header.jsx        # Application header and description
├── data/
│   └── presets.js        # 16 predefined shadow configurations
├── utils/
│   └── shadowUtils.js    # Shadow CSS generation utilities
├── App.jsx              # Main application component
├── main.jsx             # Application entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎯 Key Components

### ControlPanel
- Layer management (add/remove/select layers)
- Individual shadow parameter controls
- Horizontal/vertical offset sliders
- Blur, spread, and opacity controls
- Color picker with hex support
- Inset shadow toggle

### PresetGallery
- Visual grid of all 16 presets
- One-click preset application
- Responsive grid layout (2-6 columns based on screen size)
- Hover effects for better user experience

### PreviewBox
- Real-time shadow preview
- Clean, minimal design focus
- Responsive sizing

### CodeBlock
- Generated CSS display
- One-click copy functionality
- Syntax highlighting preparation

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Hrpavi7/React-CSS-Shadow-Generator.git
cd css-shadow-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code quality checks

## 💡 Usage Examples

### Creating a Simple Shadow
1. Start with the default preset
2. Adjust the horizontal and vertical offsets using the sliders
3. Modify blur and spread values to achieve desired softness
4. Change the color and opacity to match your design
5. Copy the generated CSS code

### Creating Multi-layer Shadows
1. Click "Add Layer" to create additional shadow layers
2. Configure each layer independently
3. Switch between layers using the layer selector
4. Combine different colors, offsets, and blur values
5. Remove unwanted layers with the "Remove" button

### Using Presets
1. Browse the preset gallery below the preview
2. Click on any preset to apply it instantly
3. Customize the preset further if needed
4. Copy the final CSS code for your project

## 🎨 Customization

The project uses Tailwind CSS for styling, making customization straightforward:

- Modify `src/index.css` for global style changes
- Update component classes for UI adjustments
- Customize color schemes in the Tailwind configuration
- Adjust responsive breakpoints as needed

## 🔧 Technical Details

### Shadow CSS Generation
The application uses a sophisticated shadow generation system:

```javascript
// Converts hex colors to RGBA format
export const hexToRgba = (hex, alpha) => {
  // Hex to RGB conversion logic
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Generates complete box-shadow CSS
export const generateShadowCSS = (shadows) => {
  // Multi-layer shadow string generation
  return `box-shadow: ${shadowStrings.join(', ')};`;
};
```

### Performance Optimizations
- **useMemo**: CSS generation is memoized to prevent unnecessary recalculations
- **useCallback**: Event handlers are memoized to prevent unnecessary re-renders
- **React.memo**: Components are optimized to prevent unnecessary updates

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Flexible grid layouts that adapt to screen size
- Sticky controls on desktop for better usability
- Reordered layout on mobile for intuitive flow

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues, feature requests, or pull requests.

### Development Guidelines
1. Follow the existing code style and conventions
2. Use meaningful commit messages
3. Test your changes across different screen sizes
4. Ensure the build passes before submitting PRs

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with modern React patterns and best practices
- Styled with the beautiful Tailwind CSS framework
- Optimized for performance and user experience
- Designed for both beginners and advanced users

---

**Happy shadow generating!** 🎨✨