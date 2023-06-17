interface Option {
    name: string,
    id: string | number
}

interface FlightOffer {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate: string;
    seatAvailability: number;
    price: {
        amount: number;
        currency: string;
    };
    offerType: string;
    uuid: string;
    image: string;
}

interface RootState {
    flightOffers: FlightOffer[];
    origins: string[];
    destinations: string[];
    selectedOrigin: string;
    selectedDestination: string;
    previousOffersCount: number;
    isLoadedOffers: boolean;
    hasError: boolean;
}
interface FlightOffers {
    offers: FlightOffer[],
    origins: Option[],
    destinations: Option[],
}

export type {
    Option,
    FlightOffer,
    RootState,
    FlightOffers
}