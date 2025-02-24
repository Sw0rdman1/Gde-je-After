import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import { useColors } from '@/hooks/useColors';

const distances = [
    100, 200, 300, 400, 500, 600, 700, 800, 900, 1000,
    1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000
];

const DistanceSlider = () => {
    const [index, setIndex] = useState(0);
    const { tint } = useColors();

    return (
        <View style={styles.container}>
            <Slider
                style={styles.slider}
                minimumValue={0}
                maximumValue={distances.length - 1}
                step={1}
                value={index}
                onValueChange={(val) => setIndex(val)}
                minimumTrackTintColor="#1E90FF"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#1E90FF"

            />
            <Text style={[styles.label, { color: tint }]}>{distances[index] >= 1000 ? (distances[index] / 1000).toFixed(1) + ' km' : distances[index] + ' m'}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    slider: {
        width: 200,
        height: 40,
    },
});

export default DistanceSlider;
