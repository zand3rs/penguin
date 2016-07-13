/**
* Capability.js
*
*/

module.exports = {

  tableName: "capabilities",
  attributes: {
    componentId: {
      type: "string",
      required: true,
      columnName: "component_id"
    },
    userId: {
      type: "string",
      required: true,
      columnName: "user_id"
    },
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
    canView: {
      type: "boolean",
      defaultsTo: false,
      columnName: "can_view"
    },
    canCreate: {
      type: "boolean",
      defaultsTo: false,
      columnName: "can_create"
    },
    canUpdate: {
      type: "boolean",
      defaultsTo: false,
      columnName: "can_update"
    },
    canDelete: {
      type: "boolean",
      defaultsTo: false,
      columnName: "can_delete"
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
