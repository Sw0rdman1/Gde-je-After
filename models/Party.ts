import Venue from "./Venue";

interface Party {
    id: string;
    name: string;
    description: string;
    image: string;
    date: string;
    startingTime: string;
    endingTime: string;
    venue: Venue;
}

export default Party;