export const Colors = {
    primary: "#00264D",
    secondary: "#F58733",
    white: "#FFFFFF",
    black: "#000000",

    lightBlue: "#00B0F0",
    blue: "#128CBA",

    grey: "#D9D9D9",
    greyLight: "#F0F1F5",
    greyMed: "#D8DAE3",
    greyDark: "#9396A5",

    green: "#3DA260",
    red: "#E85A6C",
    yellow: "#FFB100",
    info: "#51a6ca",
};

export const Fonts = {
    primary: "Poppins",
};

export const Environments = {
    dev: 'development',
    staging: 'staging',
    production: 'production',
}

export const Platform = {
    ios: 'ios',
    android: 'android',
}

export const PackageName = {
    ios: 'com.breezify.app',
    android: 'com.breezify.app',
};

export const NotificationMessages = {
    genericErrorMessage: "Something went wrong. Please try again later.",
};

export const OnboardingSlides = [
    {
        icon: 'privacy-tip',
        title: 'Terms & Privacy',
        subtitle: 'Stay Updated. Stay Safe',
        description: 'We take your privacy very seriously. Your data is never shared with third parties. We will only use your data to send you weather updates.',
    },
    {
        icon: 'location-on',
        title: 'Location Permissions',
        subtitle: 'Get Local Forecasts Wherever You Are',
        description: 'Enable location permissions to get local weather forecasts. You can always change this later in your settings.',
    },
    {
        icon: 'notifications-on',
        title: 'Notifications',
        subtitle: 'Stay Ahead of The Storm',
        description: 'Enable notifications to get weather alerts. You can always change this later in your settings.',
    },
]