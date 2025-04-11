import React, { useState } from "react";

const DestinationSearch = ({ value, onChange }) => {
  const destinations = [
    "Paris",
    "London",
    "New York",
    "Tokyo",
    "Sydney",
    "Mumbai",
    "Rome",
    "Dubai",
    "Singapore",
    "Cape Town",
    "Istanbul",
    "Bangkok",
    "Los Angeles",
    "Amsterdam",
    "Barcelona",
    "Ausa,Latur,Maharashtra,india",
    "Mumbai,India",
    "Kolkata,India",
    "Latur,Maharashtra,india",
    "Goa,india",
        "Pune,Maharashtra,india",
        "Kolhapur,Maharashtra,india",
        "Mumbai,Maharashtra,india",
        "Delhi,Delhi,india",
        "Bangalore,Karnataka,india",
        "Hyderabad,Telangana,india",
        "Ahmedabad,Gujarat,india",
        "Chennai,Tamil Nadu,india",
        "Kolkata,West Bengal,india",
        "Surat,Gujarat,india",
        "Jaipur,Rajasthan,india",
        "Lucknow,Uttar Pradesh,india",
        "Kanpur,Uttar Pradesh,india",
        "Nagpur,Maharashtra,india",
        "Indore,Madhya Pradesh,india",
        "Thane,Maharashtra,india", 
        "Bhopal,Madhya Pradesh,india", 
        "Visakhapatnam,Andhra Pradesh,india", 
        "Pimpri-Chinchwad,Maharashtra,india", 
        "Patna,Bihar,india", 
        "Vadodara,Gujarat,india", 
        "Ghaziabad,Uttar Pradesh,india", 
        "Ludhiana,Punjab,india", 
        "Agra,Uttar Pradesh,india", 
        "Nashik,Maharashtra,india", 
        "Faridabad,Haryana,india", 
        "Meerut,Uttar Pradesh,india", 
        "Rajkot,Gujarat,india", 
        "Kalyan-Dombivali,Maharashtra,india", 
        "Vasai-Virar,Maharashtra,india", 
        "Varanasi,Uttar Pradesh,india", 
        "Srinagar,Jammu and Kashmir,india", 
        "Aurangabad,Maharashtra,india", 
        "Dhanbad,Jharkhand,india", 
        "Amritsar,Punjab,india", 
        "Navi Mumbai,Maharashtra,india", 
        "Prayagraj,Uttar Pradesh,india", 
        "Ranchi,Jharkhand,india", 
        "Howrah,West Bengal,india", 
        "Coimbatore,Tamil Nadu,india", 
        "Jabalpur,Madhya Pradesh,india", 
        "Gwalior,Madhya Pradesh,india", 
        "Vijayawada,Andhra Pradesh,india", 
        "Jodhpur,Rajasthan,india", 
        "Madurai,Tamil Nadu,india", 
        "Raipur,Chhattisgarh,india", 
        "Kota,Rajasthan,india", 
        "Guwahati,Assam,india", 
        "Chandigarh,Chandigarh,india", 
        "Solapur,Maharashtra,india", 
        "Hubli-Dharwad,Karnataka,india", 
        "Bareilly,Uttar Pradesh,india", 
        "Moradabad,Uttar Pradesh,india", 
        "Mysore,Karnataka,india", 
        "Gurgaon,Haryana,india", 
        "Aligarh,Uttar Pradesh,india", 
        "Jalandhar,Punjab,india", 
        "Tiruchirappalli,Tamil Nadu,india", 
        "Bhubaneswar,Odisha,india", 
        "Salem,Tamil Nadu,india", 
        // Tier 2 & 3 cities
        "Bikaner,Rajasthan,india", 
        "Jamshedpur,Jharkhand,india", 
        "Dehradun,Uttarakhand,india", 
        "Indore,Madhya Pradesh,india", 
        "Nagpur,Maharashtra,india", 
        "Coimbatore,Tamil Nadu,india", 
        "Kochi,Kerala,india", 
        "Vijayawada,Andhra Pradesh,india", 
        "Kanpur,Uttar Pradesh,india", 
        "Lucknow,Uttar Pradesh,india", 
        "Surat,Gujarat,india", 
        "Vadodara,Gujarat,india", 
        "Raipur,Chhattisgarh,india", 
        "Bhubaneswar,Odisha,india", 
        "Visakhapatnam,Andhra Pradesh,india", 
        "Warangal,Telangana,india", 
        "Gwalior,Madhya Pradesh,india", 
        "Jodhpur,Rajasthan,india", 
        "Agartala,Tripura,india", 
        "Imphal,Manipur,india", 
        "Shillong,Meghalaya,india", 
        "Guwahati,Assam,india", 
        "Silchar,Assam,india", 
        "Dimapur,Nagaland,india", 
        "Itanagar,Arunachal Pradesh,india", 
        "Kohima,Nagaland,india", 
        "Aizawl,Mizoram,india", 
        "Gangtok,Sikkim,india",
  ];

  const [query, setQuery] = useState(value);
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim()) {
      const filtered = destinations.filter((destination) =>
        destination.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          handleInputChange(e);
          onChange(e.target.value);
        }}
        placeholder="Search destinations..."
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      />
      {suggestions.length > 0 && (
        <ul
          style={{
            listStyleType: "none",
            padding: "0",
            margin: "0",
            border: "1px solid #ccc",
            borderRadius: "5px",
          }}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              style={{
                padding: "10px",
                borderBottom:
                  index !== suggestions.length - 1 ? "1px solid #ccc" : "none",
                cursor: "pointer",
              }}
              onClick={() => {
                setQuery(suggestion);
                setSuggestions([]);
                onChange(suggestion);
              }}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DestinationSearch;