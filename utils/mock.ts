import Party from "@/models/Party";
import Venue from "@/models/Venue";

export const mockVenueFlagAndSparrow: Venue = {
    id: '1',
    name: 'Flag & Sparrow Underground',
    logo: 'https://flagandsparrow.rs/assets/img/flag-and-sparrow-share.jpg',
    location: {
        latitude: 44.809633,
        longitude: 20.475354,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    },
    address: 'Kraljice Marije 1, Beograd',
    description: 'Flag & Sparrow je jedan od najpoznatijih barova u Beogradu. Nalazi se u samom centru grada, u Kraljice Marije 1. Ovaj bar je poznat po svojoj odličnoj ponudi pića i hrane, kao i po odličnoj atmosferi.',
    phone: '011/123-4567'
}

export const mockParties: Party[] = [
    {
        id: '1',
        date: '2021-09-01',
        description: 'Ovo je opis prve žurke',
        name: 'Žurka 1',
        venue: mockVenueFlagAndSparrow
    }
]
