import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { DeviceWidth } from "@/app/(tabs)";
import { ThemedText } from "../ThemedText";
import { Colors } from "@/constants/Colors";

export default function CategorySection({ data }: { data: Array<any> }) {
  return (
    <ThemedView
      style={{
        width: DeviceWidth,
        // paddingHorizontal: 15,
        backgroundColor: "#F7F7FF",
      }}
    >
      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          flexDirection: "column",
        }}
        showsHorizontalScrollIndicator={false}
      >
        <ThemedView
          style={{
            margin: 5,
            flexDirection: "row",
            backgroundColor: "#F7F7FF",
          }}
        >
          {data?.map((item, index) => {
            return (
              <ThemedView
                key={index}
                style={{
                  margin: 5,
                  height: 50,
                  borderRadius: 10,
                  paddingVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  alt={`${item?.label}`}
                  style={styles.categoryList2}
                />
                <ThemedText
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginHorizontal: 2,
                  }}
                >
                  {item?.label}
                </ThemedText>
              </ThemedView>
            );
          })}
        </ThemedView>
        <ThemedView
          style={{
            margin: 5,
            flexDirection: "row",
            backgroundColor: "#F7F7FF",
          }}
        >
          {data?.map((item, index) => {
            return (
              <ThemedView
                key={index}
                style={{
                  margin: 5,
                  height: 50,
                  width: "auto",
                  borderRadius: 10,
                  paddingVertical: 5,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor: "white",
                }}
              >
                <ThemedText
                  style={{
                    color: "black",
                    textAlign: "center",
                    marginHorizontal: 2,
                  }}
                >
                  {item?.label}
                </ThemedText>
                <Image
                  resizeMode="contain"
                  source={item?.image}
                  alt={`${item?.label}`}
                  style={styles.categoryList2}
                />
              </ThemedView>
            );
          })}
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}
const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: Colors.light.tabIconDefault,
  },
  titleContainer: {
    justifyContent: "center",
    backgroundColor: "red",
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  categoryList: {
    height: 50,
    width: 50,
  },
  categoryList2: {
    height: 30,
    width: 30,
  },
  headerImages: {
    height: 140,
    margin: "auto",
    borderRadius: 10,
    width: DeviceWidth - 30,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
