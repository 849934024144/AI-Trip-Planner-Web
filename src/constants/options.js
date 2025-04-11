// import { title } from "process"

export const SelectTravelesList=[
    {
        id:1,
        title:'Just me',
        desc:'A sole traveles in exploration',
        icon:'✈',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'👫',
        people:'2 People'
    },
    {
        id:3,
        title:'Me and my family',
        desc:'A group of fun loving adv',
        icon:'👪',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekes',
        icon:'👥',
        people:'6 to 10 People'
    },
];

export const SelectBudgetOption=[
    {
        id:1,
        title:'Cheap',
        desc:'Budget friendly',
        icon:'💸',
    },
    {
        id:2,
        title:'Mid-range',
        desc:'keep cost on the average side',
        icon:'🤑',
    },
    {
         id:3,
         title:'Luxury', 
         desc:'dont worry about the cost',
         icon:'💰',
    },
];

// export const AI_PROMPT='Generate travel Plain for locaion :{location},for {totalDays} Days 
// for {traveler} with a {budget}, give me Hotels options list with HotelName,Hotel address,price Hotel 
// image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, 
// ticket Pricing, Time travel each of the location for (totalDays) days with each day plan with best time to visit in JSON format."'

export const AI_PROMPT = `
  Generate a travel plan for the destination: {location} for {totalDays} days. 
  Traveler type: {traveler}, with a {budget} budget. 
  Provide a list of hotel options including the name,price, address, and the most recent image URL (ensure the URL is working), geo coordinates, rating, and descriptions. 
  Suggest a daily itinerary with day(use as arry),place names, details, image URLs, geo coordinates, ticket pricing, ratings, and travel time( time schedule) for each location for {totalDays} days, including the best time to visit. 
  Output in JSON format.
`;
