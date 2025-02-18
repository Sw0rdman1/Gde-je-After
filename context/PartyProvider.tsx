import PartyLoader from '@/components/Map/PartyLoader';
import Party from '@/models/Party';
import { mockParties } from '@/utils/mock';
import { ProviderProps } from '@/utils/types';
import { createContext, useState, ReactNode, useContext, useEffect } from 'react';

interface PartyContextProps {
    parties: Party[];
    selectedParty: Party | null;
    setSelectedParty: (party: Party | null) => void;
}

const PartyContext = createContext<PartyContextProps | null>(null);


export const PartyProvider: React.FC<ProviderProps> = ({ children }) => {
    const [parties, setParties] = useState<Party[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedParty, setSelectedParty] = useState<Party | null>(null);

    const fetchParties = () => {
        // Fetch parties from API
        setTimeout(() => {
            setParties(mockParties)
            setLoading(false)
        }, 2000)
    }

    useEffect(() => {
        fetchParties()
    }, [])

    return (
        <PartyContext.Provider value={{ parties, selectedParty, setSelectedParty }}>
            {loading && <PartyLoader />}
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