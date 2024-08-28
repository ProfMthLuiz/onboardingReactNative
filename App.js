import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CompOnboarding from "./src/components/CompOnboarding";

export default function App() {
  return <CompOnboarding />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
