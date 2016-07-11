/**
* Membership.js
*
*/

module.exports = {

  tableName: "memberships",
  attributes: {
    entityType: {
      type: "string",
      in: ["account", "app"],
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
    }
  }

};
