var configVal = require('./config.json');


module.exports = {
  getDBCon: function(){
    // change with * sign
    return 'mongodb://'+configVal.uname+':'+configVal.pwd+ '@*.mlab.com:*/*';
  }
}
