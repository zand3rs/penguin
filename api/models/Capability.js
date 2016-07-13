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
    canCreate: {
      type: "boolean",
      required: true,
      defaultsTo: false,
      columnName: "can_create"
    },
    canView: {
      type: "boolean",
      required: true,
      defaultsTo: false,
      columnName: "can_view"
    },
    canEdit: {
      type: "boolean",
      required: true,
      defaultsTo: false,
      columnName: "can_edit"
    },
    canDelete: {
      type: "boolean",
      required: true,
      defaultsTo: false,
      columnName: "can_delete"
    }
  }

};
