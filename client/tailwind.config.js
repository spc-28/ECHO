/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	  "./pages/**/*.{ts,tsx}",
	  "./components/**/*.{ts,tsx}",
	  "./app/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
	  container: {
		center: true,
		padding: '2rem',
		screens: {
		  '2xl': '1400px'
		}
	  },
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)'
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))'
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))'
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))'
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))'
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))'
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))'
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))'
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))'
		  },
		  echo: {
			'blue': '#646cff',
			'highlight': '#6366f1',
			'dark': '#1e1e2e',
			'darker': '#111827',
			'lighter': '#27293e',
			'light-blue': '#61dafb',
		  },
		  sidebar: {
			DEFAULT: 'hsl(var(--sidebar-background))',
			foreground: 'hsl(var(--sidebar-foreground))',
			primary: 'hsl(var(--sidebar-primary))',
			'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			accent: 'hsl(var(--sidebar-accent))',
			'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			border: 'hsl(var(--sidebar-border))',
			ring: 'hsl(var(--sidebar-ring))'
		  }
		},
		keyframes: {
		  'accordion-down': {
			from: { height: '0' },
			to: { height: 'var(--radix-accordion-content-height)' },
		  },
		  'accordion-up': {
			from: { height: 'var(--radix-accordion-content-height)' },
			to: { height: '0' },
		  },
		  'fade-in': {
			from: { opacity: '0' },
			to: { opacity: '1' },
		  },
		  'fade-down': {
			from: { opacity: '0', transform: 'translateY(-20px)' },
			to: { opacity: '1', transform: 'translateY(0)' },
		  },
		  'fade-up': {
			from: { opacity: '0', transform: 'translateY(20px)' },
			to: { opacity: '1', transform: 'translateY(0)' },
		  },
		  'float': {
			'0%, 100%': { transform: 'translateY(0)' },
			'50%': { transform: 'translateY(-10px)' },
		  },
		  'pulse-slow': {
			'0%, 100%': { opacity: '1' },
			'50%': { opacity: '0.8' },
		  },
		  'spin-slow': {
			from: { transform: 'rotate(0deg)' },
			to: { transform: 'rotate(360deg)' },
		  },
		  'scale': {
			from: { transform: 'scale(0.95)' },
			to: { transform: 'scale(1)' },
		  },
		},
		animation: {
		  'accordion-down': 'accordion-down 0.2s ease-out',
		  'accordion-up': 'accordion-up 0.2s ease-out',
		  'fade-in': 'fade-in 0.5s ease-out forwards',
		  'fade-down': 'fade-down 0.5s ease-out forwards',
		  'fade-up': 'fade-up 0.5s ease-out forwards',
		  'float': 'float 6s ease-in-out infinite',
		  'pulse-slow': 'pulse-slow 4s ease-in-out infinite',
		  'spin-slow': 'spin-slow 8s linear infinite',
		  'scale': 'scale 0.3s ease-out forwards',
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		  'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
		  'gradient-glass': 'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.01))',
		},
		boxShadow: {
		  'echo': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
		  'echo-lg': '0 10px 60px -15px rgba(0, 0, 0, 0.7)',
		  'echo-glow': '0 0 20px rgba(97, 218, 251, 0.25)',
		  'echo-glass': '0 8px 32px rgba(0, 0, 0, 0.2)'
		},
	  }
	},
	plugins: [require("tailwindcss-animate")],
  }