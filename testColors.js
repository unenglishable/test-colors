var colors = require('colors');
var fs = require('fs');
var through = require('through');

fs.createReadStream(process.argv[2])
  .pipe(through(function (data) {
    this.queue(data.toString().zalgo.rainbow);
  },
  function () {
    this.queue('He Comes.'.zalgo.rainbow);
  }))
.pipe(process.stdout);
