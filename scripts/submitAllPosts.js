const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

require('dotenv').config({
    path: path.resolve(__dirname, '../.env'),
});

const constructPost = (filename) => {
    const contents = fs.readFileSync(filename, 'utf8');
    const lines = contents.split('\n');
    const title = lines[0];
    const author = lines[1];
    const category = lines[2];
    let postContent = '';
    for (let line = 4; line < lines.length; line ++) {
        if (!lines[line])
            continue;
        postContent += `<p>${lines[line]}</p>`;
    }
    const slug = path.basename(filename);
    return {
        slug,
        title,
        author,
        category,
        content: postContent,
        createdAt: Date.now(),
        smiles: 0,
    };
};

async function main() {
    const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:27017/admin?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    console.log('Connecting');
    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }

    const db = client.db('site');
    const collection = db.collection('posts');

    if (process.argv[2] === 'clean') {
        const deleteResult = await collection.deleteMany({});
        console.log('Deleted => ', deleteResult);
        // Default action is to read posts and submit.
    } else {
        console.log('Reading files...');
        const files = fs.readdirSync(path.resolve(__dirname, './posts'));

        for (const file of files) {
            const filename = `${path.resolve(__dirname, './posts')}/${file}`;
            console.log('Adding post', file);
            const basename = path.basename(file);
            if (basename.startsWith('.')) {
                console.log('Skippping');
                continue;
            }

            const post = constructPost(filename);
            const existingPost = await collection.findOne({ slug: post.slug });

            if (existingPost) {
                console.log('Found post: ', existingPost);
                delete post.smiles;
                delete post.createdAt;
                const result = await collection.updateOne({ slug: post.slug }, {
                    $set: {
                        ...post,
                        updatedAt: Date.now(),
                    },
                });
            } else {
                const result = await collection.insertOne(post);
                console.log('Inserted post => ', result);
            }
        }
    }

    await client.close();
}

main().then(console.log);