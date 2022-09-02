module.exports = {
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#0071dc",
                },
                secondary: {
                    DEFAULT: "#ffc221",
                },
                heading: {
                    DEFAULT: "#333333",
                },
                body: "#666666",
                white: {
                    DEFAULT: "#FFFFFF",
                    200: "#f2f2f2",
                },
                gallery: {
                    DEFAULT: "#eeeeee",
                },
            },
            borderRadius: {
                DEFAULT: "5px",
            },
            boxShadow: {
                xs: "4px 4px 8px",
            },
            spacing: {
                7.5: "1.875rem",
                15: "3.75rem",
            },
        },
        fontFamily: {
            fontAwesome: [`"Font Awesome 5 Pro"`],
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "15px",
            },
        },
        screens: {
            xs: "480px",
            sm: "640px",
            md: "768px",
            lg: "1200px",
            xl: "1440px",
        },
    },
    plugins: [
        function ({ addVariant }) {
            addVariant("children", "& > *");
        },
    ],
};
