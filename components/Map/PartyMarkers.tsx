import { Callout, Marker } from 'react-native-maps'
import { Image, StyleSheet, Text, View } from 'react-native';
import Party from '@/models/Party';
import { BlurView } from 'expo-blur';

interface CustomCalloutProps {
    party: Party;
}

const CustomCallout: React.FC<CustomCalloutProps> = ({ party }) => {
    return (
        <Callout tooltip>
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
                <Marker
                    key={party.id}
                    coordinate={party.venue.location}
                    title={party.name}
                    description={party.description}
                >
                    <CustomCallout party={party} />
                </Marker>
            ))}
        </>
    )
}

export default PartyMarkers

const styles = StyleSheet.create({
    //Callout styles
    calloutContainer: {
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
        maxWidth: 200,
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
