/**
 * AppController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
    var page = parseInt(req.param("page")) || 1;
    var limit = req.param("limit") || sails.config.limits.pageLimit;

    async.auto({
      apps: function (next) {
        var paginatorOptions = {
          page: page,
          limit: limit,
          model: "app",
          criteria: {createdBy: req.user.id}
        };
        sails.helpers.PaginatorHelper(paginatorOptions, next);
      },
      templates: ["apps", function (next, result) {
        var apps = _.get(result, "apps.data", []);
        var appIds = _.map(apps, "id") || [];
        Template.find({appId: appIds}, next);
      }]
    }, function(err, result) {
      var apps =  _.get(result, "apps.data", []);
      var meta =  _.get(result, "apps.meta", {});
      var templates = result.templates || [];
      var payload = {};

      //attach template count to apps
      var templateCount = _.countBy(templates, "appId");
      _.map(apps, function (item) {
        return item.templateCount = templateCount[item.id] || 0;
      });

      res.format({
        html: function() {
          if (err) {
            req.addFlash("error", "Error loading apps");
          } else {
            payload.apps = apps;
            payload.meta = meta;
          }

          res.view(payload);
        },
        json: function() {
          payload = (err) ? err : apps;

          if (err) {
            return res.apiError(payload);
          } else {
            res.apiSuccess(payload, meta);
          }
        }
      });
    });
  },

  show: function(req, res) {

    return res.view();

  },

  new: function(req, res) {
    res.format({
      html: function () {
        res.view()
      },
      json: function() {
        res.notFound()
      }
    });
  },

  create: function(req, res) {
    var params = _.omitBy({
      account_id: req.param("account_id"),
      name: req.param("name"),
      description: req.param("description"),
      createdBy: req.user.id,
      updatedBy: req.user.id,
    }, _.isNil);

    App.create(params, function(err, app) {
      var payload = (err) ? err : app;

      res.format({
        html: function () {
          res.notFound();
        },
        json: function () {
          if (err) {
            return res.apiError(payload);
          } else {
            res.apiSuccess(payload);
          }
        }
      });
    });
  },

  edit: function(req, res) {
    var id = req.param("id");

    App.findOne({id: id}, function(err, app) {
      var payload = {};

      res.format({
        html: function() {
          if (err) {
            req.addFlash("error", "Error loading app");
          } else if (_.isEmpty(app)) {
            req.addFlash("error", "App Not Found");
          } else {
            payload.app = app;
          }

          res.view(payload);
        },
        json: function() {
          res.notFound();
        }
      });
    });
  },

  update: function(req, res) {
    var id = req.param("id");

    var params = _.omitBy({
      name: req.param("name"),
      description: req.param("description"),
      updatedBy: req.user.id
    }, _.isNil);

    App.update({id: id}, params, function(err, app) {
      var payload = (err) ? err : app;

      res.format({
        html: function() {
          res.notFound();
        },
        json: function() {
          if (err) {
            res.apiError(payload);
          } else if (_.isEmpty(app)) {
            res.apiError(new sails.helpers.Exception.RecordNotFound("App Not Found"));
          } else {
            res.apiSuccess(payload);
          }
        }
      });
    });
  },

  destroy: function(req, res) {
    var id = req.param("id");

    App.destroy({id: id}, function(err, app) {
      var payload = (err) ? err : app;

      res.format({
        html: function() {
          res.notFound();
        },
        json: function() {
          if (err) {
            res.apiError(payload);
          } else if (_.isEmpty(app)) {
            res.apiError(new sails.helpers.Exception.RecordNotFound("App Not Found"));
          } else {
            res.apiSuccess(payload);
          }
        }
      });
    });
  }

};
