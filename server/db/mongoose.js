var mongoose = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/TodoApp');

module.exports = {
  mongoose
}
// Remember to return this bih
//  || 'mongodb://toothy61:runner61@ds259912.mlab.com:59912/herokuapp'
