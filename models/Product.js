// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and attributes for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // Product name will be stored as a string. 
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Price must be stored as a decimal
    // Validation will be used to make sure a decimal is entered
    price: {
      type: DataTypes.DECIMAL, 
      allowNull: false,
      validate: {
        isDecimal: true,
      }
    },
    // Stock (referring to the number in stock) will have a default value of 10
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false, 
      defaultValue: 10,
      validate: {
        isNumeric: true,
      }
    },
    // This will connect to the category model and reference the category id number. 
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
