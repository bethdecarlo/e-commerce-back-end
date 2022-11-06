const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

// I added two columns:
//The id column, which will give the category an auto-incremented id.
//The category_name column which will alow the data to be contained as a string. 
Category.init(
  {
    id: {
    //properties of the id column
      type: DataTypes.INTEGER, 
      allowNull : false, 
      primaryKey: true,
      autoIncrement: true
    },

    category_name: {
      //properties of the category name column
      type: DataTypes.STRING,
      allowNull: false
    }

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
