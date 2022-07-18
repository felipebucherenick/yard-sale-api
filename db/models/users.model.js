const { Model, DataTypes } = require('sequelize');

const USERS_TABLE = 'users';

const UsersSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  userName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'user_name',
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  role: {
    allowNull: false,
    type: DataTypes.STRING,
    defaultValue: 'customer',
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'created_at',
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'updated_at',
    defaultValue: DataTypes.NOW,
  },
};

class Users extends Model {
  static associate() {
    //...
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: USERS_TABLE,
      modelName: 'Users',
      timestamps: false,
    };
  }
}

module.exports = {
  USERS_TABLE,
  UsersSchema,
  Users,
};
