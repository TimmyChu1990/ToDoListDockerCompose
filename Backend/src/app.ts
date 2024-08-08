import { port } from './config';
import express from 'express';
import db from './db';
const app = express();

import bodyParser from "body-parser";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

import cors from "cors"
app.use(cors({
    origin: true,
    credentials: true
}))

app.get('/duties', RestfulGetDuties);
app.post('/createDuty', RestfulCreateDuty);
app.delete('/deleteDuty', RestfulDeleteDuty);
app.post('/updateDuty', RestfulUpdateDuty);
app.get('/', RestfulHelloWorld);

// Hello World for testing purposes
function RestfulHelloWorld(req: express.Request, res : express.Response) {
  res.json({message: 'Hello World!'});
}

// Get all duties
async function RestfulGetDuties (req: express.Request, res : express.Response) {
  try {
    const result = await db.query("SELECT * FROM duties");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send({msg: 'Failed to query duties!'});
  }
}

// Create duty
async function RestfulCreateDuty (req: express.Request, res : express.Response) {
  const id = req.body.id;
  const name = req.body.name;
  if(id === undefined || name === undefined){
    res.status(500).send({msg: 'Failed to create duty! id or name is undefined'});
    return;
  }

  // Avoid same ID creation.
  try {
    const result = await db.query("SELECT * FROM duties WHERE id='" + id + "'");
    if(result.rows.length > 0){
      res.status(500).send({msg: 'Failed to create duty Have same id!'});
      return;
    }
  } catch (err) {
    res.status(500).send({msg: 'Failed to create duty!'});
  }

  // Avoid same name creation.
  try {
    const result = await db.query("SELECT * FROM duties WHERE name='" + name + "'");
    if(result.rows.length > 0){
      res.status(500).send({msg: 'Failed to create duty Have same name!'});
      return;
    }
  } catch (err) {
    res.status(500).send({msg: 'Failed to create duty!'});
  }

  try {
    await db.query("INSERT INTO duties (id, name) VALUES ('" + id + "', '" + name + "');"); 
    res.json(req.body);
  } catch (err) {
    res.status(500).send({msg:'Failed to create duty!'});
  }
}

// Delete duty
async function RestfulDeleteDuty (req: express.Request, res : express.Response) {
  const id = req.body.id;

  if(id === undefined){
    res.status(500).send({msg: 'Failed to delete duty! id is undefined'});
    return;
  }
  try {
    const result = await db.query("DELETE FROM duties WHERE id = '" + id + "';"); 
    res.sendStatus(204);
  } catch (err) {
    res.status(500).send({msg:'Failed to delete duty!'});
  }
}

// Update duty
async function RestfulUpdateDuty (req: express.Request, res : express.Response) {
  const id = req.body.id;
  const name = req.body.name;

  // Avoid same name modification.
  try {
    const result = await db.query("SELECT * FROM duties WHERE name='" + name + "'");
    if(result.rows.length > 0){
      res.status(500).send({msg: 'Failed to create duty Have same name!'});
      return;
    }
  } catch (err) {
    res.status(500).send({msg: 'Failed to update duty!'});
  }

  if(id === undefined || name === undefined){
    res.status(500).send({msg: 'Failed to update duty! id or name is undefined'});
    return;
  }
  try {
      const result = await db.query("UPDATE duties SET name = '" + name + "' WHERE id = '" + id + "' RETURNING *");
      res.json(result.rows[0]);
  } catch (err) {
      res.status(500).send({msg: 'Failed to update duty!'});
  }
}

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

