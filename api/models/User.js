/**
* User.js
*
*/

module.exports = {

  tableName: "users",
  attributes: {
    voyagerId: {
      type: "string",
      columnName: "voyager_id"
    },
    email: {
      type: "email",
      columnName: "email"
    },
    username: {
      type: "string",
      columnName: "username"
    },
    firstName: {
      type: "string",
      columnName: "first_name"
    },
    lastName: {
      type: "string",
      columnName: "last_name"
    },
    picture: {
      type: "string",
      columnName: "picture"
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
