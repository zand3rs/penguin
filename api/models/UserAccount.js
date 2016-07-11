/**
* User.js
*
*/

module.exports = {

  tableName: "user_accounts",
  attributes: {
    userId: {
      type: "string",
      required: true,
      columnName: "user_id"
    },
    accountId: {
      type: "string",
      required: true,
      columnName: "account_id"
    }
  }

};
