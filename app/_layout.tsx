import { useAppFonts } from "@/src/hooks/useAppFonts";
import { SplashScreen, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [loaded] = useAppFonts();
  const [sessionReady, setSessionReady] = useState(false);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    (async () => {
      // await StorageService.removeAccessToken();
      setSessionReady(true);
    })();
  }, []);

  if (!loaded || !sessionReady) return null;

  const screenOptions = { headerShown: false };

  return (
    <SafeAreaProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaProvider>
  );
}
