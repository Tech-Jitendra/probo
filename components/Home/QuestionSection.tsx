import {
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
} from "react-native";
import React from "react";
import { ThemedView } from "../ThemedView";
import { ThemedText } from "../ThemedText";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { DeviceWidth } from "@/constants/Utils";

const QuestionSection = ({
  data,
}: {
  data: {
    question: String;
    description: String;
    image: String;
  }[];
}) => {
  const renderItem = ({ item, index }) => (
    <ThemedView key={index} style={styles.themedViewContainer}>
      {/* top section */}
      <ThemedView style={styles.topSection}>
        {/* text section */}
        <ThemedView style={styles.textSection}>
          <ThemedText style={{ color: "black", fontSize: 15, fontWeight: 500 }}>
            {item?.question}
          </ThemedText>
          <ThemedText style={{ color: "black", fontSize: 10 }}>
            {item?.description}
          </ThemedText>
        </ThemedView>
        {/* image section */}
        <ThemedView style={styles.imageSection}>
          <Image
            resizeMode="contain"
            source={item?.image}
            alt={`${item?.image}`}
            style={styles.categoryList2}
          />
        </ThemedView>
      </ThemedView>
      {/* bottom section */}
      <ThemedView style={styles.bottomSection}>
        <Pressable onPress={() => alert("Yes")} style={styles.pressableButton}>
          <ThemedText
            style={styles.pressableText}
            lightColor="black"
            darkColor="white"
          >
            YES ₹ 5.4
          </ThemedText>
        </Pressable>
        <Pressable
          onPress={() => alert("No")}
          style={[
            styles.pressableButton,
            {
              borderWidth: 1,
              borderColor: "#bd4444",
              backgroundColor: "#f79992",
            },
          ]}
        >
          <ThemedText
            style={[
              styles.pressableText,
              {
                color: "#bd4444",
              },
            ]}
            lightColor="black"
            darkColor="white"
          >
            NO ₹ 4.3
          </ThemedText>
        </Pressable>
      </ThemedView>
    </ThemedView>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.flatListContent}
      style={styles.flatList}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    backgroundColor: "#F7F7FF",
  },
  flatListContent: {
    paddingBottom: 50,
    flexDirection: "column",
  },
  themedViewContainer: {
    margin: "auto",
    borderRadius: 10,
    marginBottom: 5,
    backgroundColor: "white",
    width: DeviceWidth - 30,
    // backgroundColor: "#F7F7FF",
  },
  topSection: {
    width: "auto",
    marginVertical: 6,
    flexDirection: "row",
    marginHorizontal: 6,
    backgroundColor: "white",
  },
  textSection: {
    width: "80%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    backgroundColor: "white",
  },
  imageSection: {
    width: "20%",
    alignItems: "center",
    backgroundColor: "white",
    justifyContent: "center",
  },
  bottomSection: {
    width: "auto",
    borderRadius: 10,
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  pressableButton: {
    margin: 5,
    width: "45%",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    borderColor: "#4d66b0",
    backgroundColor: "#83dcf7",
  },
  pressableText: {
    color: "#4d66b0",
    fontWeight: 500,
    textAlign: "center",
  },
  categoryList2: {
    height: 30,
    width: 30,
  },
});

export default QuestionSection;
