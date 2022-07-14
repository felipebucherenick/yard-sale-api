const { Model, DataTypes } = require('sequelize');

const PRODUCTS_TABLE = 'products';

const ProductsSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  price: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  description: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  image: {
    allowNull: false,
    type: DataTypes.STRING,
  },
};

class Products extends Model {
  static associate() {
    //....
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Products',
      timestamps: false,
    };
  }
}

module.exports = { PRODUCTS_TABLE, ProductsSchema, Products };
