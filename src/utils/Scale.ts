import { Dimensions } from "react-native";

export const WINDOW = Dimensions.get('window');

// Guidelines sizes are based on standard ~5" screen mobile device
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window')
export {SCREEN_HEIGHT,SCREEN_WIDTH}
// Define a base size for scaling calculations
const BASE_WIDTH = 393; // Reference width(e.g., iPhone 15)
const BASE_HEIGHT = 852; // Reference height

// Scale function based on screen width
const scale = (size: number) => (SCREEN_WIDTH / BASE_WIDTH) * size

// Scale function based on screen height
const verticalScale = (size: number) => (SCREEN_HEIGHT / BASE_HEIGHT) * size

// Moderate scale to adjust intensity of scaling
const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor

export { scale, verticalScale, moderateScale, }