/**
* App.js
*
*/

module.exports = {

  tableName: "apps",
  attributes: {
    accountId: {
      type: "string",
      required: true,
      columnName: "account_id"
    },
    name: {
      type: "string",
      required: true,
      columnName: "name"
    },
    description: {
      type: "string",
      required: true,
      columnName: "description"
    },
    createdBy: {
      type: "string",
      required: true,
      columnName: "created_by"
    },
    updatedBy: {
      type: "string",
      required: true,
      columnName: "updated_by"
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

  afterCreate: function(values, next) {
    var userId = values.createdBy;
    var appId = Values.id;

    var params = {
      appId: appId,
      userId: userId
    };

    AppUser.create(params, next);
  }
}
