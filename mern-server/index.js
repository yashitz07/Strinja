
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors')
require('dotenv').config()
// middleware
const allowedOrigins = [
  process.env.FRONTEND_URL,                // AWS S3 or strinja.shop
  "http://localhost:5173",                 // local dev
  "https://strinja.vercel.app"    // current Vercel deployment
];

app.use(cors({
  origin: (origin, callback) => {
    // allow requests with no origin (e.g. mobile apps, curl, Postman)
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("CORS not allowed for this origin"));
    }
  },
  credentials: true,
}));
app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
// mondodb configuration
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });
  async function run() {
    try {
      // Connect the client to the server	
      await client.connect();
      //create a collection of document 
      const artCollection = client.db("artInventory").collection("arts");
      //insert a art to db: post method
        app.post("/upload-art",async(req,res)=>{
            const data = req.body;
            const result = await artCollection.insertOne(data);
            res.send(result);
        })
        //get all art from database
        app.get("/all-arts",async(req,res)=>{
            const arts = artCollection.find();
            const result = await arts.toArray();
            res.send(result);
        })
        //update a art data: patch or update methods
        app.patch("/art/:id",async(req,res)=>{
            const id = req.params.id;
            const updateArtData = req.body;
            const filter = {_id: new ObjectId(id)};
            
            const updateDoc ={
                $set: {
                    ...updateArtData
                },
            }
            const options = { upsert: true};
            //update
            const result = await artCollection.updateOne(filter,updateDoc, options);
            res.send(result);
        })
        // delete art data
      app.delete("/art/:id", async(req,res)=>{  
        const id = req.params.id;
        const filter = { _id: new ObjectId(id)};
        const result = await artCollection.deleteOne(filter);
        res.send(result);
      })
      // to get single bool data
      app.get("/art/:id", async(req, res)=>{
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await artCollection.findOne(filter);
        res.send(result);
      })
//user data collection
const userDataCollection = client.db("artInventory").collection("user_data");
app.post("/join-us", async (req, res) => {
  const userData = req.body;
  const result = await userDataCollection.insertOne(userData);
  res.send(result);
});





      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
    //   await client.close();
    }
  }
  run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})