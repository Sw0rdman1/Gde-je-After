import Party from '@/models/Party'
import { Image, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useColors } from '@/hooks/useColors';
import { useParty } from '@/context/PartyProvider';
import { Text, View } from '../Themed';


interface PartyCardProps {
    party: Party
}

const PartyCard: React.FC<PartyCardProps> = ({ party }) => {
    const { tint, background, text } = useColors();
    const { openPartyDetails } = useParty();

    const openPartyDetailsHandler = () => {
        openPartyDetails(party)
    }

    return (
        <TouchableOpacity
            style={[styles.container, { backgroundColor: background, shadowColor: text }]}
            onPress={openPartyDetailsHandler}
            activeOpacity={0.8}
        >
            <Image
                source={{ uri: party.venue.logo }}
                style={styles.venueLogo}
            />
            <View style={styles.textContainer}>
                <Text style={styles.venueName} numberOfLines={2} ellipsizeMode='tail'>
                    {party.venue.name}
                </Text>
                <View style={styles.locationContainer}>
                    <FontAwesome6 name="location-dot" size={16} color={tint} />
                    <Text style={styles.venueAdress} numberOfLines={2} ellipsizeMode='tail'>
                        {party.venue.address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default PartyCard

const styles = StyleSheet.create({
    container: {
        paddingRight: 12,
        marginVertical: 8,
        borderRadius: 12,
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    venueLogo: {
        width: 150,
        height: 125,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    textContainer: {
        padding: 8,
        flex: 1,
        gap: 6,
    },
    venueName: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    venueAdress: {
        fontWeight: 'bold',
        color: 'gray',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

})