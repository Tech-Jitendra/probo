import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  Dimensions,
  TouchableNativeFeedback,
  Pressable,
  View,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Header from "@/components/Home/Header";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import CategorySection from "@/components/Home/CategorySection";

import Ionicons from "@expo/vector-icons/Ionicons";
import QuestionSection from "@/components/Home/QuestionSection";
import { DeviceHeight, DeviceWidth } from "@/constants/Utils";

const data = [
  { label: "cricket", image: require("@/assets/images/instagramColoured.png") },
  { label: "crypto", image: require("@/assets/images/instagramColoured.png") },
  {
    label: "football",
    image: require("@/assets/images/instagramColoured.png"),
  },
  { label: "stocks", image: require("@/assets/images/instagramColoured.png") },
  { label: "economy", image: require("@/assets/images/instagramColoured.png") },
  { label: "news", image: require("@/assets/images/instagramColoured.png") },
  {
    label: "basketball",
    image: require("@/assets/images/instagramColoured.png"),
  },
  { label: "youtube", image: require("@/assets/images/instagramColoured.png") },
  { label: "chess", image: require("@/assets/images/instagramColoured.png") },
];

const matchData = [
  {
    question: "Kolkata to win the match vs Mumbai",
    description: "H2H last 5 T20: Kolkata 4, Mumbai 1, Draw: 0",
    image: require("@/assets/images/ipl.png"),
  },
  {
    question: "Delhi to win the match vs Chennai",
    description: "H2H last 5 T20: Delhi 3, Chennai 2, Draw: 0",
    image: require("@/assets/images/ipl.png"),
  },
  {
    question: "Bangalore to win the match vs Hyderabad",
    description: "H2H last 5 T20: Bangalore 2, Hyderabad 3, Draw: 0",
    image: require("@/assets/images/ipl.png"),
  },
  {
    question: "Punjab to win the match vs Rajasthan",
    description: "H2H last 5 T20: Punjab 1, Rajasthan 4, Draw: 0",
    image: require("@/assets/images/ipl.png"),
  },
  {
    question: "Kolkata to win the match vs Delhi",
    description: "H2H last 5 T20: Kolkata 3, Delhi 2, Draw: 0",
    image: require("@/assets/images/ipl.png"),
  },
];

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  console.log("--- DeviceWidth---- ", DeviceWidth);
  const screenHeight = DeviceHeight - insets.top;
  return (
    <SafeAreaView
      style={{ height: DeviceHeight }}
      // style={{ backgroundColor: "#F7F7FF" }}
    >
      <Header />
      {/* banner section */}
      <ThemedView
        style={{
          width: DeviceWidth,
          paddingTop: 5,
          backgroundColor: "#F7F7FF",
        }}
      >
        <Image
          style={styles.headerImages}
          source={require("@/assets/images/Banner.jpeg")}
        />
      </ThemedView>
      <ThemedView
        style={{
          backgroundColor: "#F7F7FF",
          width: DeviceWidth,
          paddingHorizontal: 15,
        }}
      >
        <ScrollView
          horizontal={true}
          contentContainerStyle={{
            height: 70,
          }}
          style={{
            marginTop: 10,
            width: "100%",
            backgroundColor: "#F7F7FF",
          }}
          showsHorizontalScrollIndicator={false}
        >
          {data.map((item, index) => {
            return (
              <ThemedView
                key={index}
                style={{
                  height: 60,
                  borderRadius: 10,
                  shadowOpacity: 60,
                  paddingVertical: 5,
                  shadowColor: "black",
                  marginHorizontal: 5,
                  paddingHorizontal: 5,
                  alignItems: "center",
                  backgroundColor: "white",
                  shadowOffset: { width: 5, height: 5 },
                }}
              >
                <Image
                  source={item.image}
                  resizeMode="contain"
                  style={styles.categoryList}
                />
                <ThemedText style={{ color: "black", textAlign: "center" }}>
                  {item.label}
                </ThemedText>
              </ThemedView>
            );
          })}
        </ScrollView>
      </ThemedView>

      {/* categorySection */}
      <ThemedView style={styles.trending}>
        <ThemedText style={styles.trendingText}>Trending Now</ThemedText>
      </ThemedView>
      <CategorySection data={data} />
      <QuestionSection data={matchData} />
    </SafeAreaView>
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
    height: 30,
    width: 30,
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
  trending: {
    width: "auto",
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 15,
    backgroundColor: "#F7F7FF",
  },
  trendingText: {
    color: "black",
    fontSize: 20,
    fontWeight: 500,
  },
});

{
  /* <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    > */
}
{
  /* <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit{" "}
          <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText>{" "}
          to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({ ios: "cmd + d", android: "cmd + m" })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>
          Tap the Explore tab to learn more about what's included in this
          starter app.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          When you're ready, run{" "}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText>{" "}
          to get a fresh <ThemedText type="defaultSemiBold">app</ThemedText>{" "}
          directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView> */
}
{
  /* </ParallaxScrollView> */
}
