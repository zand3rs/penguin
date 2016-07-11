/**
* AppUser.js
*
*/

module.exports = {

  tableName: "app_users",
  attributes: {
    appId: {
      type: "string",
      required: true,
      columnName: "app_id"
    },
    userId: {
      type: "string",
      required: true,
      columnName: "user_id"
    }
  }

};
