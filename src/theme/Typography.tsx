export const fonts = {
  // Inter
  InterThin: "Inter-Thin",
  InterExtraLight: "Inter-ExtraLight",
  InterLight: "Inter-Light",
  InterRegular: "Inter-Regular",
  InterMedium: "Inter-Medium",
  InterSemiBold: "Inter-SemiBold",
  InterBold: "Inter-Bold",
  InterExtraBold: "Inter-ExtraBold",
  InterBlack: "Inter-Black",

  // Aleo
  AleoThin: "Aleo-Thin",
  AleoExtraLight: "Aleo-ExtraLight",
  AleoLight: "Aleo-Light",
  AleoRegular: "Aleo-Regular",
  AleoMedium: "Aleo-Medium",
  AleoSemiBold: "Aleo-SemiBold",
  AleoBold: "Aleo-Bold",
  AleoExtraBold: "Aleo-ExtraBold",
  AleoBlack: "Aleo-Black",

  // Figtree
  FigtreeLight: "Figtree-Light",
  FigtreeRegular: "Figtree-Regular",
  FigtreeMeduim: "Figtree-Medium",
  FigtreeSemiBold: "Figtree-SemiBold",
  FigtreeBold: "Figtree-Bold",
  FigtreeExtraBold: "Figtree-ExtraBold",
  FigtreeBlack: "Figtree-Black",

  // Poppins
  PoppinsThin: "Poppins-Thin",
  PoppinsExtraLight: "Poppins-ExtraLight",
  PoppinsLight: "Poppins-Light",
  PoppinsRegular: "Poppins-Regular",
  PoppinsMedium: "Poppins-Medium",
  PoppinsSemiBold: "Poppins-SemiBold",
  PoppinsBold: "Poppins-Bold",
  PoppinsExtraBold: "Poppins-ExtraBold",
  PoppinsBlack: "Poppins-Black",
} as const;

export const Typography = {
  family: {
    /**
     * heading font - Inter
     */
    headingBold: fonts.FigtreeBold,
    headingSemiBold: fonts.FigtreeSemiBold,
    headingMedium: fonts.FigtreeMeduim,

    /**
     * body font - Aleo
     */
    Body: fonts.FigtreeRegular,

    /**
     * UI
     */
    Label: fonts.FigtreeMeduim,
    Captions: fonts.FigtreeRegular,
  },

  size: {
    "6xl": 60,
    "5xl": 48,
    "4xl": 36,
    "3xl": 30,
    "2xl": 24,
    xl: 20,
    lg: 18,
    base: 16,
    sm: 14,
    xs: 12,
  },
} as const;
