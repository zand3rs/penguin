/*
 * Exception
 *
 */

var stderror = require("stderror");
var Exception = stderror.extend("Exception");

module.exports = Exception;

//==============================================================================
//-- define exceptions here...

Exception.define({name: "UnknownError", message: "Unknown error"});
Exception.define({name: "SystemError", message: "System error"});
Exception.define({name: "InternalServerError", message: "Internal server error"});
Exception.define({name: "Forbidden", message: "Forbidden"});
Exception.define({name: "Unauthorized", message: "Unauthorized"});
Exception.define({name: "NotFound", message: "Not Found"});
Exception.define({name: "ValidationError", message: "Validation error"});
