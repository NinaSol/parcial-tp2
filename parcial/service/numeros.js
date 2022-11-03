import config from "../config.js";
import NumberFactoryDAO from "../model/DAO/numberFactory.js";

class NumbersService {
  constructor() {
    this.numbersDAO = NumberFactoryDAO.get(config.DB);
  }

  addNumber = async (number) => {
    return await this.numbersDAO.addNumber(number);
  };

  getAllNumbers = async () => {
    return await this.numbersDAO.getAllNumbers();
  };

  getAverage = async () => {
    return await this.numbersDAO.getAverage();
  };

  getMinMax = async () => {
    return await this.numbersDAO.getMinMax();
  };
  getTotalNumbers = async () => {
    return await this.numbersDAO.getTotalNumbers();
  };
}

export default NumbersService;
