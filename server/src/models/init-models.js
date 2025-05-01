import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _Clients from "./clients.js";

import { dbConfig } from "../config/db.config.js"




export const initModels = (sequelize) => {
  const Clients = _Clients.init(sequelize, DataTypes);

  return {
    Clients,
  };
}

export const models = initModels(dbConfig);