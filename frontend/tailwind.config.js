/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ["'Cormorant Garamond'", "Georgia", "serif"],
                sans: ["'Manrope'", "ui-sans-serif", "system-ui", "sans-serif"],
                cursive: ["'Great Vibes'", "cursive"],
            },
            colors: {
                sage: {
                    DEFAULT: "#7A8B6F",
                    50: "#F2F4EF",
                    100: "#E2E7DC",
                    200: "#C5CFB9",
                    300: "#A8B796",
                    400: "#8B9D7C",
                    500: "#7A8B6F",
                    600: "#5C6B50",
                    700: "#46523D",
                    800: "#30382A",
                    900: "#1A1F17",
                },
                cream: {
                    DEFAULT: "#F5F1EA",
                    50: "#FBF9F5",
                    100: "#F5F1EA",
                    200: "#EAE4D6",
                    300: "#DFD7C2",
                },
                rose: {
                    DEFAULT: "#D4A5A5",
                    light: "#E5C2C2",
                    dark: "#C28C8C",
                },
                champagne: "#C5A059",
                ink: "#2C2C2C",
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
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
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
                        boxShadow: "0 0 0 0 rgba(212, 165, 165, 0.55)",
                    },
                    "50%": { boxShadow: "0 0 0 18px rgba(212, 165, 165, 0)" },
                },
                shimmer: {
                    "0%": { transform: "translateX(-100%)" },
                    "100%": { transform: "translateX(100%)" },
                },
                "scroll-down": {
                    "0%": { transform: "translateY(-50%)", opacity: "0" },
                    "30%": { opacity: "1" },
                    "100%": { transform: "translateY(50%)", opacity: "0" },
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
                "scroll-down": "scroll-down 1.8s ease-in-out infinite",
                float: "float 6s ease-in-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
