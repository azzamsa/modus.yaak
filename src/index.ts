import { PluginDefinition } from "@yaakapp/api";
export const plugin: PluginDefinition = {
  themes: [
    {
      id: "modus-vivendi",
      label: "Modus Vivendi",
      dark: true,
      base: {
        surface: "#000000",
        surfaceHighlight: '#1d2235',
        // active selection on sidebar
        surfaceActive: '#2b3045',
        border: '#646464',
        borderSubtle: '#303030',
        text: "#ffffff",
        textSubtle: "#ffffff",
        textSubtlest: "#989898",
        primary: "#00d3d0",
        secondary: "#b6a0ff",
        info: "#2fafff",
        success: "#44bc44",
        notice: "#d0bc00",
        warning: "#fec43f",
        danger: "#ff5f59",
        selection: "#5a5a5a",
      },
    },
  ],
};
