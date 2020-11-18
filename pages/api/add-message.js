import { MongoClient } from "mongodb";

export default async (req, res) => {
  const uri =
    "mongodb+srv://root:rootuser@cluster0.mcnx0.mongodb.net/myportfolio?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // seleting the collection
    let messages = await client.db().collection("messages");

    // inserting the data
    messages.insertOne(req.body);

    return res.send("ok messaged sent sucessfull");
  } catch (e) {
    res.end("Unsucessfully, try again later.");
  } finally {
    await client.close();
  }
};
