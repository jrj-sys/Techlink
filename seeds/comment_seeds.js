const { Comment } = require('../models');
const { faker } = require('@faker-js/faker');

let randomComment = () => {
  return faker.lorem.words();
}

let commentData = [
  {
    comment_text: `${randomComment()}`,
    post_id: `1`,
    user_id: `8`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `2`,
    user_id: `3`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `3`,
    user_id: `6`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `4`,
    user_id: `1`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `5`,
    user_id: `10`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `6`,
    user_id: `4`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `7`,
    user_id: `5`
  },
  {
    comment_text: `${randomComment()}`,
    post_id: `8`,
    user_id: `10`
  },
]


const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
