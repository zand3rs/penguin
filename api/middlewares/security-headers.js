/**
 * Middleware: security-headers
 */

module.exports = function() {
  return function(req, res, next) {

    //-- prevent browser from loading page within an iframe
    res.set("X-Frame-Options", "DENY");

    //-- Redirect all HTTP traffic to HTTPS
    res.set("Strict-Transport-Security", "max-age=31536000");

    //-- Prevent content sniffing where no mimetype is sent
    res.set("X-Content-Type-Options", "nosniff");

    //-- Enables the Cross-site scripting (XSS) filter built into most recent web browsers
    res.set("X-XSS-Protection", "1; mode=block");

    //-- Reduce XSS risks on modern browsers by declaring what dynamic resources are allowed to load
    // res.set("Content-Security-Policy", "default-src 'self'");

    next();
  };
};
