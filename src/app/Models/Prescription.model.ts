import { Medicine } from "./Medicine.model";

export class Prescription{
    id:Prescription;
    medicine:Medicine[];
    constructor(
        id:Prescription,
        medicine:Medicine[],
    )
    {
        this.id = id;
        this.medicine = medicine;
    }
}