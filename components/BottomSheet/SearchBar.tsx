import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { StyleSheet, Text, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useColors } from '@/hooks/useColors';

const SearchBar = () => {
    const { tint } = useColors()

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Let's find parties near you
            </Text>
            <View style={styles.inputContainer}>
                <FontAwesome5 name="search" size={22} color={tint} style={styles.icon} />
                <BottomSheetTextInput
                    style={styles.input}
                    placeholder="Search for parties"
                    placeholderTextColor="gray"
                    clearButtonMode="while-editing"
                    returnKeyType="search"
                    enablesReturnKeyAutomatically
                />
            </View>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        maxWidth: '100%',
        gap: 15,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 25,
        padding: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    icon: {
        marginLeft: 5,
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: 'black',
        fontSize: 18,
        fontWeight: '500',
        lineHeight: 22,
    },
})