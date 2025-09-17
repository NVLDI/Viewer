import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { ScanLine } from "lucide-react-native"; // axial slice icon
import { SafeAreaView } from "react-native-safe-area-context";

export default function AxialView() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <ScanLine size={64} color="#38bdf8" />
        <Text style={styles.title}>Axial View</Text>
        <Text style={styles.subtitle}>Horizontal slices of medical images</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0f172a",
  },
  card: {
    backgroundColor: "#0f172a",
    padding: 50,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    color: "#e2e8f0",
  },
  subtitle: {
    fontSize: 14,
    color: "#94a3b8",
    marginTop: 4,
    padding: 8,
    textAlign: "center",
  },
});
