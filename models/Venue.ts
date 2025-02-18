import { Region } from "react-native-maps";

interface Venue {
    id: string;
    name: string;
    description: string;
    logo: string;
    phone: string;

    location: Region;
    address: string;
}


export default Venue;