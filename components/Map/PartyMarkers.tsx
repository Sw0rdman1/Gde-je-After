import { Callout, Marker } from 'react-native-maps'
import { Image, StyleSheet, Text, View } from 'react-native';
import Party from '@/models/Party';
import { BlurView } from 'expo-blur';

interface Props {
    party: Party;
}

const CustomMarker1: React.FC<Props> = ({ party }) => {
    return (
        <View style={styles.markerContainer}>
            <Image
                source={{ uri: party.venue.logo || "" }}
                style={styles.markerImage}
            />
            <View style={styles.triangle} />
        </View>
    )
}

const CustomMarker: React.FC<Props> = ({ party }) => {
    return (
        <Marker
            coordinate={party.venue.location}
            anchor={{ x: 0.5, y: 1 }}
            pinColor='red'
        >
            <CustomCallout party={party} />
        </Marker>
    )
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


interface PartyMarkersProps {
    parties: Party[];
}

const PartyMarkers: React.FC<PartyMarkersProps> = ({ parties }) => {

    return (
        <>
            {parties.map(party => (
                <CustomMarker
                    key={party.id}
                    party={party}
                />
            ))}
        </>
    )
}

export default PartyMarkers

const styles = StyleSheet.create({
    //Marker styles
    markerContainer: {
        alignItems: "center",
    },
    markerImage: {
        width: 35,
        height: 35,
        borderRadius: 20,
    },
    triangle: {
        width: 0,
        height: 0,
        borderLeftWidth: 10,
        borderRightWidth: 10,
        borderTopWidth: 15,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "black",
        alignSelf: "center",
        marginTop: -3,
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
