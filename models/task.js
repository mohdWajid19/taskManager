const mongoose = require('mongoose');
// connection url
const url = "mongodb://localhost/taskManager";
 
// Connecting to database
mongoose.connect(url, {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

// creting new schema
const taskSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default:false
  },
});
// mongoose.model(collection_name, modelName)
module.exports = mongoose.model("Task",taskSchema)
// reference this file location and use Task as Constructor for storing in database