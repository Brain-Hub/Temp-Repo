import LayoutConfigTypes from "@/core/config/LayoutConfigTypes";

const config: LayoutConfigTypes = {
  themeName: "Rootero",
  themeVersion: "8.0.33",
  demo: "demo7",
  main: {
    type: "default",
    primaryColor: "#009EF7",
    logo: {
      dark: "media/logos/rootero-letter-2.png",
      light: "media/logos/rootero-letter-2.png",
    },
  },
  illustrations: {
    set: "sketchy-1",
  },
  layout: {
    layoutConfig: false,
    linksEnabled: false,
    cyclesEnabled: false,
    notifications: false,
    toolboxEnabled: false,
    quickActionsEnabled: false,
    environmentsEnabled: false,
  },
  loader: {
    logo: "media/logos/rootero-letter-2.png",
    display: true,
    type: "spinner-logo",
  },
  scrollTop: {
    display: true,
  },
  header: {
    display: true,
    menuIcon: "font",
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  toolbar: {
    display: true,
    width: "fluid",
    fixed: {
      desktop: true,
      tabletAndMobile: true,
    },
  },
  aside: {
    display: true,
    secondaryDisplay: true,
    theme: "dark",
    fixed: true,
    menuIcon: "svg",
    minimized: false,
    minimize: true,
    hoverable: true,
  },
  content: {
    width: "fixed",
  },
  footer: {
    width: "fluid",
  },
};

export default config;
