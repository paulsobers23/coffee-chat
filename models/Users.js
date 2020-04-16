const bcrypt = require('bcrypt');
const db = require('../db');
<<<<<<< HEAD

class User {
  static create(firstName, lastName, email, password, industry, jobPosition, jobDescription, thumbsUp, contactInfo) {
    const queryText = `INSERT INTO users (first_name, last_name, email, password, industry, job_position,
        job_description, thumbs_up, contact_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8. $9);`;
    return db.query(queryText, [firstName, lastName, email, password, industry, jobPosition, jobDescription, thumbsUp, contactInfo]);
  }

  static addConnection(senderId, recieverId) {
    const queryText = 'INSERT INTO connections (sender_id, reciever_id, connected) VALUES ($1, $2);';
    return db.query(queryText, [senderId, recieverId])
      .then((data) => console.log('Connection has been added:', data));
=======
const User = require('../models/Users.js');

class Events {
  static create(creator, dateCreated, title, description, purpose, location, dateTime, type) {
    const queryText = `INSERT INTO events (creator, dateCreated, title, description, purpose, location, dateTime, type)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`;
    return db.query(queryText, [creator, date_created, title, description, purpose, location, dateTime, type])
  }

  static delete(id) {
    const queryText = `DELETE FROM events WHERE ID = $1`;
    return db.query(queryText, [id]);
  }

  static update(id, title, description, purpose, location, dateTime, type) {
    const queryText = `UPDATE events SET title = $2, description = $3, purpose = $4, location = $5, date_time = $6, type = $7 WHERE id = $1`;
    return db.query(queryText, [id, title, description, purpose, location, dateTime, type])
      .then(data => 'Event updated:', data)
>>>>>>> origin
  }

  static getById(eventId) {
    const queryText = `SELECT * FROM events WHERE id = $1`;
    return db.query(queryText, [eventId])
  }

  static getByCreator(creatorId) {
    const queryText = `SELECT * FROM events WHERE id = $1`;
    return db.query(queryText, [creatorId])
  }

<<<<<<< HEAD
  static getConnections(senderId) {
    const queryText = 'SELECT connections.reciever_id from connections WHERE conenctions.sender_id = $1 AND connected = TRUE';
    return db.query(queryText, [senderId])
      .then((data) => {
        data.rows.forEach((reciever) => User.getById(senderId)); // Your connections already stored in user obj.
      });
  }

  static updateUser(id, firstName, lastName, email, industry, jobPosition, jobDescription, contactInfo) {
    const queryText = `UPDATE users SET first_name = $2, last_name = $3, email = $4, industry = $4, job_position = $5, contact_info = $6
      WHERE id = $1`;
  }

  static updatePassword() {
    // This is immediately needed, Complete if needed, otherwise delete.
=======
  static getLastByCreator(creatorId) {
    const queryText = `SELECT * FROM events WHERE id = $1`;
    return db.queryText(queryText, [creatorId])
      .then(data => data.rows[0]);
  }

  static getRSVPs(eventId) {
    const queryText = `SELECT * FROM users ON JOIN user.id = event_id;`
    return db.query(queryText, [eventId])
      .then(data => data.rows);
  }

  static getByTitle(title) {
    const queryText = `SELECT * FROM events WHERE title = $1`;
    return db.query(queryText, [eventId])
      .then(data => data.rows[0]);
>>>>>>> origin
  }
};

<<<<<<< HEAD
module.exports = User;
=======
module.exports = Events;
>>>>>>> origin
