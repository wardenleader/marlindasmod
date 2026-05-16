/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["'Cormorant Garamond'", "Georgia", "serif"],
                sans: ["'Manrope'", "ui-sans-serif", "system-ui", "sans-serif"],
                cursive: ["'Allura'", "'Great Vibes'", "cursive"],
            },
            colors: {
                // Champagne Gold — accents only (lines, icons, small highlights)
                sage: {
                    DEFAULT: "#D6C3A3",
                    50: "#FAF7F1",
                    100: "#F2EBDB",
                    200: "#E8DCC1",
                    300: "#DECCA6",
                    400: "#D6C3A3",
                    500: "#C9B286",
                    600: "#B19967",
                    700: "#8C7A52",
                    800: "#665A3D",
                    900: "#403925",
                },
                // Warm Cream + Soft Taupe (main page background + alternates)
                cream: {
                    DEFAULT: "#F6F4F1",
                    50: "#FBFAF8",
                    100: "#F6F4F1",
                    200: "#E7E1D8",
                    300: "#DAD2C5",
                },
                taupe: {
                    DEFAULT: "#E7E1D8",
                    light: "#EFEAE2",
                    dark: "#D8CFC0",
                },
                // Dusty Blush — primary buttons + small highlights
                rose: {
                    DEFAULT: "#D8B7B7",
                    light: "#E8CECE",
                    dark: "#C7A0A0",
                },
                // Champagne Gold accent (alias for clarity)
                champagne: "#D6C3A3",
                // Soft Charcoal — body & headings
                ink: "#3A3A3A",
                charcoal: "#3A3A3A",
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                    gray: "#6B6B6B",
                },
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
                "ken-burns": {
                    "0%": { transform: "scale(1.15) translate(0, 0)" },
                    "100%": { transform: "scale(1.0) translate(-1%, -1%)" },
                },
                "soft-pulse": {
                    "0%, 100%": {
                        boxShadow: "0 0 0 0 rgba(216, 183, 183, 0.55)",
                    },
                    "50%": { boxShadow: "0 0 0 18px rgba(216, 183, 183, 0)" },
                },
                shimmer: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                float: {
                    "0%, 100%": { transform: "translateY(0)" },
                    "50%": { transform: "translateY(-12px)" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "ken-burns": "ken-burns 18s ease-out forwards",
                "soft-pulse": "soft-pulse 2.6s ease-out infinite",
                shimmer: "shimmer 2.5s ease-in-out infinite",
                float: "float 6s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
