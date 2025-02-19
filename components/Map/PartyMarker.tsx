import { Callout, Marker } from 'react-native-maps'
import { Image, StyleSheet, Text, View } from 'react-native';
import Party from '@/models/Party';
import { BlurView } from 'expo-blur';
import Svg, { Path, Defs, ClipPath, Circle } from "react-native-svg";

const SVG_MARKER_COLOR = "#27667B"
const SVG_MARKER_WIDTH = 50
const SVG_MARKER_HEIGHT = 60
const MARKER_IMAGE_SIZE = 35

const TOP_OFFSET = (SVG_MARKER_HEIGHT - MARKER_IMAGE_SIZE) / 5
const LEFT_OFFSET = (SVG_MARKER_WIDTH - MARKER_IMAGE_SIZE) / 2



const SvgMarker = ({ image }: { image: string }) => {
    return (
        <View style={styles.container}>
            <Svg width={SVG_MARKER_WIDTH} height={SVG_MARKER_HEIGHT} viewBox="0 0 100 140">
                <Path
                    d="M50 0C22.4 0 0 22.4 0 50c0 22.1 17.5 48.6 35.8 78.3 7.2 11.9 21.1 11.9 28.4 0C82.5 98.6 100 72.1 100 50 100 22.4 77.6 0 50 0z"
                    fill={SVG_MARKER_COLOR}
                />
                <Defs>
                    <ClipPath id="clipCircle">
                        <Circle cx="25" cy="20" r="20" />
                    </ClipPath>
                </Defs>
            </Svg>

            <Image
                source={{ uri: image }}
                style={styles.image}
            />
        </View>
    )
}

interface Props {
    party: Party;
    index?: number;
}

const CustomCallout: React.FC<Props> = ({ party }) => {
    return (
        <Callout tooltip >
            <BlurView style={styles.calloutContainer} intensity={80} >
                <Image
                    source={{ uri: party.venue.logo }}
                    style={styles.calloutLogo}
                />
                <View style={styles.calloutTextContainer}>
                    <Text
                        style={styles.calloutVenueName}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {party.venue.name}
                    </Text>
                    <Text
                        style={styles.calloutPartyName}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {party.name}
                    </Text>
                </View>
            </BlurView>
        </Callout>
    )
}



const PartyMarker: React.FC<Props> = ({ party, index }) => {
    return (
        <Marker
            coordinate={party.venue.location}
            anchor={{ x: 0.5, y: 1 }}
            zIndex={index}
        >
            <SvgMarker image={party.venue.logo} />
            <CustomCallout party={party} />
        </Marker>
    )
}

export default PartyMarker


const styles = StyleSheet.create({
    //Marker styles
    container: {
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    image: {
        position: "absolute",
        top: TOP_OFFSET,
        left: LEFT_OFFSET,
        width: MARKER_IMAGE_SIZE,
        aspectRatio: 1,
        borderWidth: 2,
        borderColor: "white",
        borderRadius: '50%',
    },

    //Callout styles
    calloutContainer: {
        width: 250,
        padding: 5,
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        borderRadius: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        overflow: "hidden",
    },
    calloutLogo: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    calloutTextContainer: {
        flex: 1,
        gap: 5,
    },
    calloutVenueName: {
        fontSize: 16,
        fontWeight: "bold",
    },
    calloutPartyName: {
        fontSize: 14,
    },

})
