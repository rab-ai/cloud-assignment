/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(0, 0%, 100%)', // bg-background için tanım
        foreground: 'hsl(224, 71.4%, 4.1%)', // text-foreground için tanım
        border: 'hsl(220, 13%, 91%)', // border-border için tanım
        ring: 'hsl(262.1, 83.3%, 57.8%)', // Eğer outline-ring eksikse
        primary: 'hsl(262.1, 83.3%, 57.8%)', // bg-primary için tanım
        'primary-foreground': 'hsl(210, 20%, 98%)', // text-primary-foreground için tanım
      },
    },
  },
  plugins: [],
}
