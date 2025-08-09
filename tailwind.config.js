module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e6f3ff",
          100: "#b3d9ff", 
          200: "#80bfff",
          300: "#4da6ff",
          400: "#1a8cff",
          500: "#1a365d", // blue-900 - Professional authority and trust foundation
          600: "#153056",
          700: "#102a4f", 
          800: "#0b2448",
          900: "#061e41",
          DEFAULT: "#1a365d" // blue-900
        },
        secondary: {
          50: "#e6feff",
          100: "#b3fcff",
          200: "#80faff", 
          300: "#4df8ff",
          400: "#1af6ff",
          500: "#00d9ff", // cyan-400 - Innovation highlights and interactive elements
          600: "#00c4e6",
          700: "#00afcc",
          800: "#009ab3", 
          900: "#008599",
          DEFAULT: "#00d9ff" // cyan-400
        },
        accent: "#f7fafc", // gray-50 - Clean canvas for technical content
        background: "#ffffff", // white - Pure readability for extended content
        surface: "#edf2f7", // gray-100 - Subtle code block and section separation
        text: {
          primary: "#2d3748", // gray-700 - Maximum readability for technical documentation
          secondary: "#718096" // gray-500 - Clear hierarchy without harsh contrast
        },
        success: "#38a169", // green-600 - Positive project outcomes and achievements
        warning: "#d69e2e", // yellow-600 - Important technical notes and considerations
        error: "#e53e3e", // red-600 - Critical information and debugging contexts
        border: {
          DEFAULT: "#e2e8f0", // gray-200 - Form inputs and content separation
          light: "#f1f5f9" // gray-100 - Subtle separations
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace']
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }]
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700'
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'medium': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'large': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-strong': '0 0 30px rgba(0, 217, 255, 0.5)'
      },
      animation: {
        'code-typing': 'code-typing 2s steps(40, end)',
        'fade-in-up': 'fade-in-up 0.4s ease-out',
        'pulse-glow': 'pulse-glow 2s infinite'
      },
      keyframes: {
        'code-typing': {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'fade-in-up': {
          'from': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          'to': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(0, 217, 255, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(0, 217, 255, 0.6)'
          }
        }
      },
      transitionDuration: {
        '250': '250ms',
        '400': '400ms'
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)'
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem'
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem'
      }
    },
  },
  plugins: [],
}