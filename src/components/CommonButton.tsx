import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  TextStyle,
  Platform,
} from "react-native";
import React, { FC } from "react";
import { Colors } from "@/constants/Colors";
import { scale, WINDOW } from "@/utils/Scale";
import { Fonts } from "@/constants/Fonts";

interface ButtonProps {
  title: string;
  onPress?: () => void;
  customStyle?: ViewStyle;
  customTextStyle?: TextStyle;
  renderText?: React.ReactNode;
}

// Reusable custom button
// Supports optional custom styles for both container and text via `customStyle` and `customTextStyle`


const CommonButton: FC<ButtonProps> = ({
  onPress,
  title,
  customStyle,
  customTextStyle,
  renderText,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, customStyle]}
    >
      {/*  If `renderText` is provided, it will be rendered instead of the default <Text> component with `title` */}
      {renderText || (
        <Text style={[styles.buttonText, customTextStyle]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    position: "absolute",
    backgroundColor: Colors.buttonBackground,
    paddingVertical: 15,
    bottom: (Platform.OS == "android" ? 20 : 0),
    marginHorizontal: 20,
    width: WINDOW.width - 40,
    alignSelf: "center",
    borderRadius: scale(24),
  },
  buttonText: {
    fontSize: scale(20),
    fontFamily: Fonts.medium,
    color: Colors.white,
    textAlign: "center",
  },
});

export default CommonButton;
