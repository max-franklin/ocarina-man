import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        "blocky-bounce": {
          '0%, 100%': {
            transform: 'translateY(-25%)'
          },
          '50%': {
            transform: 'translateY(0)'
          }
        },
        "blocky-bounce-up": {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-25%)'
          }
        }
      },
      animation: {
        'blocky-bounce': 'blocky-bounce 1s steps(1, end) infinite',
        'blocky-bounce-up': 'blocky-bounce-up 1s steps(1, end) infinite',
      }
    },
  },
  plugins: [],
}
export default config
