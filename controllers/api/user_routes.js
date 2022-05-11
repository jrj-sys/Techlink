const router = require('express').Router();
const { User, Post, Comment, Reaction } = require('../../models');

// GET all users
router.get('/', (req, res) => {
  User.findAll(
    {
      // attributes: { exclude: ['password'] }
    })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
})

// GET a user by id
router.get('/:id', (req, res) => {
  User.findOne(
    {
      attributes: ['id', 'username', 'email'],
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Post,
          attributes: ['id', 'title', 'post_url', 'created_at']
        },
        {
          model: Comment,
          attributes: ['id', 'comment_text', 'created_at'],
          include: {
            model: Post,
            attributes: ['title']
          }
        },
        {
          model: Post,
          attributes: ['title'],
          through: Reaction,
          as: 'reacted_posts'
        }
      ]
    }
  )
  .then(dbUserData => {
    if (!dbUserData) {
      res.status(404).json({ message: 'No user found by that id!' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST a new user
router.post('/', (req, res) => {
  User.create(
    {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
    .then(dbUserData => {
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
});

// PUT an update to a user by id
router.put('/:id', (req, res) => {
  User.update(req.body, 
    {
      where: {
        id: req.params.id
      }
  })
  .then(dbUserData => {
    if (!dbUserData[0]) {
      res.status(404).json({ message: 'No user found by this id!' });
      return;
    }
    res.json(dbUserData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DELETE a user by id

router.delete('/:id', (req, res) => {
  User.destroy(
    {
      where: {
        id: req.params.id
      }
    })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found by this id!' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})
module.exports = router;
