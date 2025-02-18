import Venue from "./Venue";

interface Party {
    id: string;
    name: string;
    venue: Venue;
    date: string;
    description: string;
}

export default Party;