/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container
        padding: '2rem', // Adds padding
        screens: {
          sm: '100%', // Custom width for small screens
          md: '728px', // Custom width for medium screens
          lg: '1024px', // Custom width for large screens
          xl: '1280px', // Custom width for extra-large screens
        },
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(0deg, rgba(33, 150, 243, 0) 0%, rgba(33, 150, 243, 0.0543662) 6.48%, rgba(33, 150, 243, 0.2) 11.92%, rgba(33, 150, 243, 0.6) 25.94%, #2196F3 50.5%, rgba(33, 150, 243, 0.6) 72.43%, rgba(33, 150, 243, 0.2) 87.29%, rgba(33, 150, 243, 0.0492946) 93.74%, rgba(33, 150, 243, 0) 100%)',
      },
      
    },
  },
  plugins: [],
};
