const express = require('express');
const blogController = require('../controllers/blogControllers');
const router = express.Router();

//This way, you call the controller and insert it with a function into the rout
router.get('/',blogController.blog_index);

router.post('/',blogController.blog_create_post);

router.get('/create',blogController.blog_create_get);

router.get('/:id',blogController.blog_details)

router.delete('/:id',blogController.blog_delete_post);


module.exports = router;