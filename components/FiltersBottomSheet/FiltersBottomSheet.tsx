import BottomSheet, { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useApp } from '@/context/AppProvider';
import { useColors } from '@/hooks/useColors';
import FilterList from './FilterList';



const FiltersBottomSheet = () => {
    const { filtersSheetRef } = useApp();
    const { background } = useColors();

    return (
        <BottomSheet
            ref={filtersSheetRef}
            enableDynamicSizing={false}
            index={-1}
            enablePanDownToClose
            snapPoints={[500]}
            backgroundStyle={{ backgroundColor: background }}
        >
            <FilterList />
        </BottomSheet>
    )
}

export default FiltersBottomSheet
