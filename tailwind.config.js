/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // This links 'brand' to your CSS variable
        brand: "var(--color-primary)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 35px 120px rgba(37, 99, 235, 0.12)'
      }
    }
  },
  plugins: []
};
