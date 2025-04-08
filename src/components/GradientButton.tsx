import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { FC } from "react";
import { LinearGradient } from "expo-linear-gradient";
import HeartComponent from "./HeartComponent";
import { Colors, GradientColor } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";
import { scale } from "@/utils/Scale";
interface GradientButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
  lives: string;
}

// Gradient Button component used in Increase Life cap
const GradientButton: FC<GradientButtonProps> = ({
  title,
  onPress,
  disabled,
  lives,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        { width: "100%", flexDirection: "row" },
        disabled && { opacity: 0.2 },
      ]}
    >
      <LinearGradient
        colors={GradientColor}
        locations={[0, 0.5, 1]}
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 1 }}
        style={styles.buttonContainer}
      >
        <HeartComponent>{lives}</HeartComponent>
        <Text style={styles.fontStyle}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: Colors.primary,
    gap: 8,
    paddingVertical: 12,
    borderRadius: 20,
  },
  fontStyle: { fontFamily: Fonts.medium, fontSize: scale(16) },
});
export default GradientButton;
