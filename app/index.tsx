import { Text, View } from '@/components/Themed'
import { StyleSheet } from 'react-native'

const MainScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>MainScreen</Text>
        </View>
    )
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
})