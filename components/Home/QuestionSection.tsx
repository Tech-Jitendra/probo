import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { DeviceWidth } from "@/app/(tabs)";
import { ThemedText } from "../ThemedText";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function QuestionSection(data: { data: Array<any> }) {
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      style={styles.scrollView}
    >
      {Array.from({ length: 5 }).map((item, index) => (
        <ThemedView key={index} style={styles.themedViewContainer}>
          {/* top section */}
          <ThemedView style={styles.topSection}>
            {/* text section */}
            <ThemedView style={styles.textSection}>
              <ThemedText>questions</ThemedText>
              <ThemedText>description</ThemedText>
            </ThemedView>
            {/* image section */}
            <ThemedView style={styles.imageSection}>
              <Image
                resizeMode="contain"
                style={styles.categoryList2}
                source={require("@/assets/images/react-logo.png")}
              />
            </ThemedView>
          </ThemedView>
          {/* bottom section */}
          <ThemedView style={styles.bottomSection}>
            <Pressable
              onPress={() => alert("Yes")}
              style={styles.pressableButton}
            >
              <ThemedText
                style={styles.pressableText}
                lightColor="black"
                darkColor="white"
              >
                Yes
              </ThemedText>
            </Pressable>
            <Pressable
              onPress={() => alert("No")}
              style={styles.pressableButton}
            >
              <ThemedText
                style={styles.pressableText}
                lightColor="black"
                darkColor="white"
              >
                No
              </ThemedText>
            </Pressable>
          </ThemedView>
        </ThemedView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "gray",
  },
  scrollViewContent: {
    flexDirection: "column",
  },
  themedViewContainer: {
    width: DeviceWidth,
    padding: 10,
  },
  topSection: {
    width: "auto",
    flexDirection: "row",
    marginVertical: 2,
  },
  textSection: {
    width: "80%",
    backgroundColor: "orange",
  },
  imageSection: {
    width: "20%",
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomSection: {
    width: "auto",
    flexDirection: "row",
    backgroundColor: "green",
    justifyContent: "space-between",
  },
  pressableButton: {
    width: "45%",
    backgroundColor: "red",
    paddingVertical: 10,
  },
  pressableText: {
    textAlign: "center",
  },
  categoryList2: {
    height: 30,
    width: 30,
  },
});
