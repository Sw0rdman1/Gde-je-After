import { useMemo } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import SearchBar from './SearchBar';
import PartiesList from './PartiesList';
import { View } from '../Themed';
import { useParty } from '@/context/PartyProvider';
import PartyDetails from '../PartyDetails/PartyDetails';
import { useApp } from '@/context/AppProvider';
import { useColors } from '@/hooks/useColors';
import Handle from './Handle';

const SNAP_POINTS = ['20%', '30%', '60%', '80%'];
const SNAP_POINTS_SELECTED_PARTY = ['30%', '60%'];

const AllParties = () => (
    <View style={{ flex: 1 }}>
        <SearchBar />
        <PartiesList />
    </View>
)


const AppBottomSheet = () => {
    const { selectedParty } = useParty();
    const { bottomSheetRef } = useApp();
    const { background } = useColors();

    const snapPoints = useMemo(() => (
        selectedParty ? SNAP_POINTS_SELECTED_PARTY : SNAP_POINTS
    ), [selectedParty])

    const renderContent = () => (selectedParty ? <PartyDetails /> : <AllParties />)

    return (
        <BottomSheet
            ref={bottomSheetRef}
            enableDynamicSizing={false}
            snapPoints={snapPoints}
            index={1}
            keyboardBehavior="extend"
            backgroundStyle={{ backgroundColor: background }}
            handleComponent={({ animatedIndex, animatedPosition }) =>
                <Handle
                    isPartySelected={!!selectedParty}
                    animatedIndex={animatedIndex}
                    animatedPosition={animatedPosition}
                />
            }
        >
            {renderContent()}
        </BottomSheet >
    )
}

export default AppBottomSheet
