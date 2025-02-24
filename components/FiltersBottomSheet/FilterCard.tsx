import * as React from 'react';
import { Text, View, StyleSheet, Switch, Pressable, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Animated, { FadeInDown, FadeInUp, FadeOut, LinearTransition } from 'react-native-reanimated';
import DistanceSlider from '../DistanceSlider/DistanceSlider';
import { useColors } from '@/hooks/useColors';

const _spacing = 10;
const _color = '#ececec';
const _borderRadius = 16;
const _damping = 14;
const _entering = FadeInDown.springify().damping(_damping);
const _exiting = FadeOut.springify().damping(_damping);
const _layout = LinearTransition.springify().damping(_damping);;


const DayBlock = () => {
    return (
        <Animated.View
            layout={_layout}
            entering={_entering}
            exiting={_exiting}
        >

            <Animated.View
                layout={_layout}
                style={{
                    padding: _spacing,
                    borderRadius: _borderRadius,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginTop: _spacing,
                    flexDirection: 'row',
                }}
            >
                <DistanceSlider />
            </Animated.View>
        </Animated.View>
    );
}

const FilterCard = () => {
    const [isOn, setIsOn] = React.useState(false);
    const { tint } = useColors()

    return (
        <Animated.View
            layout={_layout}
            style={[styles.container, { backgroundColor: isOn ? `${tint}10` : _color }]}
        >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Text style={[styles.label, { color: isOn ? tint : 'black' }]}>
                    Distance
                </Text>

                <Switch value={isOn}
                    onValueChange={setIsOn}
                    trackColor={{ true: tint }}
                    style={{
                        transformOrigin: 'center',
                        transform: [{
                            scale: 0.7
                        }],

                    }}
                />
            </View>
            {isOn && <DayBlock />}
        </Animated.View>
    );
}


export default FilterCard;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        borderRadius: _borderRadius,
        padding: _spacing,
        borderWidth: 1,
        borderColor: _color,
    },
    label: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    day: {
        // backgroundColor: _color,
        flexDirection: 'column',
        borderRadius: _borderRadius,
        padding: _spacing,
        borderWidth: 1,
        borderColor: _color,
    },
});