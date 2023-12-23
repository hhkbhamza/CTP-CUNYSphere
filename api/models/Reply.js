"use strict";
const { Model } = require("sequelize");


module.exports = (sequelize, DataTypes) => {
  class Reply extends Model {}


  Reply.init(
    {
      matching_id: {
        type: DataTypes.INTEGER,
      },
      content: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 250],
          notEmpty: true,
        },
      },
    },
    {
      sequelize,
      modelName: "Reply",
    }
  );


  Reply.associate = (models) => {
    // associations can be defined here
  };


  return Reply;
};