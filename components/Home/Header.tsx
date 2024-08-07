import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Header() {
  return (
    <ThemedView
      style={styles.titleContainer2}
      lightColor={"#F7F7FF"}
      darkColor={"#F7F7FF"}
    >
      <Feather name="user" size={24} color="black" />
      <Ionicons name="notifications-outline" size={24} color="black" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  titleContainer2: {
    paddingVertical: 6,
    flexDirection: "row",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  headerImages: {
    height: 100,
    width: 100,
  },
});
