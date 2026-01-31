# Development Guide

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager
- Git for version control

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

## Available Scripts

### Development
```bash
npm run dev
```
Starts the Vite development server with hot module replacement.

### Production Build
```bash
npm run build
```
Creates an optimized production build in the `dist` folder.

### Preview Build
```bash
npm run preview
```
Serves the production build locally for testing.

### Code Quality
```bash
npm run lint
```
Runs ESLint to check code quality and style consistency.

## Development Workflow

### 1. Feature Development
- Create a new branch for your feature
- Make changes in the `src/` directory
- Test changes with the development server
- Run linting to ensure code quality
- Build and preview the production version

### 2. Code Style Guidelines

#### React Components
- Use functional components with hooks
- Follow the existing naming conventions
- Keep components focused and single-purpose
- Use TypeScript interfaces for prop types

#### CSS and Styling
- Use Tailwind CSS utility classes
- Follow the existing color scheme
- Maintain consistent spacing and typography
- Ensure responsive design patterns

#### File Organization
- Components in `src/components/`
- Utilities in `src/utils/`
- Data in `src/data/`
- Keep file names descriptive and consistent

### 3. Performance Best Practices

#### React Optimizations
- Use `useMemo` for expensive calculations
- Use `useCallback` for stable function references
- Wrap components in `React.memo` when appropriate
- Avoid unnecessary re-renders

#### State Management
- Keep state in the closest common ancestor
- Use derived state with `useMemo`
- Avoid prop drilling with proper component structure

### 4. Testing Considerations

#### Manual Testing
- Test on multiple screen sizes
- Verify all interactive elements work correctly
- Check preset functionality
- Validate CSS output accuracy

#### Browser Testing
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Common Development Tasks

### Adding a New Preset

1. Open `src/data/presets.js`
2. Add a new preset object to the `SHADOW_PRESETS` array
3. Include name and shadows array with proper shadow configuration
4. Test the new preset in the application

### Modifying Component Styling

1. Identify the component in `src/components/`
2. Update Tailwind classes or add new ones
3. Ensure responsive behavior is maintained
4. Test across different screen sizes

### Adding New Shadow Parameters

1. Update the shadow object structure in relevant components
2. Modify the `generateShadowCSS` function in `shadowUtils.js`
3. Add new controls in `ControlPanel.jsx`
4. Update TypeScript interfaces if applicable

## Debugging Tips

### Common Issues

#### Layout Problems
- Check Tailwind class conflicts
- Verify responsive breakpoints
- Ensure proper flexbox/grid usage

#### State Management Issues
- Use React DevTools to inspect state changes
- Check useCallback dependencies
- Verify useMemo dependency arrays

#### Performance Issues
- Profile with React DevTools Profiler
- Check for unnecessary re-renders
- Optimize expensive calculations

### Development Tools

#### Browser DevTools
- React Developer Tools
- Tailwind CSS IntelliSense
- CSS inspection tools

#### VS Code Extensions
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- React snippets

## Deployment

### Build Process
```bash
npm run build
```

### Deployment Options
- Static hosting (Netlify, Vercel, GitHub Pages)
- CDN deployment
- Traditional web hosting

### Environment Variables
- Set production environment variables
- Configure build settings
- Optimize for production performance