import { useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';
import PartiesList from './PartiesList';
import { View } from '../Themed';

const SNAP_POINTS = ['20%', '30%', '50%', '80%'];

const AppBottomSheet = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => SNAP_POINTS, []);


    return (
        <BottomSheet
            ref={bottomSheetRef}
            enableDynamicSizing={false}
            snapPoints={snapPoints}
            index={1}
            keyboardBehavior="extend"
        >
            <View style={styles.contentContainer}>
                <SearchBar />
                <PartiesList />
            </View>
        </BottomSheet>
    )
}

export default AppBottomSheet

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
    },
})