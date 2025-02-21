import { Image, StyleSheet } from 'react-native'
import DatePicker from '../DatePicker/DatePicker'
import Party from '@/models/Party'
import { Text, View } from '../Themed'
import { Ionicons } from '@expo/vector-icons'
import { useColors } from '@/hooks/useColors'

interface EventInformationsProps {
    party: Party
}

const EventInformations: React.FC<EventInformationsProps> = ({ party }) => {
    const { tint } = useColors();


    return (
        <View style={styles.container}>
            <DatePicker />
            <View style={styles.divider} />
            <View style={styles.partyContainer}>
                <Image
                    source={{ uri: party.image }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name} numberOfLines={2} ellipsizeMode="tail">
                        {party.name}
                    </Text>
                    <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
                        {party.description}
                    </Text>
                    <View style={styles.workingHourse}>
                        <Ionicons name="time" size={24} color={tint} />
                        <Text style={styles.time}>
                            {party.startingTime} - {party.endingTime}
                        </Text>
                    </View>
                </View>
            </View>


        </View>

    )
}

export default EventInformations

const styles = StyleSheet.create({
    container: {
        padding: 6,
        borderRadius: 12,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    divider: {
        height: 1,
        backgroundColor: 'lightgray',
    },
    partyContainer: {
        padding: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        flexDirection: 'row',
        gap: 20,
    },
    image: {
        flex: 1,
        aspectRatio: 1,
        borderRadius: 12,
    },

    textContainer: {
        flex: 2,
        gap: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: 'gray',
    },
    workingHourse: {
        flexDirection: 'row',
        gap: 6,
        alignItems: 'center',
    },
    time: {
        fontSize: 16,
        fontWeight: 'bold',
    },
})