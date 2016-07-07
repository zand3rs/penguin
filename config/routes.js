/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  //-- login
  "GET /"                       : "Session.login",

  //-- users
  "GET /users"                  : "User.index",
  "GET /users/:id"              : "User.show",
  "POST /users"                 : "User.create",
  "GET /users/:id/edit"         : "User.edit",
  "PUT /users/:id"              : "User.update",
  "DELETE /users/:id"           : "User.destroy",

  //-- accounts
  "GET /accounts"                  : "Account.index",
  "GET /accounts/:id"              : "Account.show",
  "GET /accounts/new"              : "Account.new",
  "POST /accounts"                 : "Account.create",
  "GET /accounts/:id/edit"         : "Account.edit",
  "PUT /accounts/:id"              : "Account.update",
  "DELETE /accounts/:id"           : "Account.destroy",

  //-- apps
  "GET /apps"                  : "App.index",
  "GET /apps/:id"              : "App.show",
  "GET /apps/new"              : "App.new",
  "POST /apps"                 : "App.create",
  "GET /apps/:id/edit"         : "App.edit",
  "PUT /apps/:id"              : "App.update",
  "DELETE /apps/:id"           : "App.destroy",

  //-- templates
  "GET    /apps/:app_id/templates"           : "Template.index",
  "GET    /apps/:app_id/templates/new"       : "Template.new",
  "POST   /apps/:app_id/templates"           : "Template.create",
  "GET    /apps/:app_id/templates/:id/edit"  : "Template.edit",
  "PUT    /apps/:app_id/templates/:id"       : "Template.update",
  "DELETE /apps/:app_id/templates/:id"       : "Template.destroy",

  //-- entries
  "GET    /templates/:template_id/entries"           : "Entry.index",
  "GET    /templates/:template_id/entries/new"       : "Entry.new",
  "POST   /templates/:template_id/entries"           : "Entry.create",
  "GET    /templates/:template_id/entries/:id/edit"  : "Entry.edit",
  "PUT    /templates/:template_id/entries/:id"       : "Entry.update",
  "DELETE /templates/:template_id/entries/:id"       : "Entry.destroy",

  //-- images
  "GET     /images"       : "Image.index",
  "POST    /images"       : "Image.create",

  //-- videos
  "GET     /videos"       : "Video.index",
  "POST    /videos"       : "Video.create",

  //-- documents
  "GET     /documents"       : "Document.index",
  "POST    /documents"       : "Document.create",

};
