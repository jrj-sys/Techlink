const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');
const Reaction = require('./Reaction');


// associations 
User.hasMany(Post, {
  foreignKey: 'user_id'
});

Post.belongsTo(User, {
  foreignKey: 'user_id'
});

User.belongsToMany(Post, {
  through: Reaction,
  as: 'reacted_posts',
  foreignKey: 'user_id'
});

Post.belongsToMany(User, {
  through: Reaction,
  as: 'reacted_posts',
  foreignKey: 'post_id'
})

Reaction.belongsTo(User, {
  foreignKey: 'user_id'
});

Reaction.belongsTo(Post, {
  foreignKey: 'post_id'
});

Reaction.belongsTo(Comment, {
  foreignKey: 'comment_id'
})

Post.hasMany(Reaction, {
  foreignKey: 'post_id'
});

Comment.hasMany(Reaction, {
  foreignKey: 'comment_id'
});

Comment.belongsTo(User, {
  foreignKey: 'user_id'
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id'
});

User.hasMany(Comment, {
  foreignKey: 'user_id'
});

Post.hasMany(Comment, {
  foreignKey: 'post_id'
})


module.exports = { User, Post, Comment, Reaction };