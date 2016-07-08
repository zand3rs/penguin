/**
* Template.js
*
*/

var fieldTypes = [
  {
    id: "text",
    name: "Single Line Text",
    description: "Single Line Text Description",
    validations: ["required", "maxLength"],
    type: "string"
  },
  {
    id: "url",
    name: "URL Text",
    description: "URL Text Description",
    validations: ["required", "url"],
    type: "string"
  },
  {
    id: "dropdown",
    name: "Dropdown",
    description: "Select Description",
    validations: ["required", "in"],
    type: "string"
  },
  {
    id: "richtext",
    name: "Rich Text",
    description: "Rich Text Description",
    validations: ["required","maxLength"],
    type: "text"
  },
  {
    id: "number",
    name: "Numbers",
    description: "Numbers Description",
    validations: ["required", "int"],
    type: "integer"
  },
  {
    id: "date",
    name: "Date & Time",
    description: "Date & Time Description",
    validations: ["required", "datetime"],
    type: "datetime"
  },
  {
    id: "image",
    name: "Image",
    description: "Image Description",
    validations: ["required", "urlish"],
    type: "string"
  },
  {
    id: "reference",
    name: "Reference",
    description: "Relationship with other Template",
    validation: ["required"], // TODO: know your validation!!!!!!
    type: "string"
  }
];

module.exports = {

  tableName: "templates",
  fieldTypes: fieldTypes,
  attributes: {
    appId: {
      type: "string",
      required: true,
      columnName: "app_id"
    },
    name: {
      type: "string",
      required: true,
      columnName: "name"
    },
    description: {
      type: "string",
      // required: true,
      columnName: "description"
    },
    attrs: {
      type: "json",
      required: true,
      columnName: "attrs"
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

  beforeValidate: function(values, next) {
    var attrs = values.attrs;
    var ctr = 0;
    _.each(attrs, function(value, key) {
      value.order = ctr;
      ctr++;
    });

    values.attrs = attrs;
    next();
  }

};
