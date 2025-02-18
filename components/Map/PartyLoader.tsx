import { ActivityIndicator, StyleSheet } from 'react-native'
import { View } from '../Themed'

const PartyLoader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#fff" />
        </View>
    )
}

export default PartyLoader

const styles = StyleSheet.create({
    container: {
        zIndex: 1,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        justifyContent: 'center',
        alignItems: 'center',
    },
})