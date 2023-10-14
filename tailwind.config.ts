import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '64px',
      md: '768px',
      lg: '1024px',
      xl: '1230px',
    },
    colors: {
      'primary': '#0a4b73',
      'secondary': '#bea073',
      'gray-light': '#f6f6f6',
      'gray-dark': '#333333',
      'neutral': '#1b1b1b',
      'white': '#ffffff',
    },
    fontFamily: {
      serif: ['Frank Ruhl Libre', 'serif'],
      sans: ['sans-serif'],
    },
  },
  plugins: [],
}
export default config
