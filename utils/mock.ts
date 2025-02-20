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
    address: 'Kraljice Marije 1',
    description: 'Flag & Sparrow je jedan od najpoznatijih barova u Beogradu. Nalazi se u samom centru grada, u Kraljice Marije 1. Ovaj bar je poznat po svojoj odličnoj ponudi pića i hrane, kao i po odličnoj atmosferi.',
    phone: '011/123-4567'
}

export const mockVenueKST: Venue = {
    id: '2',
    name: 'KST',
    logo: 'https://www.studentskizivot.com/wp-content/uploads/2014/10/KST-LOGO.jpg',
    location: {
        latitude: 44.805509,
        longitude: 20.476108,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    },
    address: 'Bulevar Kralja Aleksandra 73',
    description: 'KST je jedno od najpoznatijih mesta za žurke u Beogradu. Nalazi se u centru grada, u Braće Jugovića 18. Ovaj klub je poznat po svojim žurkama, kao i po odličnoj atmosferi.',
    phone: '011/765-4321'
}

export const mockParties: Party[] = [
    {
        id: '1',
        date: '2021-09-01',
        description: 'Ovo je opis prve žurke',
        name: 'Žurka 1',
        venue: mockVenueFlagAndSparrow
    },
    {
        id: '2',
        date: '2021-09-02',
        description: 'Ovo je opis druge žurke',
        name: 'Žurka 2',
        venue: mockVenueKST
    }
]
