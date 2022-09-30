const { MongoClient } = require('mongodb');
const fs = require('fs');
const path = require('path');

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
    };
};

async function main() {
    const uri = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:27017/admin?retryWrites=true&w=majority`;
    const client = new MongoClient(uri);

    try {
        await client.connect();
    } catch (e) {
        console.error(e);
    }

    const db = client.db('site');
    const collection = db.collection('posts');

    const files = fs.readdirSync(path.join(__dirname, './posts'));

    files.forEach((file) => {
        const basename = path.basename(file);
        if (basename.startsWith('.')) {
            return;
        }

        collection.insertOne(constructPost(file)).then((result) => {
            console.log('Inserted post => ', result);
        });
    });

    await client.close();
}

main().then(console.log);