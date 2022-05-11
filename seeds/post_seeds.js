const { Post } = require('../models');

const postData = [
  {
    title: 'Self-enabling exuding moratorium',
    post_text: 'View this: https://aol.com/sit/amet/eros/suspendisse/accumsan/tortor/quis.js',
    user_id: 1
  },
  {
    title: 'Persistent solution-oriented emulation',
    post_text: 'View this: https://google.com.br/amet/consectetuer/adipiscing/elit.png',
    user_id: 2
  },
  {
    title: 'Intuitive zero defect firmware',
    post_text: 'View this: https://ifeng.com/posuere/cubilia.json',
    user_id: 3
  },
  {
    title: 'Team-oriented 6th generation pricing structure',
    post_text: 'View this: http://example.com/nisl/duis/bibendum/felis/sed.xml',
    user_id: 4
  },
  {
    title: 'Re-engineered regional capability',
    post_text: 'View this: https://google.co.jp/massa/id/nisl/venenatis/lacinia.jpg',
    user_id: 5
  },
  {
    title: 'Integrated interactive paradigm',
    post_text: 'View this: https://photobucket.com/vulputate/nonummy/maecenas.aspx',
    user_id: 6
  },
  {
    title: 'Optional impactful protocol',
    post_text: 'View this: http://geocities.jp/condimentum/id/luctus/nec.xml',
    user_id: 7 
  },
  {
    title: 'Grass-roots value-added analyzer',
    post_text: 'View this: https://g.co/pede.js',
    user_id: 8
  },
  {
    title: 'Quality-focused systematic knowledge user',
    post_text: 'View this: http://mlb.com/ante/nulla.aspx',
    user_id: 9 
  },
  {
    title: 'Open-architected discrete function',
    post_text: 'View this: http://yale.edu/eu/orci/mauris/lacinia/sapien/quis.aspx',
    user_id: 10
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;