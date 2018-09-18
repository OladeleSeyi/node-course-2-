var mongoose = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://toothy61:runner61@ds259912.mlab.com:59912/herokuapp');

module.exports = {
  mongoose
}
