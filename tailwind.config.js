/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1A1A1A', // Near-black for light mode text
          dark: '#FFFFFF',    // White for dark mode text
        },
        secondary: {
          DEFAULT: '#6B7280', // Medium gray for light mode secondary text
          dark: '#9CA3AF',    // Lighter gray for dark mode secondary text
        }, accent: {
          DEFAULT: '#6B7280', // Medium gray for light mode secondary text
          dark: '#8B5CF6',    // Purple for dark mode toggle
        },
        background: {
          DEFAULT: '#FFFFFF', // White for light mode background
          dark: '#1F2937',    // Dark gray for dark mode background
        },
        surface: {
          DEFAULT: '#F3F4F6', // Light gray for light mode surface
          dark: '#374151',    // Slightly lighter gray for dark mode surface
        },
      },
    },
  },

  plugins: [require('daisyui')]
};

