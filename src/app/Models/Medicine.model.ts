export class Medicine{
    MedicineId:number;
    PrescriptionId:number;
    MedicineName:string;
    Days:string;
    Intake:string;
    TimeOfDay:string;
    AdditionalComments:string;
    constructor(
        MedicineId:number,
    PrescriptionId:number,
    MedicineName:string,
    Days:string,
    Intake:string,
    TimeOfDay:string,
    AdditionalComments:string,
    )
    {
        this.PrescriptionId= PrescriptionId;
        this.MedicineId = MedicineId;
        this.MedicineName = MedicineName;
        this.Intake = Intake;
        this.AdditionalComments = AdditionalComments;
        this.Days = Days;
        this.TimeOfDay = TimeOfDay;
    }
}