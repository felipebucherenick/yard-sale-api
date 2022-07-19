const { Model, DataTypes } = require('sequelize');

const CUSTOMERS_TABLE = 'customers';

const CustomersSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  firstName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'first_name',
  },
  lastName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'last_name',
  },
  address: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'phone_number',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
  },
};

class Customers extends Model {
  static associate() {
    //...
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: CUSTOMERS_TABLE,
      modelName: 'Customers',
      timestamps: false,
    };
  }
}

module.exports = { CUSTOMERS_TABLE, CustomersSchema, Customers };
