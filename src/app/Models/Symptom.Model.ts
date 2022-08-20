export class Symptom{
    Id:number;
    Name:string;
    AppointmentId:number;
    constructor(
        Id:number,
        Name:string,
        AppointmentId:number,
    ){
        this.Id = Id;
        this.Name = Name;
        this.AppointmentId = AppointmentId;
    }

}