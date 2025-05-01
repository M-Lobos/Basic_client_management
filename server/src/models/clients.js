import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class Clients extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: "clients_email_key"
    },
    job: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    rate: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 100.00
    },
    isactive: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'clients',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "clients_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "clients_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
