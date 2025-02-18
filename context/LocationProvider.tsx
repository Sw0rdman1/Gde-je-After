import React, { createContext, useState, useEffect, useContext } from 'react';
import * as Location from 'expo-location';
import { ProviderProps } from '@/utils/types';
import { Region } from 'react-native-maps';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface LocationContextType {
    currentLocation: Region | undefined;
    errorMsg: string | null;
    loading: boolean;
}

const LocationContext = createContext<LocationContextType | null>(null);


export const LocationProvider: React.FC<ProviderProps> = ({ children }) => {
    const [currentLocation, setCurrentLocation] = useState<Region>();
    const [errorMsg, setErrorMsg] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function getCurrentLocation() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
            });

            setLoading(false);
        }
        getCurrentLocation();
    }, []);

    return (
        <LocationContext.Provider value={{ currentLocation, errorMsg, loading }}>
            {children}
        </LocationContext.Provider>
    );
};

export const useLocation = () => {
    const context = useContext(LocationContext);
    if (context === null) {
        throw new Error('useLocation must be used within a LocationProvider');
    }
    return context;
}