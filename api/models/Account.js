/**
* Account.js
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
    var entityId = values.id;

    var params = {
      entityType: "account",
      entityId: entityId,
      userId: userId,
    };

    Membership.create(params, next);
  }

};
