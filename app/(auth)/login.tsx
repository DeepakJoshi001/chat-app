import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AnimatedInputBar from "../../src/components/InputField";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Pressable
          accessibilityLabel="Go back"
          accessibilityRole="button"
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </Pressable>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>
          Welcome back! Please enter your details
        </Text>
        {/* <View style={styles.field}>
          <Text style={styles.label}>Username</Text>
          <View style={styles.inputContainer}>
            <AnimatedInputBar
              placeholders={["Enter your username"]}
              value={username}
              animationInterval={900}
              onChangeText={setUsername}
              selectionColor="#353535"
              placeholderStyle={{
                fontFamily: "",
              }}
            />
          </View>
        </View> */}
        <View style={styles.field}>
          <Text style={styles.label}>Email</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="mail-outline" size={18} color="#fff" />
            <AnimatedInputBar
              placeholders={["Enter your email"]}
              value={email}
              animationInterval={900}
              onChangeText={setEmail}
              selectionColor="#353535"
              keyboardType="email-address"
              autoCapitalize="none"
              placeholderStyle={{
                fontFamily: "",
              }}
            />
          </View>
        </View>
        <View style={styles.field}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.inputContainer}>
            <Ionicons name="lock-closed" size={18} color="#fff" />
            <AnimatedInputBar
              placeholders={["Enter your password"]}
              value={password}
              animationInterval={900}
              onChangeText={setPassword}
              selectionColor="#353535"
              keyboardType="default"
              autoCapitalize="none"
              placeholderStyle={{
                fontFamily: "",
              }}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable
            onPress={() => {
              console.log("NORMAL PRESS");
              router.push("/home");
            }}
            style={{
              width: "100%",
              height: 54,
              backgroundColor: "#fff",
              borderRadius: 27,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={styles.btnText}>Sign In</Text>
          </Pressable>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ marginTop: 10, color: "#fff" }}>
              Don't have an account?{" "}
              <Text
                style={styles.link}
                onPress={() => router.push("/register")}
              >
                Register
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000",
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    width: 44,
    height: 44,
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 15,
    paddingVertical: 10,
    color: "gray",
    justifyContent: "flex-start",
  },
  subtitle: {
    fontSize: 16,
    color: "gray",
    marginBottom: 20,
  },
  field: {
    width: "100%",
    marginTop: 12,
  },
  label: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 6,
    paddingHorizontal: 16,
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#111",
    paddingHorizontal: 16,
    borderRadius: 26,
    height: 56,
  },
  buttonContainer: {
    marginTop: 20,
    width: "100%",
  },
  btnText: {
    fontSize: 17,
    fontWeight: "600",
    color: "#000",
  },
  link: {
    color: "#007AFF",
  },
});
