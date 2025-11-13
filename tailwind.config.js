module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      scale: {
        '102': '1.02', // Example for a slightly smaller scale
        '110': '1.10', // Example for a larger scale
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease',
      },
    },
  },
  plugins: [],
  // Extending the container settings
  corePlugins: {
    container: false, // Disable the default container settings if needed
  },
  // You can create a custom container with full width
  theme: {
    container: {
      center: false,  // Remove centering if not needed
      padding: '0',   // Remove any default padding
      screens: {
        sm: '100%',    // Full width for all screen sizes
        md: '100%',
        lg: '100%',
        xl: '100%',
        '2xl': '100%',
      },
    },
  },
};
