import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { FC } from "react";
import { Colors } from "@/constants/Colors";
import { scale } from "@/utils/Scale";
import { CrossIcon } from "@/assets/svgs";
import { Fonts } from "@/constants/Fonts";
import GradientButton from "./GradientButton";
interface IncreaseLifeCapModalProps {
  visible: boolean;
  onClose: () => void;
}
const IncreaseLifeCapModal: FC<IncreaseLifeCapModalProps> = ({
  visible,
  onClose,
}) => {
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
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <CrossIcon width={16} height={16} />
          </TouchableOpacity>

          <View style={styles.mainContainer}>
            <Text style={styles.titleText}>Increase Life Cap!</Text>
            <Text style={styles.contentText}>
              Buying lower packs decreases prices when upgrading.
            </Text>
            <View style={styles.hrLine} />
            <View style={{ gap: 10 }}>
              <GradientButton title="Life Cap - $0.99 " lives={"+2"} />
              <GradientButton
                disabled={true}
                title="Life Cap - $2.99 "
                lives={"+2"}
              />
              <GradientButton
                disabled={true}
                title="Life Cap - $3.99 "
                lives={"+2"}
              />
            </View>
          </View>
          <SafeAreaView />
        </View>
      </View>
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
    fontFamily: Fonts.medium,
    //   textAlign: "center",
  },
  contentText: {
    fontSize: scale(15),
    fontFamily: Fonts.medium,
    color: Colors.lightText,
    textAlign: "center",
  },
  hrLine: {
    backgroundColor: Colors.hrLine,
    paddingVertical: 1,
    width: "100%",
    marginVertical: 10,
  },
  mainContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingTop: 32,
    paddingHorizontal: 24,
    paddingBottom: 24,
    borderRadius: 24,
    alignItems: "center",
    marginTop: 20,
    gap: 10,
    backgroundColor: Colors.white,
  },
  closeButton: {
    alignSelf: "flex-end",
    backgroundColor: Colors.white,
    padding: 8,
    marginVertical: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#EEEFF2",
  },
});
export default IncreaseLifeCapModal;
