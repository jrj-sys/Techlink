const { User } = require('../models');
const { faker } = require('@faker-js/faker');

let randomUser = () => {
  return faker.name.firstName();
} 
let randomEmail = () => {
  return faker.internet.email();
} 

const userData = [
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  },
  {
    username: `${randomUser()}`,
    email: `${randomEmail()}`,
    password: `12345`
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;