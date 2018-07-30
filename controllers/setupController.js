var Todos = require('../models/todoModel');

module.exports = function(app){
  app.get('/api/setupTodos', function(req,res){
      //seed data
      var starterTodos = [
        {
        username:'test',
        todo:'buy sandwich',
        isDone: false,
        hasAttachment: false,
      },
      {
        username:'test',
        todo:'eat sandwich',
        isDone: false,
        hasAttachment:false
      },{
        username:'test',
        todo:'sleep',
        isDone:false,
        hasAttachment:false
      }
    ]
    Todos.create(starterTodos, function(err,results){
      res.send(results);
    });
  });
};
