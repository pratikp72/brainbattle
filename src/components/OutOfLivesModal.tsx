import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { FC } from "react";
import { Colors, GradientColor } from "@/constants/Colors";
import { scale } from "@/utils/Scale";
import { AlaramIcon, CrossIcon, HeartLogo } from "@/assets/svgs";
import { Fonts } from "@/constants/Fonts";
import { LinearGradient } from "expo-linear-gradient";
import HeartComponent from "./HeartComponent";
import CommonButton from "./CommonButton";
import GradientText from "./GradientText";

interface OutOfLivesModalProps {
  visible: boolean;
  onClose: () => void;
}

const OutOfLivesModal: FC<OutOfLivesModalProps> = ({ visible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      visible={visible}
      transparent
      onRequestClose={onClose}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "flex-end",
          backgroundColor: Colors.modalOverlay,
        }}
      >
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View style={styles.tabContainer}>
          <View style={styles.handleStyle} />
          <TouchableOpacity onPress={onClose} style={styles.closeContainer}>
            <CrossIcon width={16} height={16} />
          </TouchableOpacity>
          <View style={{ marginVertical: 20 }}>
            <GradientText style={styles.titleText} colors={['#FF5A90','#FF2D72']}>Out of Lives?</GradientText>

            <LinearGradient
              colors={GradientColor}
              locations={[0, 0.5, 1]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton} // or your desired dimensions
            >
              <HeartComponent size="large">0</HeartComponent>
            </LinearGradient>
            <Text style={styles.livesText}>
              You receive{" "}
              <Text style={{ fontFamily: Fonts.medium }}>3 new lives</Text>{" "}
              every <Text style={{ color: Colors.pinkFont }}>2 hours!</Text>
            </Text>

            <View style={styles.timeContainer}>
              <Text
                style={[
                  styles.livesText,
                  { fontFamily: Fonts.medium, paddingHorizontal: 10 },
                ]}
              >
                Time to full Next lives
              </Text>
              <View style={styles.alaramContainer}>
                <AlaramIcon />
                <Text
                  style={[
                    styles.livesText,
                    { fontFamily: Fonts.medium, fontSize: scale(13) },
                  ]}
                >
                  {" "}
                  24 : 24
                </Text>
              </View>
            </View>
          </View>
          <CommonButton
            customStyle={{
              position: "static",
              marginBottom: 10,
              backgroundColor: Colors.white,
            }}
            title="Purchase Lives"
            renderText={
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <HeartLogo />
                <Text style={styles.customTextButton}>
                  Gain a{" "}
                  <Text style={{ fontFamily: Fonts.semiBold }}>free</Text> life
                </Text>
              </View>
            }
          />
          <CommonButton
            customStyle={{ position: "static" }}
            onPress={onClose}
            title="Purchase Lives"
          />
        </View>
      </View>
      <SafeAreaView />
    </Modal>
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: Colors.modalBackground,

    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    width: "100%",
    paddingHorizontal: 20,
    paddingBottom: Platform.OS == "android" ? 20 : 0,
  },
  handleStyle: {
    backgroundColor: Colors.gray,
    width: scale(50),
    paddingVertical: 2.5,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
  },
  titleText: {
    fontSize: scale(28),
    color: Colors.pinkFont,
    fontFamily: Fonts.semiBold,
    textAlign: "center",
  },
  gradientButton: {
    borderWidth: 1,
    borderColor: Colors.white,
    borderRadius: scale(48),
    marginVertical: 20,
    paddingHorizontal: 50,
    paddingVertical: 40,
    alignItems: "center",
    alignSelf: "center",
    // width:170
  },
  livesText: {
    fontSize: scale(12),
    fontFamily: Fonts.regular,
    textAlign: "center",
  },
  timeContainer: {
    paddingVertical: 10,
    paddingHorizontal: 7,
    backgroundColor: Colors.white,
    marginVertical: 20,
    alignSelf: "center",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  customTextButton: {
    fontSize: scale(16),
    color: Colors.borderBlue,
    fontFamily: Fonts.medium,
  },
  closeContainer: {
    alignSelf: "flex-end",
    backgroundColor: Colors.white,
    padding: 8,
    marginVertical: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EEEFF2",
  },
  alaramContainer: {
    backgroundColor: Colors.background,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});
export default OutOfLivesModal;
