import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { HeartIcon } from "@/assets/svgs";
import { scale } from "@/utils/Scale";
import { Colors } from "@/constants/Colors";
import { Fonts } from "@/constants/Fonts";


interface HeartComponentProps {
  size?: "small" | "large";
  children: React.ReactNode;
}


// Custom heart Icon Component
const HeartComponent: FC<HeartComponentProps> = ({ children, size='small' }) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <Text
        style={[
          styles.fontStyle,
          {
            fontSize: size == "small" ? scale(12) : scale(30),
          },
        ]}
      >
        {children}
      </Text>
      <HeartIcon
        width={size == "small" ? 30 : 72}
        height={size == "small" ? 26 : 63}
      />
      
    </View>
  );
};
const styles = StyleSheet.create({
  fontStyle: {
    position: "absolute",
    zIndex: 100,
    alignSelf: "center",
    fontSize: scale(12),
    color: Colors.white,
    fontFamily: Fonts.medium,
  },
});

export default HeartComponent;
