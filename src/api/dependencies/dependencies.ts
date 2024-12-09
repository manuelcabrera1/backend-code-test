import InMemoryGeniallyRepository from "../../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";
import MongoGeniallyRepository from "../../contexts/core/genially/infrastructure/persistence/mongo/MongoGeniallyRepository";
import InMemoryCounterRepository from "../../contexts/core/geniallyCounter/infrastructure/InMemoryCounterRepository";
import MongoGeniallyCounterRepository from "../../contexts/core/geniallyCounter/infrastructure/persistence/mongo/MongoGeniallyCounterRepository";


export const geniallyRepository = process.env.MONGODB_URI
  ? new MongoGeniallyRepository()
  : new InMemoryGeniallyRepository();

export const counterRepository = process.env.MONGODB_URI
  ? new MongoGeniallyCounterRepository()
  : new InMemoryCounterRepository();