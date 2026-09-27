import { FadeText } from "@/src/components/FadeText";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const INPUTS: string[] = [
  "Stay connected with your friends and family in real-time.",
];

export default function Welcome() {
  const insets = useSafeAreaInsets();

  const onPress = () => {
    router.push("/login");
  };

  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: Math.max(insets.top, 40),
          paddingBottom: Math.max(insets.bottom, 24),
        },
      ]}
    >
      <StatusBar style="light" />

      <Text style={styles.title}>Chat With Us</Text>

      <Image
        source={require("../../assets/images/Onboard.png")}
        style={styles.image}
      />

      <View style={styles.textContainer} pointerEvents="none">
        <FadeText
          inputs={INPUTS}
          duration={3500}
          wordDelay={300}
          blurTint="extraLight"
          style={{
            fontFamily: "",
          }}
          fontSize={24}
        />
      </View>

      <Pressable
        onPress={() => {
          console.log("NORMAL PRESS");
          router.push("/register");
        }}
        style={{
          width: 200,
          height: 54,
          backgroundColor: "#fff",
          borderRadius: 27,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.btnText}>Get Started</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    marginVertical: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  btnText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: "35%",
    alignSelf: "center",
    resizeMode: "contain",
    marginVertical: 10,
  },
});
