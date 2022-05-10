const sequelize = require('../config/connection');
const seedPosts = require('./post_seeds');
const seedUsers = require('./user_seeds');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedPosts();
  console.log('\n----- POSTS SEEDED -----\n');

  process.exit(0);
}


seedAll();