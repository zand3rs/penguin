/**
* User.js
*
*/

module.exports = {

  tableName: "accounts",
  attributes: {
    name: {
      type: "string",
      required: true,
      columnName: "name"
    },
    description: {
      type: "string",
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
    var accountId = values.id;

    var params = {
      userId: userId,
      accountId: accountId
    };

    UserAccount.create(params, next);
  }

};
