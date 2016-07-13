/**
* State.js
*
*/

module.exports = {

  tableName: "states",
  attributes: {
    name: {
      type: "string",
      required: true,
      columnName: "name"
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
