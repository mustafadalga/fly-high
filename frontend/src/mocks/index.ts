import type { FlightOffers } from "@/types";

const origins = [ {
    "id": "CZR",
    "name": "Cizre"
} ];
const destinations = [ {
    "id": "CZR",
    "name": "Cizre"
} ];

const flightOffers: FlightOffers = {
    offers: [
        {
            "origin": "DXB",
            "destination": "FRA",
            "departureDate": "2023-06-22T15:24:50.498Z",
            "returnDate": "2023-06-28T04:00:01.257Z",
            "image": "https://source.unsplash.com/featured/landscape/?aviation",
            "seatAvailability": 16,
            "price": {
                "amount": 406,
                "currency": "EUR"
            },
            "offerType": "amadeusExactMatch",
            "uuid": "SA00001-6e59c236-6152-4cd9-9502-47132e73d314"
        },
    ],
    origins,
    destinations
}

export {
    flightOffers
}