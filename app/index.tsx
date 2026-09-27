import { Redirect } from "expo-router";

export default function Index() {
  // Fallback when authenticated but role is unknown
  return <Redirect href="/welcome" />;
}
