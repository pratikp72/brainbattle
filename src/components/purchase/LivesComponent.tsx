import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import { Colors } from "@/constants/Colors";
import { Checkbox, HeartIcon } from "@/assets/svgs";
import HeartComponent from "../HeartComponent";
import { scale } from "@/utils/Scale";
import { Fonts } from "@/constants/Fonts";
interface LivesComponentProps {
  lives: string;
  amount: string;
  isSelected?: boolean;
}
const LivesComponent: FC<LivesComponentProps> = ({
  lives,
  amount,
  isSelected = false,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.heartContainer}>
        <HeartComponent>{lives}</HeartComponent>
      </View>
      <Text style={styles.amountText}>${amount}</Text>
      {isSelected && <Checkbox style={styles.checkBox} />}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    flex: 1,
    borderColor: Colors.borderBlue,
    borderRadius: scale(24),
    padding: scale(16),
    justifyContent: "center",
    alignItems: "center",
  },
  amountText: {
    fontSize: scale(14),
    fontFamily: Fonts.medium,
    marginTop: 8,
  },
  heartContainer: {
    backgroundColor: Colors.greyBackground,
    padding: 10,
    borderRadius: 30,
    width: scale(48),
    height: scale(48),
    justifyContent: "center",
    alignItems: "center",
  },
  checkBox: {
    position: "absolute",
    bottom: -scale(10),
    alignSelf: "center",
    height: scale(20),
    width: scale(20),
  },
});
export default LivesComponent;
