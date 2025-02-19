import { useParty } from '@/context/PartyProvider';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet'
import { useCallback, } from 'react';
import PartyCard from './PartyCard';
import Party from '@/models/Party';


const PartiesList = () => {
    const { parties } = useParty();

    const renderItem = useCallback(({ item }: { item: Party }) => (
        <PartyCard party={item} />
    ), []);


    return (
        <BottomSheetFlatList
            data={parties}
            keyExtractor={(party) => party.id}
            renderItem={renderItem}
            style={{ backgroundColor: 'whitesmoke', paddingVertical: 8 }}
        />
    )
}

export default PartiesList


