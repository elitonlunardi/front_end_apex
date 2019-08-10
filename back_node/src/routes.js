const express = require('express');
const routes = new express.Router();
const PostController = require('./controllers/PostController')
const LikeController = require('./controllers/LikeController')
const CursoController = require('./controllers/CursoController')

routes.get('/posts', PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);

routes.post('/posts/:id/like', LikeController.store);


routes.post('/cursos',CursoController.cadastrar);
routes.get('/cursos', CursoController.selecionar);



module.exports = routes;