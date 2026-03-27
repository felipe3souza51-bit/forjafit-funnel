import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0f12',
        card: '#11181d',
        line: '#22313b',
        primary: '#7cff65',
        primaryDark: '#56d945',
        soft: '#dfffd8',
        text: '#f2f7f8',
        muted: '#9fb0b8',
        accent: '#72e4ff'
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,255,101,0.2), 0 12px 32px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(124,255,101,0.16), transparent 35%), linear-gradient(180deg, rgba(10,15,18,1) 0%, rgba(8,11,14,1) 100%)'
      }
    }
  },
  plugins: []
};

export default config;
