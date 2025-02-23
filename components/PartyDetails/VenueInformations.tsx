import Venue from '@/models/Venue'
import { Image, StyleSheet } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useColors } from '@/hooks/useColors';
import { Text, View } from '../Themed';

interface VenueInformationsProps {
    venue: Venue
}

const VenueInformations: React.FC<VenueInformationsProps> = ({ venue }) => {
    const { tint, text } = useColors();

    return (
        <View style={[styles.container, { shadowColor: text }]}>
            <View style={styles.logoAndNameContainer}>
                <Image
                    source={{ uri: venue.logo }}
                    style={styles.logo}
                />
                <Text style={styles.name}>{venue.name}</Text>
            </View>
            <View style={styles.phoneAndAdressContainer}>
                <View style={styles.iconTextContainer}>
                    <FontAwesome6 style={styles.icon} name="phone" size={20} color={tint} />
                    <Text style={styles.text}>{venue.phone}</Text>
                </View>
                <View style={styles.iconTextContainer}>
                    <FontAwesome6 style={styles.iconAdress} name="location-dot" size={20} color={tint} />
                    <Text style={styles.text}>{venue.address}</Text>
                </View>
            </View>
        </View>
    )
}

export default VenueInformations

const styles = StyleSheet.create({
    container: {
        padding: 12,
        gap: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,

    },
    logoAndNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
    logo: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 12,
    },
    name: {
        flex: 3,
        fontSize: 28,
        fontWeight: 'bold',
    },

    phoneAndAdressContainer: {
        gap: 12,
        padding: 6,
    },
    iconTextContainer: {
        flexDirection: 'row',
        padding: 3,
        alignItems: 'center',
        gap: 6,
    },
    text: {
        fontSize: 18,
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