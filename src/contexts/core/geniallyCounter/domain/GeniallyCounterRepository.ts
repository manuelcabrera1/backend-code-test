import GeniallyCounter from "./GeniallyCounter";

export default interface GeniallyCounterRepository {
    save(geniallyCounter: GeniallyCounter): Promise<void>;
    find(): Promise<GeniallyCounter | undefined>;
}