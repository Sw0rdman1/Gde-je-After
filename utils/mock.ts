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
    phone: '011/123-4567',
    isLiked: true
}

export const mockVenueKST: Venue = {
    id: '2',
    name: 'Klub Studenata Tehnike',
    logo: 'https://www.studentskizivot.com/wp-content/uploads/2014/10/KST-LOGO.jpg',
    location: {
        latitude: 44.805509,
        longitude: 20.476108,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01
    },
    address: 'Bulevar Kralja Aleksandra 73',
    description: 'KST je jedno od najpoznatijih mesta za žurke u Beogradu. Nalazi se u centru grada, u Braće Jugovića 18. Ovaj klub je poznat po svojim žurkama, kao i po odličnoj atmosferi.',
    phone: '011/765-4321',
    isLiked: false
}

export const mockParties: Party[] = [
    {
        id: '1',
        date: '2021-09-01',
        description: 'Get Low zurka u Flag & Sparrow',
        name: 'Get Low Idemo Jako',
        endingTime: '3:00',
        startingTime: '22:00',
        image: 'https://www.beogradnocu.com/wp-content/uploads/2017/11/subota-Rush-2.png',
        venue: mockVenueFlagAndSparrow
    },
    {
        id: '2',
        date: '2021-09-01',
        description: 'Mokra Zurka u KST-u na kojoj će svirati najbolji bendovi',
        name: 'Mokra Zurka',
        endingTime: '4:00',
        startingTime: '21:00',
        image: 'https://www.kst.org.rs/wp-content/uploads/2021/08/mokra_4_avgust_KAVER.jpg',
        venue: mockVenueKST
    },
]
