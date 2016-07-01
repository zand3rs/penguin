/**
 * Middleware: miscellaneous
 */

module.exports = function() {
  return function(req, res, next) {
    //-- set title
    if (!_.isEmpty(sails.config.appTitle)) {
      res.locals.title = sails.config.appTitle;
    }

    //-- expose Exception to views
    res.locals.Exception = Exception;

    //-- expose Util to views
    res.locals.Util = require("../helpers/Util");

    next();
  };
};
