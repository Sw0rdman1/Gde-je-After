import Party from '@/models/Party'
import { StyleSheet, Text, View } from 'react-native'

interface PartyCardProps {
    party: Party
}

const PartyCard: React.FC<PartyCardProps> = ({ party }) => {
    return (
        <View style={styles.container}>
            <Text>
                {party.name}
            </Text>
        </View>
    )
}

export default PartyCard

const styles = StyleSheet.create({
    container: {
        padding: 6,
        marginHorizontal: 12,
        marginVertical: 6,
        backgroundColor: "#eee",
    },
})