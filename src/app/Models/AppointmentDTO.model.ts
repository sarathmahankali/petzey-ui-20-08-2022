import { Time } from "@angular/common";
import { Medicine } from "./Medicine.model";
import { Prescription } from "./Prescription.model";
import { Symptom } from "./Symptom.Model";
import { Test } from "./Test.model";
import { Vitals } from "./Vitals.model";

export class AppointmentDTO{
    appointmentId:number;
    appointmentDate:Date;
    appointmentTime:Time;
    PetIssues:string;
    Reason:string;
    prescription:Prescription;
    symptom:Symptom[];
    vitals:Vitals;
    tests:Test[];


    constructor(
        appointmentID:number,
        appointmentDate:Date,
        appointmentTime:Time,
        PetIssues:string,
        Reason:string,
        prescription:Prescription,
        symptom:Symptom[],
        vitals:Vitals,
        tests:Test[],
        )
    {
        this.appointmentDate = appointmentDate,
        this.appointmentId = appointmentID,
        this.appointmentTime = appointmentTime,
        this.PetIssues = PetIssues,
        this.Reason = Reason,
      
        this.prescription = prescription,
        this.symptom = symptom,
        this.tests = tests,
        this.vitals = vitals;
    }      
}
        