const router = require('express').Router();
const { Comment } = require('../../models');

// GET all comments by user id
router.get('/:id', (req, res) => {
  Comment.findOne({
    attributes: ['id', 'post_id', 'comment_text', 'createdAt', 'updatedAt'],
    where: {
      id: req.params.id
    }
  })
  .then(dbUserData => res.json(dbUserData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// POST a comment
router.post('/', (req, res) => {
  Comment.create({
    user_id: req.body.user_id,
    comment_text: req.body.comment_text,
    post_id: req.body.post_id
    // use the id from the session
    // user_id: req.session.user_id
  })
  .then(dbCommentData => res.json(dbCommentData))
  .catch(err => {
    console.log(err);
    res.status(400).json(err);
  });
});

// DELETE a comment by id
router.delete('/:id', (req, res) => {
  Comment.destroy({
    where: {
        id: req.params.id
    }
  })
  .then(dbPostData => {
    if (!dbPostData) {
    res.status(404).json({ message: 'No comment found with this id' });
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