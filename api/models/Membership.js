/**
* Membership.js
*
*/

module.exports = {

  tableName: "memberships",
  attributes: {
    entityType: {
      type: "string",
      required: true,
      columnName: "entity_type"
    },
    entityId: {
      type: "string",
      required: true,
      columnName: "entity_id"
    },
    userId: {
      type: "string",
      required: true,
      columnName: "user_id"
    },
    userType: {
      type: "string",
      in: ["owner", "admin", "member"],
      defaultsTo: "member",
      required: true,
      columnName: "user_type"
    },
    createdAt: {
      type: "datetime",
      columnName: "created_at"
    },
    updatedAt: {
      type: "datetime",
      columnName: "updated_at"
    }
  }

};
