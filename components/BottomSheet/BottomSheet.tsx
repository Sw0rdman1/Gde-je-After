import { useMemo, } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';
import PartiesList from './PartiesList';
import { View } from '../Themed';
import { useParty } from '@/context/PartyProvider';
import PartyDetails from '../PartyDetails/PartyDetails';
import { useApp } from '@/context/AppProvider';

const SNAP_POINTS = ['20%', '30%', '50%', '80%'];

const AllParties = () => (
    <View style={{ flex: 1 }}>
        <SearchBar />
        <PartiesList />
    </View>
)


const AppBottomSheet = () => {
    const { bottomSheetRef } = useApp();
    const snapPoints = useMemo(() => SNAP_POINTS, []);
    const { selectedParty } = useParty();

    const renderContent = () => (selectedParty ? <PartyDetails /> : <AllParties />)

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enableDynamicSizing={false}
            snapPoints={snapPoints}
            index={1}
            keyboardBehavior="extend"
        >
            {renderContent()}
        </BottomSheet >
    )
}

export default AppBottomSheet
