/**
* Entry.js
*
*/

var validStatus = ["draft", "submitted", "rejected", "published", "unpublished", "archived"];

module.exports = {

  status: validStatus,

  tableName: "entries",
  attributes: {
    appId: {
      type: "string",
      required: true,
      columnName: "app_id"
    },
    templateId: {
      type: "string",
      required: true,
      columnName: "template_id",
    },
    attrs: {
      type: "json",
      required: true,
      columnName: "attrs"
    },
    tags: {
      type: "array",
      columnName: "tags"
    },
    createdBy: {
      type: "string",
      required: true,
      columnName: "created_by"
    },
    updatedBy: {
      model: "User",
      type: "string",
      required: true,
      columnName: "updated_by"
    },
    status: {
      type: "string",
      defaultsTo: "draft",
      get in() {
        return validStatus;
      },
      columnName: "status"
    },
    publishedDate: {
      type: "datetime",
      required: true,
      defaultsTo: new Date(),
      columnName: "published_date"
    },
    createdAt: {
      type: "datetime",
      columnName: "created_at"
    },
    updatedAt: {
      type: "datetime",
      columnName: "updated_at"
    }
  },

  //-- lifecycle callback
  beforeValidate: function(values, next) {
    if (!values.attrs || !values.templateId) {
      return next();
    }
    async.auto({
      template: function(next) {
        Template.findOne({id: values.templateId}, next);
      },
      validate: ["template", function(next, result) {
        var template = result.template;
        var err = ModelHelper.validate(template.attrs, values.attrs);

        return next(err);
      }],
      strip: ["template", function (next, result) {
        var template = result.template;
        Entry.stripHtmlTags(template.attrs, values.attrs);
        next();
      }]
    }, next);
  },

  //---- Strip HTML Tags
  stripHtmlTags: function (rules, content) {

    _.forEach(rules, function (rule, key) {
      if (_.get(rules, key + ".fieldType", "") == "richtext") {
        content[key] = Util.sanitizeHtml( content[key] );
      }
    });
  }

};
