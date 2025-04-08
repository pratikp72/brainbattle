import { ArrowLeft, ArrowRight } from "@/assets/svgs";
import LivesComponent from "@/components/purchase/LivesComponent";
import { Colors, GradientColor } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { scale } from "@/utils/Scale";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import HeartComponent from "@/components/HeartComponent";
import CommonButton from "@/components/CommonButton";
import OutOfLivesModal from "@/components/OutOfLivesModal";
import { useState } from "react";
import IncreaseLifeCapModal from "@/components/IncreaseLifeCapModal";

export default function PurchaseScreen() {
  const [showOutOflivesModal, setShowOutOflivesModal] = useState(true);
  const [showIncreaseLifeCapModal, setShowIncreaseLifeCapModal] =
    useState(false);
  return (
    <SafeAreaView style={styles.container} edges={["bottom", "top"]}>
      {/* Show Out of Lives Bottomsheet */}
      {showOutOflivesModal && (
        <OutOfLivesModal
          visible={showOutOflivesModal}
          onClose={() => setShowOutOflivesModal(false)}
        />
      )}
      {/* Show Increase  Lives Bottomsheet */}
      {showIncreaseLifeCapModal && (
        <IncreaseLifeCapModal
          visible={showIncreaseLifeCapModal}
          onClose={() => setShowIncreaseLifeCapModal(false)}
        />
      )}

      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <TouchableOpacity style={styles.leftActionContainer}>
            <ArrowLeft />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Store</Text>
        </View>

        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={styles.headerTitle}>Lives</Text>
          <View style={{ flexDirection: "row", gap: 10, paddingVertical: 10 }}>
            <LivesComponent lives={"1"} amount={"0.50"} />
            <LivesComponent lives={"3"} amount={"1.25"} />
            <LivesComponent lives={"6"} amount={"4.50"} isSelected={true} />
          </View>

          <LinearGradient
            colors={GradientColor}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0, 0.5, 1]}
            style={styles.gradientButton}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 13 }}
            >
              <View style={styles.heartBack}>
                <HeartComponent>
                  <Text style={{ fontSize: scale(20) }}>∞</Text>
                </HeartComponent>
              </View>

              <Text style={styles.unlimitedText}>Unlimited Lives</Text>
            </View>
            <ArrowRight />
          </LinearGradient>

          <View style={styles.lightContainer}>
            <View style={{ flexDirection: "row", gap: 12 }}>
              <View style={styles.heartBack}>
                <HeartComponent>+2</HeartComponent>
              </View>
              <View style={{ flex: 1, gap: 5 }}>
                <Text style={styles.unlimitedText}>Increase Lives Cap</Text>
                <Text style={styles.contentText}>
                  Permanently increase your max lives with this purchase.
                </Text>
              </View>
            </View>

            <TouchableOpacity onPress={() => setShowIncreaseLifeCapModal(true)}>
              <LinearGradient
                colors={["#FF548C", "#FF2D72"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }} // 90 degrees = horizontal
                style={{
                  alignItems: "center",
                  paddingVertical: 16,
                  borderRadius: 20,
                }}
              >
                <Text style={[styles.unlimitedText, { color: Colors.white }]}>
                  Unlock
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
        <CommonButton title="Confirm Purchase" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: "center",
    gap: 20,
  },
  leftActionContainer: {
    backgroundColor: Colors.white,
    padding: scale(12),
    borderRadius: scale(23),
  },
  headerTitle: {
    fontFamily: Fonts.medium,
    fontSize: scale(20),
  },
  unlimitedText: {
    fontSize: scale(16),
    fontFamily: Fonts.medium,
    color: Colors.fontBlack,
  },
  gradientButton: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: scale(24),
    marginVertical: 10,
    padding: scale(16),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heartBack: {
    backgroundColor: Colors.greyBackground,
    // padding: 10,
    borderRadius: 30,
    width: scale(48),
    height: scale(48),
    justifyContent: "center",
    alignItems: "center",
  },
  lightContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingTop: 32,
    marginVertical: 10,
    backgroundColor: Colors.white,
    borderRadius: scale(24),
    paddingHorizontal: 16,
    paddingBottom: 24,
    gap: 20,
  },
  contentText: {
    fontSize: scale(13),
    color: Colors.lightText,
    fontFamily: Fonts.regular,
  },
});
