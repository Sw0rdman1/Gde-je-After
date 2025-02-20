import Party from '@/models/Party';
import { mockParties } from '@/utils/mock';
import { ProviderProps } from '@/utils/types';
import { createContext, useState, useContext, useEffect } from 'react';
import { useApp } from './AppProvider';
import ActionsHeader from '@/components/PartyDetails/ActionsHeader';

interface PartyContextProps {
    parties: Party[];
    selectedParty: Party | null;
    openPartyDetails: (party: Party) => void;
    closePartyDetails: () => void;
}

const PartyContext = createContext<PartyContextProps | null>(null);


export const PartyProvider: React.FC<ProviderProps> = ({ children }) => {
    const [parties, setParties] = useState<Party[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedParty, setSelectedParty] = useState<Party | null>(null);
    const { bottomSheetRef, mapRef } = useApp()

    const fetchParties = () => {
        setTimeout(() => {
            setParties(mockParties)
            setLoading(false)
        }, 100)
    }

    useEffect(() => {
        fetchParties()
    }, [])

    const openPartyDetails = (party: Party) => {
        setSelectedParty(party)
        bottomSheetRef.current?.snapToIndex(2);
        mapRef.current?.animateToRegion(party.venue.location);
    }

    const closePartyDetails = () => {
        setSelectedParty(null)
    }

    return (
        <PartyContext.Provider value={{ parties, selectedParty, openPartyDetails, closePartyDetails }}>
            {selectedParty && <ActionsHeader selectedParty={selectedParty} closePartyDetails={closePartyDetails} />}
            {children}
        </PartyContext.Provider>
    );
};

export const useParty = () => {
    const context = useContext(PartyContext);
    if (context === null) {
        throw new Error('useParty must be used within a PartyProvider');
    }
    return context;
}