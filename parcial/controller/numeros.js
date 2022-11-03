import NumbersService from "../service/numeros.js";

class NumbersController {
  constructor() {
    this.numbersService = new NumbersService();
  }

  addNumber = async (req, res) => {
    const number = req.body;
    res.json(await this.numbersService.addNumber(number));
  };

  getAllNumbers = async (req, res) => {
    res.json(await this.numbersService.getAllNumbers());
  };

  getAverage = async (req, res) => {
    res.json(await this.numbersService.getAverage());
  };

  getMinMax = async (req, res) => {
    res.json(await this.numbersService.getMinMax());
  };

  getTotalNumbers = async (req, res) => {
    res.json(await this.numbersService.getTotalNumbers());
  };
}

export default NumbersController;
