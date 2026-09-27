import { Stack } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const screenOptions = { headerShown: false };

  return (
    <SafeAreaProvider>
      <Stack screenOptions={screenOptions}>
        <Stack.Screen name="login" />
        <Stack.Screen name="welcome" />
        <Stack.Screen name="register" />
      </Stack>
    </SafeAreaProvider>
  );
}
