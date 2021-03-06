'use strict';

const Stack = require('./linked-list.js');

Stack.prototype.push = function(val) {
  this.insert(val);
  return this;
};

Stack.prototype.pop = function() {
  this.shift();
  return this;
};

Stack.prototype.peek = function() {
  return this.head.val;
};
