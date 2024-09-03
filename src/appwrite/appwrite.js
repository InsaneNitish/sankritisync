import { Client, Account, Databases,ID} from 'appwrite';
import documents from './data';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66d0c1f4002d35975d96'); // Replace with your project ID

    
export const account = new Account(client);
export const databases = new Databases(client,"66d0c37a001cbbb08fb4")
export { ID } from 'appwrite';

//creating documents for heritage collection
const createDocuments = ()=>{
    console.log('I am in create DB');
    documents.forEach(doc => {
        databases.createDocument(
            '66d0c37a001cbbb08fb4',
            '66d1e6f80003bdb5d96f',
            ID.unique(),
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
        ).then(
            function(response){
                console.log(response);
            },
            function(error){
                console.log(error);
            }
        )
    });
}



