const stateData = [
  {
    "state": "Andhra Pradesh",
    "capital": "Amaravati",
    "image": "https://plus.unsplash.com/premium_photo-1661904165347-369200d4bf72?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "about": {
      "city": "Largest City: Visakhapatnam",
      "population": "Population: ~54 million",
      "knownFor": "Known For: Coastal beauty, Tirupati temple",
      "language": "Language: Telugu",
      "para": "Andhra Pradesh is known for its long coastline, rich culture, and the famous Tirupati temple, one of the most visited religious sites in the world."
    }
  },
  {
    "state": "Arunachal Pradesh",
    "capital": "Itanagar",
    "image": "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D",
    "about": {
      "city": "Largest City: Itanagar",
      "population": "Population: ~1.5 million",
      "knownFor": "Known For: Mountains, monasteries, natural beauty",
      "language": "Language: English",
      "para": "Arunachal Pradesh is a northeastern state known for its scenic mountains, tribal culture, and Buddhist monasteries."
    }
  },
  {
    "state": "Assam",
    "capital": "Dispur",
    "image": "https://imgcld.yatra.com/ytimages/image/upload/v1517482087/AdvNation/ANN_DES71/ann_top_Assam_c49hzx.jpg",
    "about": {
      "city": "Largest City: Guwahati",
      "population": "Population: ~36 million",
      "knownFor": "Known For: Tea gardens, Kaziranga National Park",
      "language": "Language: Assamese",
      "para": "Assam is famous for its tea plantations and wildlife, especially the one-horned rhinoceros found in Kaziranga National Park."
    }
  },
  {
    "state": "Bihar",
    "capital": "Patna",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEWmOv9IsIN1hdynMiGBRs8TxGDkH7_9FBTQ&s",
    "about": {
      "city": "Largest City: Patna",
      "population": "Population: ~128 million",
      "knownFor": "Known For: Ancient universities, history",
      "language": "Language: Hindi",
      "para": "Bihar has a rich historical background and was home to ancient learning centers like Nalanda and Vikramshila."
    }
  },
  {
    "state": "Chhattisgarh",
    "capital": "Raipur",
    "image": "https://www.mytourplans.com/storage/ck/130623095020-bdcef1773669a857b9e27d6c210da09c.jpg",
    "about": {
      "city": "Largest City: Raipur",
      "population": "Population: ~30 million",
      "knownFor": "Known For: Forests, tribal culture",
      "language": "Language: Hindi",
      "para": "Chhattisgarh is rich in natural resources and forests, with a strong tribal culture and heritage."
    }
  },
  {
    "state": "Goa",
    "capital": "Panaji",
    "image": "https://assets.cntraveller.in/photos/60ba012c8b178b16cbde8d2a/16:9/w_1024%2Cc_limit/Goa-second-edit-123rf-1366x768.jpg",
    "about": {
      "city": "Largest City: Vasco da Gama",
      "population": "Population: ~1.6 million",
      "knownFor": "Known For: Beaches, tourism, nightlife",
      "language": "Language: Konkani",
      "para": "Goa is India's smallest state and is famous for its beaches, Portuguese heritage, and vibrant nightlife."
    }
  },
  {
    "state": "Gujarat",
    "capital": "Gandhinagar",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtH08I8-CENfr3T14rAo9VcbkVKraWiUidzg&s",
    "about": {
      "city": "Largest City: Ahmedabad",
      "population": "Population: ~70 million",
      "knownFor": "Known For: Business hub, Rann of Kutch",
      "language": "Language: Gujarati",
      "para": "Gujarat is known for its entrepreneurship, cultural heritage, and unique landscapes like the white desert of Kutch."
    }
  },
  {
    "state": "Haryana",
    "capital": "Chandigarh",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rucNj4-jEuwioLQy6JYxNbMpiL0LzdlPKw&s",
    "about": {
      "city": "Largest City: Faridabad",
      "population": "Population: ~29 million",
      "knownFor": "Known For: Agriculture, sports",
      "language": "Language: Hindi",
      "para": "Haryana plays a major role in India's agriculture and has produced many international-level athletes."
    }
  },
  {
    "state": "Himachal Pradesh",
    "capital": "Shimla",
    "image": "https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/06105321/Feature-11-1600x900.jpg",
    "about": {
      "city": "Largest City: Shimla",
      "population": "Population: ~7 million",
      "knownFor": "Known For: Hill stations, tourism",
      "language": "Language: Hindi",
      "para": "Himachal Pradesh is known for its scenic hill stations, snow-capped mountains, and tourism."
    }
  },
  {
    "state": "Jharkhand",
    "capital": "Ranchi",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNfJdPteRH98DlwxaRzqrOR_1lZfHVD4bRYw&s",
    "about": {
      "city": "Largest City: Jamshedpur",
      "population": "Population: ~40 million",
      "knownFor": "Known For: Minerals, forests",
      "language": "Language: Hindi",
      "para": "Jharkhand is rich in minerals and natural resources and has a strong tribal presence."
    }
  },
  {
    "state": "Karnataka",
    "capital": "Bengaluru",
    "image": "https://content.skyscnr.com/m/6f0d202012198702/original/GettyImages-506104167.jpg?resize=1224%3Aauto",
    "about": {
      "city": "Largest City: Bengaluru",
      "population": "Population: ~70 million",
      "knownFor": "Known For: IT hub, Hampi ruins",
      "language": "Language: Kannada",
      "para": "Karnataka is India's tech hub with Bengaluru and has historical sites like Hampi."
    }
  },
  {
    "state": "Kerala",
    "capital": "Thiruvananthapuram",
    "image": "https://www.cholantours.com/blog/wp-content/uploads/2025/11/Best-Places-To-Visit-In-Kerala-For-World-Travellers.webp",
    "about": {
      "city": "Largest City: Kochi",
      "population": "Population: ~35 million",
      "knownFor": "Known For: Backwaters, literacy",
      "language": "Language: Malayalam",
      "para": "Kerala is known for its greenery, backwaters, and high literacy rate."
    }
  },
  {
    "state": "Madhya Pradesh",
    "capital": "Bhopal",
    "image": "https://www.i4utravels.com/wp-content/uploads/2021/03/gwalior.jpeg",
    "about": {
      "city": "Largest City: Indore",
      "population": "Population: ~85 million",
      "knownFor": "Known For: Heart of India, wildlife",
      "language": "Language: Hindi",
      "para": "Madhya Pradesh is located in central India and is rich in wildlife and heritage sites."
    }
  },
  {
    "state": "Maharashtra",
    "capital": "Mumbai",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-pratapgarh-fort-mahabaleshwar-maharashtra-2-city-hero?qlt=82&ts=1726668937680",
    "about": {
      "city": "Largest City: Mumbai",
      "population": "Population: ~125 million",
      "knownFor": "Known For: Finance, Bollywood",
      "language": "Language: Marathi",
      "para": "Maharashtra is India's economic powerhouse and home to Bollywood."
    }
  },
  {
    "state": "Manipur",
    "capital": "Imphal",
    "image": "https://travelfromindia.com/assets/uploads/news-115.jpg",
    "about": {
      "city": "Largest City: Imphal",
      "population": "Population: ~3 million",
      "knownFor": "Known For: Culture, dance",
      "language": "Language: Meitei",
      "para": "Manipur is known for its classical dance forms and scenic beauty."
    }
  },
  {
    "state": "Meghalaya",
    "capital": "Shillong",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGfVFrSIa5S0mlIxwVwVVOQUrF3pX55G2U2Q&s",
    "about": {
      "city": "Largest City: Shillong",
      "population": "Population: ~3.5 million",
      "knownFor": "Known For: Rainfall, living root bridges",
      "language": "Language: English",
      "para": "Meghalaya is famous for its heavy rainfall and unique living root bridges."
    }
  },
  {
    "state": "Mizoram",
    "capital": "Aizawl",
    "image": "https://static.toiimg.com/photo/msid-84244923,width-96,height-65.cms",
    "about": {
      "city": "Largest City: Aizawl",
      "population": "Population: ~1.2 million",
      "knownFor": "Known For: Hills, bamboo culture",
      "language": "Language: Mizo",
      "para": "Mizoram is known for its scenic hills and bamboo-based culture."
    }
  },
  {
    "state": "Nagaland",
    "capital": "Kohima",
    "image": "https://tripandtales.com/wp-content/uploads/2025/06/Hills-of-Nagaland.jpg",
    "about": {
      "city": "Largest City: Dimapur",
      "population": "Population: ~2.2 million",
      "knownFor": "Known For: Tribes, festivals",
      "language": "Language: English",
      "para": "Nagaland is known for its tribal traditions and vibrant festivals like Hornbill."
    }
  },
  {
    "state": "Odisha",
    "capital": "Bhubaneswar",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-lingaraj-temple-bhubaneshwar-odisha-city-hero?qlt=82&ts=1742167192930",
    "about": {
      "city": "Largest City: Bhubaneswar",
      "population": "Population: ~46 million",
      "knownFor": "Known For: Jagannath temple, culture",
      "language": "Language: Odia",
      "para": "Odisha is known for its temples, especially Jagannath Puri, and classical dance forms."
    }
  },
  {
    "state": "Punjab",
    "capital": "Chandigarh",
    "image": "https://cdn.britannica.com/53/176353-050-5B854179/Harmandir-Sahib-Amritsar-Punjab-India.jpg",
    "about": {
      "city": "Largest City: Ludhiana",
      "population": "Population: ~30 million",
      "knownFor": "Known For: Agriculture, Sikh culture",
      "language": "Language: Punjabi",
      "para": "Punjab is known for its fertile land, agriculture, and vibrant culture."
    }
  },
  {
    "state": "Rajasthan",
    "capital": "Jaipur",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-mehrangarh-fort-jodhpur-rajasthan-city-hero?qlt=82&ts=1726660925514",
    "about": {
      "city": "Largest City: Jaipur",
      "population": "Population: ~82 million",
      "knownFor": "Known For: Desert, forts",
      "language": "Language: Hindi",
      "para": "Rajasthan is known for its royal heritage, deserts, and forts."
    }
  },
  {
    "state": "Sikkim",
    "capital": "Gangtok",
    "image": "https://nomadicweekends.com/blog/wp-content/uploads/2019/03/Lachung-City-In-between-the-Mountain-Ranges.jpg",
    "about": {
      "city": "Largest City: Gangtok",
      "population": "Population: ~0.7 million",
      "knownFor": "Known For: Mountains, monasteries",
      "language": "Language: English",
      "para": "Sikkim is a small Himalayan state known for its biodiversity and monasteries."
    }
  },
  {
    "state": "Tamil Nadu",
    "capital": "Chennai",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-rameswaram-temple-rameswaram-tamilnadu-hero-1?qlt=82&ts=1727162277643",
    "about": {
      "city": "Largest City: Chennai",
      "population": "Population: ~78 million",
      "knownFor": "Known For: Temples, culture",
      "language": "Language: Tamil",
      "para": "Tamil Nadu is famous for its temples and classical traditions."
    }
  },
  {
    "state": "Telangana",
    "capital": "Hyderabad",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/2-charminar_hyderabad_telangana-1-city-hero?qlt=82&ts=1742190636845",
    "about": {
      "city": "Largest City: Hyderabad",
      "population": "Population: ~40 million",
      "knownFor": "Known For: IT, Charminar",
      "language": "Language: Telugu",
      "para": "Telangana is a modern state with Hyderabad as a major IT hub."
    }
  },
  {
    "state": "Tripura",
    "capital": "Agartala",
    "image": "https://www.tripuratime24.com/wp-content/uploads/2025/12/Agartala-city-skyline-showing-government-buildings-in-the-capital-of-Tripura-1.jpg",
    "about": {
      "city": "Largest City: Agartala",
      "population": "Population: ~4 million",
      "knownFor": "Known For: Culture, palaces",
      "language": "Language: Bengali",
      "para": "Tripura is known for its cultural diversity and royal palaces."
    }
  },
  {
    "state": "Uttar Pradesh",
    "capital": "Lucknow",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3X3ZYRyFlaHNhI0i9AhziqwWxDvR7OfsdZA&s",
    "about": {
      "city": "Largest City: Kanpur",
      "population": "Population: ~240 million",
      "knownFor": "Known For: Taj Mahal, heritage",
      "language": "Language: Hindi",
      "para": "Uttar Pradesh is rich in culture and history with iconic landmarks."
    }
  },
  {
    "state": "Uttarakhand",
    "capital": "Dehradun",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNMJLj0-3zKEEpbnO04YWDdOWMCpXc7MrBlA&s",
    "about": {
      "city": "Largest City: Dehradun",
      "population": "Population: ~11 million",
      "knownFor": "Known For: Himalayas, pilgrimage",
      "language": "Language: Hindi",
      "para": "Uttarakhand is known for its spiritual sites and Himalayan beauty."
    }
  },
  {
    "state": "West Bengal",
    "capital": "Kolkata",
    "image": "https://s7ap1.scene7.com/is/image/incredibleindia/1-howrah-bridge-kolkata-west-bengal-city-hero?qlt=82&ts=1742154912631",
    "about": {
      "city": "Largest City: Kolkata",
      "population": "Population: ~100 million",
      "knownFor": "Known For: Culture, festivals",
      "language": "Language: Bengali",
      "para": "West Bengal is known for its art, culture, and festivals like Durga Puja."
    }
  }
]

export default stateData;