//  POST api/new-meetup
import { MongoClient } from "mongodb";
async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    // const { title, id, description, image, address } = data;
    const client = await MongoClient.connect(
      "mongodb+srv://gbf555136:gbf0988@cluster0.v4pol.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const result = await meetupsCollection.insertOne(data);
    console.log(result);
    client.close();
    res.status(201).json({ message: "insert new meetup!" });
  }
}
export default handler;
