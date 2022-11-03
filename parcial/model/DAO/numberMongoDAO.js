import CnxMongoDB from "../cnxMongoDB.js";

class NumberMongoDAO {
  addNumber = async (number) => {
    if (!CnxMongoDB.connection) return {};

    try {
      let addedNumber = await CnxMongoDB.db
        .collection("numeros")
        .insertOne(number);
      return addedNumber;
    } catch {
      return [];
    }
  };

  getAllNumbers = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let numbers = await CnxMongoDB.db
        .collection("numeros")
        .find({})
        .toArray();

      let arrNums = [];

      numbers.forEach((num) => arrNums.push(num.numero));

      return { numeros: arrNums };
    } catch {
      return [];
    }
  };

  getAverage = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let numbers = await CnxMongoDB.db
        .collection("numeros")
        .find({})
        .toArray();

      let arrNums = [];

      numbers.forEach((num) => arrNums.push(num.numero));

      let average = arrNums.reduce((a, b) => a + b, 0) / arrNums.length;

      return { promedio: average };
    } catch {
      return [];
    }
  };

  getMinMax = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let numbers = await CnxMongoDB.db
        .collection("numeros")
        .find({})
        .toArray();

      let arrNums = [];

      numbers.forEach((num) => arrNums.push(num.numero));

      const max = Math.max(...arrNums);

      const min = Math.min(...arrNums);

      return { min, max };
    } catch {
      return [];
    }
  };

  getTotalNumbers = async () => {
    if (!CnxMongoDB.connection) return [];
    try {
      let numbers = await CnxMongoDB.db
        .collection("numeros")
        .find({})
        .toArray();

      return { cantidad: numbers.length };
    } catch {
      return [];
    }
  };
}

export default NumberMongoDAO;
