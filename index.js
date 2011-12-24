
var at_exit = function(func) {
  if (require.main.loaded) {
    func();
  } else {
    process.nextTick(function(){ at_exit(func); });
  }
};

module.exports = at_exit;
