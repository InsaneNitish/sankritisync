// Array of documents to be created
const documents = [
    {
        id: 1,
        name: "Taj Mahal",
        state: "Uttar Pradesh",
        city: "Agra",
        latitude: 27.1751,
        longitude: 78.0421,
        description: "The Taj Mahal, an ivory-white marble mausoleum, is one of the most recognizable structures in the world.",
        history: "The Taj Mahal was commissioned in 1632 by the Mughal emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
        importance: "The Taj Mahal is globally recognized as a masterpiece of Mughal architecture and is a UNESCO World Heritage Site.",
        photos: ["https://example.com/tajmahal1.jpg", "https://example.com/tajmahal2.jpg"]
    },
    {
        id: 2,
        name: "Qutub Minar",
        state: "Delhi",
        city: "Delhi",
        latitude: 28.5244,
        longitude: 77.1855,
        description: "Qutub Minar, a soaring, 73-meter-high tower, is an important landmark of medieval Islamic architecture in India.",
        history: "The Qutub Minar is the tallest brick minaret in the world and was built in 1193 by Qutb-ud-din Aibak.",
        importance: "Qutub Minar is an important historical site and is recognized as a UNESCO World Heritage Site.",
        photos: ["https://example.com/qutubminar1.jpg", "https://example.com/qutubminar2.jpg"]
    },
    {
        id: 3,
        name: "Red Fort",
        state: "Delhi",
        city: "Delhi",
        latitude: 28.6550,
        longitude: 77.2485,
        description: "The Red Fort is a historic fortification in the city of Delhi and an iconic symbol of India's rich history.",
        history: "The Red Fort was the main residence of the emperors of the Mughal Dynasty for around 200 years, until 1856.",
        importance: "It is a UNESCO World Heritage Site and a symbol of India's struggle for independence.",
        photos: ["https://example.com/redfort1.jpg", "https://example.com/redfort2.jpg"]
    },
    {
        id: 4,
        name: "Hampi",
        state: "Karnataka",
        city: "Hampi",
        latitude: 15.3358,
        longitude: 76.4610,
        description: "Hampi is a village with ruins of the Vijayanagara Empire, known for its stunning temples and historical structures.",
        history: "Hampi was the capital of the Vijayanagara Empire in the 14th century and was known for its prosperous trade and stunning architecture.",
        importance: "It is a UNESCO World Heritage Site renowned for its historic ruins and architectural marvels.",
        photos: ["https://example.com/hampi1.jpg", "https://example.com/hampi2.jpg"]
    },
    {
        id: 5,
        name: "Mysore Palace",
        state: "Karnataka",
        city: "Mysore",
        latitude: 12.3051,
        longitude: 76.6552,
        description: "The Mysore Palace is an ornate royal residence known for its grandeur and historical significance.",
        history: "The palace was the residence of the Wadiyar dynasty and has been a symbol of Mysore’s royal heritage.",
        importance: "It is an architectural marvel and a major tourist attraction in Karnataka.",
        photos: ["https://example.com/mysorepalace1.jpg", "https://example.com/mysorepalace2.jpg"]
    },
    {
        id: 6,
        name: "Elephanta Caves",
        state: "Maharashtra",
        city: "Mumbai",
        latitude: 18.9990,
        longitude: 72.9397,
        description: "The Elephanta Caves are a network of sculpted caves located on Elephanta Island, famous for its rock-cut sculptures.",
        history: "These caves date back to between the 5th and 8th centuries and are dedicated to the Hindu god Shiva.",
        importance: "It is a UNESCO World Heritage Site and a prominent example of ancient Indian rock-cut architecture.",
        photos: ["https://example.com/elephantacaves1.jpg", "https://example.com/elephantacaves2.jpg"]
    },
    {
        id: 7,
        name: "Ajanta Caves",
        state: "Maharashtra",
        city: "Ajanta",
        latitude: 20.5492,
        longitude: 75.7000,
        description: "The Ajanta Caves are a group of rock-cut Buddhist cave monuments, famous for their ancient murals and sculptures.",
        history: "These caves date back to the 2nd century BCE to 480 CE and include paintings and sculptures of Buddhist origin.",
        importance: "They are a UNESCO World Heritage Site, known for their exceptional art and historical value.",
        photos: ["https://example.com/ajanta1.jpg", "https://example.com/ajanta2.jpg"]
    },
    {
        id: 8,
        name: "Ellora Caves",
        state: "Maharashtra",
        city: "Ellora",
        latitude: 20.0217,
        longitude: 75.2789,
        description: "The Ellora Caves are a complex of 34 monasteries and temples carved into the rock, showcasing Hindu, Buddhist, and Jain traditions.",
        history: "Dating from the 5th to 10th century, these caves represent a mix of religious traditions with elaborate carvings.",
        importance: "They are a UNESCO World Heritage Site, admired for their architectural and sculptural excellence.",
        photos: ["https://example.com/ellora1.jpg", "https://example.com/ellora2.jpg"]
    },
    {
        id: 9,
        name: "Khajuraho Temples",
        state: "Madhya Pradesh",
        city: "Khajuraho",
        latitude: 24.8474,
        longitude: 79.9198,
        description: "The Khajuraho Temples are renowned for their intricate sculptures and erotic carvings, representing Hindu and Jain traditions.",
        history: "Built between 950 and 1050 CE by the Chandela dynasty, these temples are famous for their architectural beauty.",
        importance: "They are a UNESCO World Heritage Site and a significant example of Indian temple architecture.",
        photos: ["https://example.com/khajuraho1.jpg", "https://example.com/khajuraho2.jpg"]
    },
    {
        id: 10,
        name: "Konark Sun Temple",
        state: "Odisha",
        city: "Konark",
        latitude: 19.8884,
        longitude: 85.0824,
        description: "The Konark Sun Temple is a 13th-century temple dedicated to the Sun God, known for its elaborate stone carvings.",
        history: "Built by King Narasimhadeva I in 1250 CE, this temple is an architectural marvel in the shape of a gigantic chariot.",
        importance: "It is a UNESCO World Heritage Site, famous for its artistic and architectural brilliance.",
        photos: ["https://example.com/konark1.jpg", "https://example.com/konark2.jpg"]
    },
    {
        id: 11,
        name: "Rani Ki Vav",
        state: "Gujarat",
        city: "Patan",
        latitude: 23.8482,
        longitude: 72.1204,
        description: "Rani Ki Vav is an intricately constructed stepwell featuring stunning carvings and architectural detail.",
        history: "Built in the 11th century by Queen Udayamati, it was used to provide water and also served as a social gathering space.",
        importance: "It is a UNESCO World Heritage Site known for its artistic and engineering excellence.",
        photos: ["https://example.com/ranikivav1.jpg", "https://example.com/ranikivav2.jpg"]
    },
    {
        id: 12,
        name: "Humayun's Tomb",
        state: "Delhi",
        city: "Delhi",
        latitude: 28.5933,
        longitude: 77.2507,
        description: "Humayun's Tomb is the tomb of the Mughal Emperor Humayun and an example of Mughal architecture.",
        history: "Built in 1570, it is the first garden-tomb on the Indian subcontinent and a precursor to the Taj Mahal.",
        importance: "It is a UNESCO World Heritage Site, known for its stunning architecture and historical significance.",
        photos: ["https://example.com/humayunstomb1.jpg", "https://example.com/humayunstomb2.jpg"]
    },
    {
        id: 13,
        name: "Jantar Mantar (Jaipur)",
        state: "Rajasthan",
        city: "Jaipur",
        latitude: 26.9246,
        longitude: 75.8267,
        description: "The Jantar Mantar in Jaipur is an astronomical observatory with impressive instruments used for measuring celestial bodies.",
        history: "Constructed in the 18th century by Maharaja Jai Singh II, it showcases advanced astronomical tools of its time.",
        importance: "It is a UNESCO World Heritage Site recognized for its scientific and architectural achievements.",
        photos: ["https://example.com/jantarmantar1.jpg", "https://example.com/jantarmantar2.jpg"]
    },
    {
        id: 14,
        name: "Jantar Mantar (Delhi)",
        state: "Delhi",
        city: "Delhi",
        latitude: 28.6152,
        longitude: 77.2219,
        description: "The Jantar Mantar in Delhi is an astronomical observatory constructed in the early 18th century.",
        history: "Built by Maharaja Jai Singh II, it includes a collection of large astronomical instruments.",
        importance: "It is a UNESCO World Heritage Site, known for its historical significance and architectural ingenuity.",
        photos: ["https://example.com/jantarmantar-delhi1.jpg", "https://example.com/jantarmantar-delhi2.jpg"]
    },
    {
        id: 15,
        name: "Chand Baori",
        state: "Rajasthan",
        city: "Abhaneri",
        latitude: 27.0940,
        longitude: 77.5400,
        description: "Chand Baori is a stepwell famous for its symmetrical structure and intricate carvings.",
        history: "Built in the 9th century by King Chand, it was used for water storage and as a cool retreat.",
        importance: "It is a notable example of ancient Indian water management and architecture.",
        photos: ["https://example.com/chandbaori1.jpg", "https://example.com/chandbaori2.jpg"]
    },
    {
        id: 16,
        name: "Rathambore Fort",
        state: "Rajasthan",
        city: "Ranthambore",
        latitude: 26.0097,
        longitude: 76.4713,
        description: "Rathambore Fort is a historic fort located in Ranthambore National Park, surrounded by dense forest.",
        history: "Built in the 10th century, it served as a strategic military fort and hunting lodge.",
        importance: "It is an important historical site within a national park known for its wildlife.",
        photos: ["https://example.com/rathamborefort1.jpg", "https://example.com/rathamborefort2.jpg"]
    },
    {
        id: 17,
        name: "Amber Fort",
        state: "Rajasthan",
        city: "Jaipur",
        latitude: 26.0994,
        longitude: 75.5489,
        description: "Amber Fort, a majestic fort located on a hill, is known for its stunning architecture and panoramic views.",
        history: "Constructed in the 16th century by Raja Man Singh I, it served as a royal residence.",
        importance: "It is a prominent tourist attraction in Jaipur, admired for its grandeur and history.",
        photos: ["https://example.com/amberfort1.jpg", "https://example.com/amberfort2.jpg"]
    },
    {
        id: 18,
        name: "Madhav National Park",
        state: "Madhya Pradesh",
        city: "Shivpuri",
        latitude: 25.4189,
        longitude: 77.3394,
        description: "Madhav National Park is a protected area known for its diverse flora and fauna.",
        history: "Established as a national park in 1958, it was previously a royal hunting ground.",
        importance: "It is a significant wildlife sanctuary, home to various species including tigers and leopards.",
        photos: ["https://example.com/madhavnationalpark1.jpg", "https://example.com/madhavnationalpark2.jpg"]
    },
    {
        id: 19,
        name: "Sanchi Stupa",
        state: "Madhya Pradesh",
        city: "Sanchi",
        latitude: 23.4886,
        longitude: 77.7440,
        description: "The Sanchi Stupa is a Buddhist monument that houses relics of the Buddha.",
        history: "Built during the 3rd century BCE under Emperor Ashoka, it is one of the oldest stone structures in India.",
        importance: "It is a UNESCO World Heritage Site and an important pilgrimage site for Buddhists.",
        photos: ["https://example.com/sanchistupa1.jpg", "https://example.com/sanchistupa2.jpg"]
    },
    {
        id: 20,
        name: "Mahabalipuram",
        state: "Tamil Nadu",
        city: "Mahabalipuram",
        latitude: 12.6200,
        longitude: 80.2000,
        description: "Mahabalipuram, also known as Mamallapuram, is famous for its rock-cut temples and monuments.",
        history: "Built between the 7th and 9th centuries by the Pallava dynasty, it showcases early Dravidian architecture.",
        importance: "It is a UNESCO World Heritage Site, renowned for its architectural and historical significance.",
        photos: ["https://example.com/mahabalipuram1.jpg", "https://example.com/mahabalipuram2.jpg"]
    },
    {
        id: 21,
        name: "Fort Agra",
        state: "Uttar Pradesh",
        city: "Agra",
        latitude: 27.1767,
        longitude: 78.0081,
        description: "Agra Fort is a massive fortification in Agra and a prominent example of Mughal military architecture.",
        history: "Constructed during the reign of Emperor Akbar in the 16th century, it served as a royal residence.",
        importance: "It is a UNESCO World Heritage Site and an important landmark in Indian history.",
        photos: ["https://example.com/agrafort1.jpg", "https://example.com/agrafort2.jpg"]
    },
    {
        id: 22,
        name: "Chola Temples",
        state: "Tamil Nadu",
        city: "Various",
        latitude: 10.7574,
        longitude: 79.1369,
        description: "The Chola Temples are a group of temples built during the Chola dynasty, showcasing exceptional Dravidian architecture.",
        history: "Constructed between the 11th and 12th centuries, these temples include the Brihadeeswarar Temple and others.",
        importance: "They are a UNESCO World Heritage Site known for their architectural grandeur and historical value.",
        photos: ["https://example.com/cholateples1.jpg", "https://example.com/cholateples2.jpg"]
    },
    {
        id: 23,
        name: "Brihadeeswarar Temple",
        state: "Tamil Nadu",
        city: "Thanjavur",
        latitude: 10.7877,
        longitude: 79.1324,
        description: "The Brihadeeswarar Temple is a grand Hindu temple dedicated to Shiva and an example of Chola architecture.",
        history: "Built in the 11th century by Rajaraja Chola I, it is renowned for its massive central dome and intricate carvings.",
        importance: "It is a UNESCO World Heritage Site and a masterpiece of Dravidian architecture.",
        photos: ["https://example.com/brihadeeswarartemple1.jpg", "https://example.com/brihadeeswarartemple2.jpg"]
    },
    {
        id: 24,
        name: "Hampi",
        state: "Karnataka",
        city: "Hampi",
        latitude: 15.3358,
        longitude: 76.4610,
        description: "Hampi is a village with ruins of the Vijayanagara Empire, known for its stunning temples and historical structures.",
        history: "Hampi was the capital of the Vijayanagara Empire in the 14th century and was known for its prosperous trade and stunning architecture.",
        importance: "It is a UNESCO World Heritage Site renowned for its historic ruins and architectural marvels.",
        photos: ["https://example.com/hampi1.jpg", "https://example.com/hampi2.jpg"]
    },
    {
        id: 25,
        name: "Kumbhalgarh Fort",
        state: "Rajasthan",
        city: "Kumbhalgarh",
        latitude: 25.1118,
        longitude: 73.4804,
        description: "Kumbhalgarh Fort is a massive fort with impressive walls that extend over 36 kilometers.",
        history: "Built in the 15th century by Maharana Kumbha, it served as a stronghold for the Mewar kingdom.",
        importance: "It is a UNESCO World Heritage Site known for its architectural and historical significance.",
        photos: ["https://example.com/kumbhalgarh1.jpg", "https://example.com/kumbhalgarh2.jpg"]
    },
    {
        id: 26,
        name: "Jaisalmer Fort",
        state: "Rajasthan",
        city: "Jaisalmer",
        latitude: 26.9124,
        longitude: 70.9174,
        description: "Jaisalmer Fort, also known as Sonar Quila, is a stunning yellow sandstone fort in the heart of the Thar Desert.",
        history: "Built in the 12th century by Rawal Jaisal, it served as a strategic military fort and a center of trade.",
        importance: "It is a UNESCO World Heritage Site and an important example of desert architecture.",
        photos: ["https://example.com/jaisalmerfort1.jpg", "https://example.com/jaisalmerfort2.jpg"]
    },
    {
        id: 27,
        name: "Rashtrapati Bhavan",
        state: "Delhi",
        city: "Delhi",
        latitude: 28.6139,
        longitude: 77.2090,
        description: "The Rashtrapati Bhavan is the official residence of the President of India and an iconic example of British colonial architecture.",
        history: "Completed in 1929, it was designed by Sir Edwin Lutyens and Herbert Baker as the Viceroy's residence.",
        importance: "It is an important symbol of India's political history and architecture.",
        photos: ["https://example.com/rashtrapati1.jpg", "https://example.com/rashtrapati2.jpg"]
    },
    {
        id: 28,
        name: "Victoria Memorial",
        state: "West Bengal",
        city: "Kolkata",
        latitude: 22.5440,
        longitude: 88.3362,
        description: "The Victoria Memorial is a grand monument dedicated to Queen Victoria, showcasing colonial-era architecture.",
        history: "Constructed between 1906 and 1921, it was designed by Sir William Emerson and is a tribute to the British Empire.",
        importance: "It is a prominent historical and cultural landmark in Kolkata.",
        photos: ["https://example.com/victoriamemorial1.jpg", "https://example.com/victoriamemorial2.jpg"]
    },
    {
        id: 29,
        name: "Church of St. Cajetan",
        state: "Goa",
        city: "Old Goa",
        latitude: 15.4991,
        longitude: 73.8278,
        description: "The Church of St. Cajetan is a beautiful baroque church located in Old Goa, known for its stunning architecture.",
        history: "Built in the 17th century by the Portuguese, it is dedicated to St. Cajetan of Thiene.",
        importance: "It is an important example of colonial architecture and a UNESCO World Heritage Site.",
        photos: ["https://example.com/stcajetan1.jpg", "https://example.com/stcajetan2.jpg"]
    },
    {
        id: 30,
        name: "St. Francis Xavier's Basilica",
        state: "Goa",
        city: "Old Goa",
        latitude: 15.4987,
        longitude: 73.8282,
        description: "The Basilica of St. Francis Xavier is a prominent church in Old Goa, known for its historic significance and architecture.",
        history: "Built in the 16th century, it houses the remains of St. Francis Xavier, a prominent Jesuit missionary.",
        importance: "It is a UNESCO World Heritage Site and a significant pilgrimage site.",
        photos: ["https://example.com/stfrancisxavier1.jpg", "https://example.com/stfrancisxavier2.jpg"]
    },
    {
        id: 31,
        name: "Rani Padmini's Palace",
        state: "Rajasthan",
        city: "Chittorgarh",
        latitude: 24.8876,
        longitude: 74.6260,
        description: "Rani Padmini's Palace is a historic palace associated with the legendary queen of Chittorgarh.",
        history: "The palace is linked to the famous queen Rani Padmini and the historical battles of Chittorgarh.",
        importance: "It is a key historical site in Rajasthan, known for its cultural and architectural significance.",
        photos: ["https://example.com/ranipadminipalace1.jpg", "https://example.com/ranipadminipalace2.jpg"]
    },
    {
        id: 32,
        name: "Jama Masjid",
        state: "Delhi",
        city: "Delhi",
        latitude: 28.6507,
        longitude: 77.2336,
        description: "The Jama Masjid is one of the largest mosques in India, known for its grandeur and architectural beauty.",
        history: "Built between 1644 and 1656 by Mughal Emperor Shah Jahan, it is an iconic symbol of Mughal architecture.",
        importance: "It is a major religious site and a prominent landmark in Delhi.",
        photos: ["https://example.com/jamamasjid1.jpg", "https://example.com/jamamasjid2.jpg"]
    },
    {
        id: 33,
        name: "Shivaji Maharaj Terminus",
        state: "Maharashtra",
        city: "Mumbai",
        latitude: 18.9407,
        longitude: 72.8347,
        description: "Shivaji Maharaj Terminus, formerly Victoria Terminus, is a historic railway station known for its Gothic architecture.",
        history: "Opened in 1887 to commemorate Queen Victoria's Golden Jubilee, it is a key example of Victorian Gothic Revival architecture.",
        importance: "It is a UNESCO World Heritage Site and an important landmark in Mumbai.",
        photos: ["https://example.com/shivajimaharajterminus1.jpg", "https://example.com/shivajimaharajterminus2.jpg"]
    },
    {
        id: 34,
        name: "Rudreshwara (Ramappa) Temple",
        state: "Telangana",
        city: "Palampet",
        latitude: 17.4240,
        longitude: 79.3156,
        description: "The Ramappa Temple is a 13th-century Hindu temple known for its intricate carvings and architecture.",
        history: "Constructed during the Kakatiya dynasty, it is celebrated for its unique architecture and craftsmanship.",
        importance: "It is a UNESCO World Heritage Site, recognized for its historical and artistic value.",
        photos: ["https://example.com/ramappa1.jpg", "https://example.com/ramappa2.jpg"]
    },
    {
        id: 35,
        name: "Kailasa Temple, Ellora",
        state: "Maharashtra",
        city: "Ellora",
        latitude: 20.0202,
        longitude: 75.2760,
        description: "The Kailasa Temple is an impressive rock-cut temple dedicated to Lord Shiva, carved from a single rock.",
        history: "Built during the 8th century by the Rashtrakuta dynasty, it is a remarkable example of monolithic architecture.",
        importance: "It is a significant part of the Ellora Caves, recognized for its grandeur and craftsmanship.",
        photos: ["https://example.com/kailasatemple1.jpg", "https://example.com/kailasatemple2.jpg"]
    },
    {
        id: 36,
        name: "Bada Imambara",
        state: "Uttar Pradesh",
        city: "Lucknow",
        latitude: 26.8550,
        longitude: 80.9450,
        description: "The Bada Imambara is an imposing Mughal-era monument known for its grand halls and architectural ingenuity.",
        history: "Constructed by Nawab Asaf-ud-Daula in the 18th century, it includes a large mosque and the famous Bhulbhulaiya.",
        importance: "It is a key historical and architectural landmark in Lucknow.",
        photos: ["https://example.com/badaimambara1.jpg", "https://example.com/badaimambara2.jpg"]
    },
    {
        id: 37,
        name: "Siddhivinayak Temple",
        state: "Maharashtra",
        city: "Mumbai",
        latitude: 19.0134,
        longitude: 72.8258,
        description: "Siddhivinayak Temple is a famous Hindu temple dedicated to Lord Ganesha, known for its spiritual significance.",
        history: "Founded in 1801, it is one of the most visited and revered temples in Mumbai.",
        importance: "It is a prominent religious site and a major center of faith and worship.",
        photos: ["https://example.com/siddhivinayak1.jpg", "https://example.com/siddhivinayak2.jpg"]
    },
    {
        id: 38,
        name: "Hawa Mahal",
        state: "Rajasthan",
        city: "Jaipur",
        latitude: 26.9236,
        longitude: 75.8267,
        description: "Hawa Mahal, also known as the Palace of Winds, is an architectural marvel with a unique façade of 953 windows.",
        history: "Built in 1799 by Maharaja Sawai Pratap Singh, it was designed to allow royal women to observe street festivities.",
        importance: "It is a key historical and architectural landmark in Jaipur.",
        photos: ["https://example.com/hawamahal1.jpg", "https://example.com/hawamahal2.jpg"]
    },
    {
        id: 39,
        name: "Golconda Fort",
        state: "Telangana",
        city: "Hyderabad",
        latitude: 17.4034,
        longitude: 78.4031,
        description: "Golconda Fort is a historic fortress known for its impressive architecture and acoustics.",
        history: "Built in the 16th century, it served as the capital of medieval Golconda Sultanate.",
        importance: "It is an important historical site and a major tourist attraction in Hyderabad.",
        photos: ["https://example.com/golcondafort1.jpg", "https://example.com/golcondafort2.jpg"]
    },
    {
        id: 40,
        name: "Rani Ki Vav",
        state: "Gujarat",
        city: "Patan",
        latitude: 23.8482,
        longitude: 72.1204,
        description: "Rani Ki Vav is an intricately constructed stepwell featuring stunning carvings and architectural detail.",
        history: "Built in the 11th century during the Solanki dynasty, it was used for water storage and as a cooling place.",
        importance: "It is a UNESCO World Heritage Site renowned for its elaborate design and historical significance.",
        photos: ["https://example.com/ranikivav1.jpg", "https://example.com/ranikivav2.jpg"]
    },
    {
        id: 41,
        name: "Sun Temple, Konark",
        state: "Odisha",
        city: "Konark",
        latitude: 19.8870,
        longitude: 85.0833,
        description: "The Sun Temple at Konark is an architectural masterpiece dedicated to the Sun God Surya.",
        history: "Built in the 13th century by King Narasimhadeva I, it is known for its chariot-shaped design.",
        importance: "It is a UNESCO World Heritage Site and a prominent example of Kalinga architecture.",
        photos: ["https://example.com/suntemplekonark1.jpg", "https://example.com/suntemplekonark2.jpg"]
    },
    {
        id: 42,
        name: "Elephanta Caves",
        state: "Maharashtra",
        city: "Mumbai",
        latitude: 18.9833,
        longitude: 72.8833,
        description: "The Elephanta Caves are a network of caves with rock-cut sculptures dedicated to Hindu deities.",
        history: "Dating back to the 5th to 8th centuries, they were originally used as a religious retreat.",
        importance: "They are a UNESCO World Heritage Site known for their intricate carvings and religious significance.",
        photos: ["https://example.com/elephantacaves1.jpg", "https://example.com/elephantacaves2.jpg"]
    },
    {
        id: 43,
        name: "Rameswaram",
        state: "Tamil Nadu",
        city: "Rameswaram",
        latitude: 9.2888,
        longitude: 79.3120,
        description: "Rameswaram is a sacred island with significant religious and historical importance.",
        history: "It is associated with the Ramayana and is a major pilgrimage site for Hindus.",
        importance: "It is a key location in Hindu mythology and a prominent center of worship.",
        photos: ["https://example.com/rameswaram1.jpg", "https://example.com/rameswaram2.jpg"]
    },
    {
        id: 44,
        name: "Ajanta Caves",
        state: "Maharashtra",
        city: "Ajanta",
        latitude: 20.5535,
        longitude: 75.7028,
        description: "The Ajanta Caves are a group of rock-cut Buddhist caves famous for their ancient murals and sculptures.",
        history: "Dating from the 2nd century BCE to 480 CE, these caves served as a monastic retreat.",
        importance: "They are a UNESCO World Heritage Site known for their artistic and historical value.",
        photos: ["https://example.com/ajantacaves1.jpg", "https://example.com/ajantacaves2.jpg"]
    },
    {
        id: 45,
        name: "Kailasa Temple, Ellora",
        state: "Maharashtra",
        city: "Ellora",
        latitude: 20.0202,
        longitude: 75.2760,
        description: "The Kailasa Temple is a remarkable rock-cut Hindu temple dedicated to Lord Shiva, renowned for its grand design and craftsmanship.",
        history: "Carved from a single rock during the 8th century by the Rashtrakuta dynasty, it stands out for its architectural brilliance.",
        importance: "Part of the Ellora Caves, it represents a pinnacle of monolithic rock-cut architecture.",
        photos: ["https://example.com/kailasatemple1.jpg", "https://example.com/kailasatemple2.jpg"]
    }
]


export default documents;