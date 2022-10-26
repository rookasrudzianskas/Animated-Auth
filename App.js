import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions, TextInput } from "react-native";
import styles from "./styles";
import Svg, { Image } from "react-native-svg";
import Animated, {useSharedValue, useAnimatedStyle, interpolate, withTiming} from "react-native-reanimated";

export default function App() {
    const { height, width } = Dimensions.get("window");
    const imagePosition = useSharedValue(1);

    const imageAnimatedStyle = useAnimatedStyle(() => {
        const interpolation = interpolate(imagePosition.value, [0, 1], [-height / 2, 0]);
        return {
            transform: [{ translateY: withTiming(interpolation, { duration: 1000 }) }]
        }
    });


    return (
        <View style={styles.container}>
            <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
                <Svg height={height} width={width}>
                    <Image
                        href={require("./assets/login-background.jpg")}
                        width={width}
                        height={height}
                        preserveAspectRatio="xMidYMid slice"
                    />
                </Svg>
                <View style={styles.closeButtonContainer}>
                    <Text>X</Text>
                </View>
            </Animated.View>
            <View style={styles.bottomContainer}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>LOG IN</Text>
                 </View>
                <View style={styles.button}>
                <Text style={styles.buttonText}>REGISTER</Text>
            </View>
                {/*<View style={styles.formInputContainer}>*/}
                {/*    <TextInput*/}
                {/*        placeholder="Email"*/}
                {/*        placeholderTextColor="black"*/}
                {/*        style={styles.textInput}*/}
                {/*    />*/}
                {/*    <TextInput*/}
                {/*        placeholder="Name"*/}
                {/*        placeholderTextColor="black"*/}
                {/*        style={styles.textInput}*/}
                {/*    />*/}
                {/*    <TextInput*/}
                {/*        placeholder="Password"*/}
                {/*        placeholderTextColor="black"*/}
                {/*        style={styles.textInput}*/}
                {/*    />*/}
                {/*    <View style={styles.formButton}>*/}
                {/*        <Text style={styles.buttonText}>LOG IN</Text>*/}
                {/*    </View>*/}
                {/*</View>*/}
            </View>
        </View>
    );
}
