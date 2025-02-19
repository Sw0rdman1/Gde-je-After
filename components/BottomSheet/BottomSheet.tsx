import { useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';

const SNAP_POINTS = ['30%', '50%', '80%'];

const AppBottomSheet = () => {
    const bottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => SNAP_POINTS, []);


    return (
        <BottomSheet
            ref={bottomSheetRef}
            enableDynamicSizing={false}
            snapPoints={snapPoints}
            index={0}
            keyboardBehavior="extend"
        >
            <BottomSheetView style={styles.contentContainer}>
                <SearchBar />
            </BottomSheetView>
        </BottomSheet>
    )
}

export default AppBottomSheet

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        padding: 16,
    },
})