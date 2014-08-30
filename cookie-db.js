//  Cookie Database version 1.0

var db = {
  config: {
    name: 'name'
  }
};

db.init = function () {
  if (typeof $.cookie(db.config.name) !== 'undefined') {
    db.data = JSON.parse($.cookie(db.config.name));
  } else {
    db.data = {};
  }
}

db.set = function () {
  var arg = Array.prototype.slice.apply(arguments);
  var d = db.data;
  $.each(arg,function (i,k) {
    if (i < arg.length-2) {
      if (typeof d[k] === 'undefined' || typeof d[k] === 'string') {
        d[k] = {};
      }
      if (arg.length > 2) {
        d = d[k];
      }
    } else {
      d[arg[arg.length-2]] = k;
    }
  });
  db.save();
}

db.get = function () {
  if (typeof db.data === 'undefined') {
    db.init();
  }
  var args    = Array.prototype.slice.apply(arguments);
  var dbClone = db.data;
  var o;
  $.each(args,function (i,k) {
    if (i < args.length) {
      if (typeof dbClone[k] === 'undefined') {
        o = undefined;
      } else {
        dbClone = dbClone[k];
        o       = dbClone;
      }
    }
  });
  return o;
}

db.save = function () {
  $.cookie(db.config.name,JSON.stringify(db.data));
}