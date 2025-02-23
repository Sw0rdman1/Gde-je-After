import React, { useMemo } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { BottomSheetHandleProps } from "@gorhom/bottom-sheet";
import Animated, {
    Extrapolation,
    interpolate,
    useAnimatedStyle,
    useDerivedValue,
} from "react-native-reanimated";
import { toRad } from "react-native-redash";
import { useColors } from "@/hooks/useColors";

// @ts-ignore
export const transformOrigin = ({ x, y }, ...transformations) => {
    "worklet";
    return [
        { translateX: x },
        { translateY: y },
        ...transformations,
        { translateX: x * -1 },
        { translateY: y * -1 },
    ];
};

interface HandleProps extends BottomSheetHandleProps {
    style?: StyleProp<ViewStyle>;
    isPartySelected: boolean;
}

const Handle: React.FC<HandleProps> = ({ style, animatedIndex, isPartySelected }) => {
    const { background, text } = useColors()
    const continerTopRadius = isPartySelected ? 0 : 20;
    const indicatorSnapPoints = isPartySelected ? [0, 1] : [0, 1, 2, 3];
    const indicatorLeftAngle = isPartySelected ? [toRad(-30), toRad(0),] : [toRad(-30), toRad(-30), 0, toRad(30)];
    const indicatorRightAngle = isPartySelected ? [toRad(30), toRad(0)] : [toRad(30), toRad(30), 0, toRad(-30)];


    //#region animations
    const indicatorTransformOriginY = useDerivedValue(() =>
        interpolate(animatedIndex.value, [0, 1, 2], [-1, 0, 1], Extrapolation.CLAMP)
    );
    //#endregion

    //#region styles
    const containerStyle = useMemo(() => [styles.header, style], [style]);
    const containerAnimatedStyle = useAnimatedStyle(() => {
        const borderTopRadius = interpolate(
            animatedIndex.value,
            [1, 2],
            [20, continerTopRadius],
            Extrapolation.CLAMP
        );
        return {
            borderTopLeftRadius: borderTopRadius,
            borderTopRightRadius: borderTopRadius,
        };
    });
    const leftIndicatorStyle = useMemo(
        () => ({
            ...styles.indicator,
            ...styles.leftIndicator,
        }),
        []
    );
    const leftIndicatorAnimatedStyle = useAnimatedStyle(() => {
        const leftIndicatorRotate = interpolate(
            animatedIndex.value,
            indicatorSnapPoints,
            indicatorLeftAngle,
            Extrapolation.CLAMP
        );
        return {
            transform: transformOrigin(
                { x: 0, y: indicatorTransformOriginY.value },
                {
                    rotate: `${leftIndicatorRotate}rad`,
                },
                {
                    translateX: -5,
                }
            ),
        };
    });
    const rightIndicatorStyle = useMemo(
        () => ({
            ...styles.indicator,
            ...styles.rightIndicator,
        }),
        []
    );
    const rightIndicatorAnimatedStyle = useAnimatedStyle(() => {
        const rightIndicatorRotate = interpolate(
            animatedIndex.value,
            indicatorSnapPoints,
            indicatorRightAngle,
            Extrapolation.CLAMP
        );
        return {
            transform: transformOrigin(
                { x: 0, y: indicatorTransformOriginY.value },
                {
                    rotate: `${rightIndicatorRotate}rad`,
                },
                {
                    translateX: 5,
                }
            ),
        };
    });
    //#endregion

    // render
    return (
        <Animated.View
            style={[containerStyle, containerAnimatedStyle, { backgroundColor: background }]}
            renderToHardwareTextureAndroid={true}
        >
            <Animated.View style={[leftIndicatorStyle, leftIndicatorAnimatedStyle, { backgroundColor: text }]} />
            <Animated.View
                style={[rightIndicatorStyle, rightIndicatorAnimatedStyle, { backgroundColor: text }]}
            />
        </Animated.View>
    );
};

export default Handle;

const styles = StyleSheet.create({
    header: {
        alignContent: "center",
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 14,
    },
    indicator: {
        position: "absolute",
        width: 10,
        height: 4,
    },
    leftIndicator: {
        borderTopStartRadius: 2,
        borderBottomStartRadius: 2,
    },
    rightIndicator: {
        borderTopEndRadius: 2,
        borderBottomEndRadius: 2,
    },
});