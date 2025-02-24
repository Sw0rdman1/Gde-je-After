import { BottomSheetTextInput } from '@gorhom/bottom-sheet'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { useColors } from '@/hooks/useColors';
import { Text, View } from '../Themed';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useApp } from '@/context/AppProvider';

const SearchBar = () => {
    const { tint, placeholderText, backgroundDarker, background, text } = useColors()
    const { filtersSheetRef } = useApp()

    const openFiltersBottomSheet = () => {
        filtersSheetRef.current?.expand();
    }


    return (
        <View style={[styles.container, { backgroundColor: background }]}>
            <Text style={styles.title}>
                Let's find parties near you
            </Text>
            <View style={styles.actionContainer}>
                <View style={[styles.inputContainer, { backgroundColor: backgroundDarker, shadowColor: text }]}>
                    <FontAwesome5 name="search" size={22} color={tint} style={styles.icon} />
                    <BottomSheetTextInput
                        style={[styles.input, { color: text }]}
                        placeholder="Search for parties"
                        placeholderTextColor={placeholderText}
                        clearButtonMode="while-editing"
                        returnKeyType="search"
                        enablesReturnKeyAutomatically
                    />
                </View>
                <TouchableOpacity onPress={openFiltersBottomSheet} style={[styles.filterButton, { backgroundColor: tint }]}>
                    <Ionicons name="filter-sharp" size={24} color='white' />
                </TouchableOpacity>
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
    actionContainer: {
        flexDirection: 'row',
        gap: 10,
    },
    filterButton: {
        height: 40,
        width: 40,
        borderRadius: 25,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'whitesmoke',
        borderRadius: 25,
        padding: 10,
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