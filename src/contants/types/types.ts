import type { BlurViewProps } from "expo-blur";
import type {
  StyleProp,
  TextInputProps,
  TextStyle,
  ViewStyle,
} from "react-native";

export interface FadeTextTypes {
  inputs: string[];
  wordDelay?: number;
  duration?: number;
  blurIntensity?: number[];
  blurTint?: BlurViewProps["tint"];
  scaleRange?: number[];
  translateYRange?: number[];
  opacityRange?: number[] | undefined;
  fontSize?: number;
  fontWeight?: TextStyle["fontWeight"];
  color?: string;
  textAlign?: TextStyle["textAlign"];
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
}

export interface AnimatedWordTypes extends Omit<
  FadeTextTypes,
  | "inputs"
  | "containerStyle"
  | "wordDelay"
  | "blurIntensity"
  | "scaleRange"
  | "translateYRange"
  | "opacityRange"
> {
  word: string;
  index: number;
  delay: number;
  blurIntensity: number[];
  scaleRange: number[];
  translateYRange: number[];
  opacityRange: number[];
}

export interface ICharacter {
  char: string;
  index: number;
  enterDuration: number;
  exitDuration: number;
  delayIncrement: number;
  style?: StyleProp<TextStyle>;
}

export interface IAnimatedInput extends Omit<
  TextInputProps,
  "value" | "onChangeText" | "style"
> {
  placeholders: string[];
  animationInterval?: number;
  value?: string;
  onChangeText?: (text: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  inputWrapperStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  placeholderStyle?: StyleProp<TextStyle>;
  characterEnterDuration?: number;
  characterExitDuration?: number;
  characterDelayIncrement?: number;
  blurAnimationDuration?: number;
  blurIntensityRange?: number[];
  blurProgressRange?: number[];
}
