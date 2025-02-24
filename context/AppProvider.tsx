import React, { createContext, useContext, useRef } from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import MapView from 'react-native-maps';

type AppContextType = {
    mapRef: React.RefObject<MapView>;
    bottomSheetRef: React.RefObject<BottomSheet>;
    filtersSheetRef: React.RefObject<BottomSheet>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const mapRef = useRef<MapView>(null);
    const bottomSheetRef = useRef<BottomSheet>(null);
    const filtersSheetRef = useRef<BottomSheet>(null);

    return (
        <AppContext.Provider value={{ mapRef, bottomSheetRef, filtersSheetRef }}>
            {children}
        </AppContext.Provider>
    );
};

export const useApp = (): AppContextType => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useApp must be used within an AppProvider');
    }
    return context;
};
