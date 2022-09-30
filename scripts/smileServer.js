const express = require('express');
const { MongoClient } = require("mongodb");
const fs = require("fs");
const path = require("path");
const app = express();

require('dotenv').config({
    path: path.resolve(__dirname, '../.env'),
});

let collection = null;

async function setupMongo() {
    const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:27017/admin?retryWrites=true&w=majority`;

    if (!collection) {
        const client = new MongoClient(uri);
        console.log('Connecting');
        try {
            await client.connect();
        } catch (e) {
            console.error(e);
            return;
        }
        const db = client.db('site');
        collection = db.collection('posts');
    }
}

app.get('/smile', async function (request, response) {
    await setupMongo();
    const slug = request.query.slug;

    const existingPost = await collection.findOne({ slug });

    if (existingPost) {
        response.status(200).send({ smiles: existingPost.smiles });
    } else {
        response.status(404).send({ error: 'Post not found!' });
    }
});

app.post('/smile', async function (request, response) {
    await setupMongo();
    const slug = request.body.slug;

    const existingPost = await collection.findOne({ slug });

    if (existingPost) {
        await collection.updateOne({ slug }, {
            $set: {
                smiles: existingPost.smiles + 1,
            },
        });
        response.status(204);
    } else {
        console.log('Attempt to smile unfound post: ', slug);
        response.status(404).send({ error: 'Post not found!' });
    }
});

// HARD CODED PORT
app.listen(9090);
console.log('Listening on 9090');