// src/theme/fontLoader.ts
import { useFonts } from "expo-font";
import { fonts } from "../theme";
export const useAppFonts = () => {
  const fontConfig: Record<(typeof fonts)[keyof typeof fonts], any> = {
    // Inter
    [fonts.InterThin]: require("@/assets/fonts/Inter-Thin.ttf"),
    [fonts.InterExtraLight]: require("@/assets/fonts/Inter-ExtraLight.ttf"),
    [fonts.InterLight]: require("@/assets/fonts/Inter-Light.ttf"),
    [fonts.InterRegular]: require("@/assets/fonts/Inter-Regular.ttf"),
    [fonts.InterMedium]: require("@/assets/fonts/Inter-Medium.ttf"),
    [fonts.InterSemiBold]: require("@/assets/fonts/Inter-SemiBold.ttf"),
    [fonts.InterBold]: require("@/assets/fonts/Inter-Bold.ttf"),
    [fonts.InterExtraBold]: require("@/assets/fonts/Inter-ExtraBold.ttf"),
    [fonts.InterBlack]: require("@/assets/fonts/Inter-Black.ttf"),

    // Aleo
    [fonts.AleoThin]: require("@/assets/fonts/Aleo-Thin.ttf"),
    [fonts.AleoExtraLight]: require("@/assets/fonts/Aleo-ExtraLight.ttf"),
    [fonts.AleoLight]: require("@/assets/fonts/Aleo-Light.ttf"),
    [fonts.AleoRegular]: require("@/assets/fonts/Aleo-Regular.ttf"),
    [fonts.AleoMedium]: require("@/assets/fonts/Aleo-Medium.ttf"),
    [fonts.AleoSemiBold]: require("@/assets/fonts/Aleo-SemiBold.ttf"),
    [fonts.AleoBold]: require("@/assets/fonts/Aleo-Bold.ttf"),
    [fonts.AleoExtraBold]: require("@/assets/fonts/Aleo-ExtraBold.ttf"),
    [fonts.AleoBlack]: require("@/assets/fonts/Aleo-Black.ttf"),

    // Figtree
    [fonts.FigtreeLight]: require("@/assets/fonts/Figtree-Light.ttf"),
    [fonts.FigtreeRegular]: require("@/assets/fonts/Figtree-Regular.ttf"),
    [fonts.FigtreeMeduim]: require("@/assets/fonts/Figtree-Medium.ttf"),
    [fonts.FigtreeSemiBold]: require("@/assets/fonts/Figtree-SemiBold.ttf"),
    [fonts.FigtreeBold]: require("@/assets/fonts/Figtree-Bold.ttf"),
    [fonts.FigtreeExtraBold]: require("@/assets/fonts/Figtree-ExtraBold.ttf"),
    [fonts.FigtreeBlack]: require("@/assets/fonts/Figtree-Black.ttf"),

    // Poppins
    [fonts.PoppinsThin]: require("@/assets/fonts/Poppins-Thin.ttf"),
    [fonts.PoppinsExtraLight]: require("@/assets/fonts/Poppins-ExtraLight.ttf"),
    [fonts.PoppinsLight]: require("@/assets/fonts/Poppins-Light.ttf"),
    [fonts.PoppinsRegular]: require("@/assets/fonts/Poppins-Regular.ttf"),
    [fonts.PoppinsMedium]: require("@/assets/fonts/Poppins-Medium.ttf"),
    [fonts.PoppinsSemiBold]: require("@/assets/fonts/Poppins-SemiBold.ttf"),
    [fonts.PoppinsBold]: require("@/assets/fonts/Poppins-Bold.ttf"),
    [fonts.PoppinsExtraBold]: require("@/assets/fonts/Poppins-ExtraBold.ttf"),
    [fonts.PoppinsBlack]: require("@/assets/fonts/Poppins-Black.ttf"),
  };
  return useFonts(fontConfig);
};
