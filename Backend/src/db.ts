import { Client } from 'pg';

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

// Connet to PostgreSQL database
const client = new Client({
    user: 'postgres',
    password: 'example',
    port: 5432,
    host: 'db'
});

async function establishConnection () {
    await sleep(10000);
    client.connect();
}

establishConnection();

async function checkSheet () {
    try {
        const result = await client.query("SELECT * FROM duties");
        return result;
    } catch (error) {
        // Relation "duties" does not exist. Then create one.
        const result = await client.query('CREATE TABLE duties (id VARCHAR(255), name VARCHAR(255))');
        return result;
    }
}
checkSheet();

export default client;