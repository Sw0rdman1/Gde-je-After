import { ActivityIndicator, StyleSheet } from 'react-native'
import { Marker } from 'react-native-maps'
import { View } from '../Themed'
import Party from '@/models/Party';

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
                />
            ))}
        </>
    )
}

export default PartyMarkers

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
})