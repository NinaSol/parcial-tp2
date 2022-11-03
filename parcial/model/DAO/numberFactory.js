import NumberMongoDAO from "./numberMongoDAO.js";

class NumberFactoryDAO {
  static get(tipo) {
    switch (tipo) {
      case "MONGO":
        return new NumberMongoDAO();

      default:
        return new NumberMongoDAO();
    }
  }
}

export default NumberFactoryDAO;
