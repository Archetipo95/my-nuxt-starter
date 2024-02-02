import type { Config } from 'tailwindcss'

export default {
  content: ['./components/**/*.{html,js,vue}'],
  // Toggle dark-mode based on class or data-mode=”dark”
  //darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config
