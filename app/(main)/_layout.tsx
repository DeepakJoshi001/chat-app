import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const screenOptions = { headerShown: false };

  return (
    <SafeAreaProvider>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SafeAreaProvider>
  );
}
