const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const withAuth = require('../../utils/auth.js')


// GET all posts (linked to Users)
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    // Query configuration
    attributes: ['id', 'post_text', 'title', 'created_at',
    // [sequelize.literal('(SELECT COUNT(*) FROM reaction WHERE post.id = reaction.post_id)'), 'reacted_count']
  ],
    order: [['created_at', 'DESC']], 
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
  .then(dbPostData => res.json(dbPostData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// GET all posts by user id
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'post_text', 'title', 'created_at',
    // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = vote.post_id)'), 'vote_count']
  ],
    include: [
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// POST a new post
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!', post_text: 'https://taskmaster.com/press', user_id: 1}
  Post.create({
      title: req.body.title,
      post_text: req.body.post_text,
      user_id: req.body.user_id
  })
      .then(dbPostData => res.json(dbPostData))
      .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// PUT an update to a post by id
router.put('/:id', withAuth, (req, res) => {
  Post.update(
    {
      title: req.body.title,
      post_text: req.body.post_text
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// DELETE a post by id
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;