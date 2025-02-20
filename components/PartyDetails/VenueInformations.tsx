import Venue from '@/models/Venue'
import { Image, StyleSheet, Text, View } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useColors } from '@/hooks/useColors';

interface VenueInformationsProps {
    venue: Venue
}

const VenueInformations: React.FC<VenueInformationsProps> = ({ venue }) => {
    const { tint } = useColors();

    return (
        <View>
            <View style={styles.logoAndNameContainer}>
                <Image
                    source={{ uri: venue.logo }}
                    style={styles.logo}
                />
                <Text style={styles.name}>{venue.name}</Text>
            </View>
            <View style={styles.phoneAndAdressContainer}>
                <View style={styles.iconTextContainer}>
                    <FontAwesome6 style={styles.iconAdress} name="location-dot" size={20} color={tint} />
                    <Text style={styles.text}>{venue.address}</Text>
                </View>
                <View style={styles.iconTextContainer}>
                    <FontAwesome6 style={styles.icon} name="phone" size={20} color={tint} />
                    <Text style={styles.text}>{venue.phone}</Text>
                </View>

            </View>
        </View>
    )
}

export default VenueInformations

const styles = StyleSheet.create({
    logoAndNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'white',
        padding: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    logo: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 12,
    },
    name: {
        flex: 2,
        fontSize: 32,
        fontWeight: 'bold',
    },

    phoneAndAdressContainer: {
        marginTop: 12,
        gap: 12,
        flexDirection: 'row',
        padding: 6,
    },
    iconTextContainer: {
        flex: 1,
        minHeight: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 6,
        alignItems: 'center',
        gap: 6,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        paddingLeft: 12,
    },
    text: {
        fontSize: 16,
        color: 'gray',
        fontWeight: 'bold',
    },
    icon: {
        width: 25,
    },
    iconAdress: {
        marginLeft: 2,
        width: 23,
    },
})