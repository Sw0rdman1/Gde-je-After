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
        <View style={styles.container}>
            <Image
                source={{ uri: venue.logo }}
                style={styles.logo}
            />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{venue.name}</Text>

                <View style={styles.separator} />
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
    container: {
    },
    logo: {
        width: '100%',
        height: 150,
    },
    textContainer: {
        paddingVertical: 12,
        gap: 12,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',
    },
    iconTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6,
    },
    text: {
        fontSize: 20,
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