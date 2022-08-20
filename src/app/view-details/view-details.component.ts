import { isDataSource } from '@angular/cdk/collections';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentBasicDetails } from '../Models/AppointmentBasicDetails';
import { AppointmentCard } from '../Models/appointmentCardModel';
import { Prescription } from '../Models/Prescription.model';
import { Symptom } from '../Models/Symptom.Model';
import { Test } from '../Models/Test.model';
import { ViewDetailsService } from './viewdetails.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {
  SelectedVal:string;
  DisplayDropDown:string = "d-none";
  DisplayTestDropDown:string = "d-none";
  ids:any;
  appointmentDetails:any;
  appointment:AppointmentBasicDetails;
  petDetails:any;
  vetDetails:any;
  Symptoms:Symptom[];
  SymptomName=new Set();
  Tests:Test[];
  TestName=new Set();
  PrescriptionDetails:Prescription;
  SymptomForm:FormGroup;
  TestForm:FormGroup;
  appointmentDetailsForm:FormGroup;
  PrescriptionDetailsForm:FormGroup;
  displaySymptom:string = "d-none";
  displayTest:string="d-none";
  


  constructor(private fb:FormBuilder, private router:Router, private service:ViewDetailsService) { 
    this.ids = this.router.getCurrentNavigation().extras.state['ids']
    console.log(this.ids);
  }
  
  
  ngOnInit(): void {

    this.appointmentDetailsForm = this.fb.group({
      Prescription: new FormControl(),
      Medicine: new FormControl(),
      issue: new FormControl(),
      reason: new FormControl(),
      pet: new FormControl(),
      Test:new FormControl(),
      Symptom:new FormControl(),
      parent: new FormControl(null, Validators.required),
      vet: new FormControl(),
    });
    this.SymptomForm = this.fb.group({
      Symptom: new FormControl(),      
    })

    console.log(this.Symptoms)

    this.service.getAllAppointmentDetails(this.ids.appointmentId).subscribe(res =>{
     this.appointmentDetails = res
      console.log(this.appointmentDetails);
    })
    this.service.getPetDetails(this.ids.petId).subscribe(res=>{
      this.petDetails = res;
      console.log(res);
    })
    this.service.getVetDetails(this.ids.vetId).subscribe(res=>{
      this.vetDetails = res;
      console.log(this.vetDetails);
    })
    this.service.getAllSymptoms().subscribe({
      next: (res: any) => {
        this.Symptoms = res;
        console.log(this.Symptoms);
      },
      error: (err) => console.log(err),
    })
    this.service.getAllTests().subscribe({
      next:(res:any)=>{
        this.Tests = res;
      },
      error:(err)=>console.log(err)
    });



  }
 
  Navigate(){
    this.router.navigate(['dashboard', 'allAppointment']);
  }
  DisplaySymptom(symptom){
    this.SymptomName.add(symptom);
    console.log(symptom);
    console.log(this.SymptomName);
  }
  DisplayTest(test){
    this.TestName.add(test);
  }

  submit() {
    this.displaySymptom = "d-flex"; 
    this.DisplayDropDown = "d-none";
  }
  submitTest(){
    this.displayTest = "d-flex";
    this.DisplayTestDropDown = "d-none"
  }
  OnClick(){
    this.DisplayDropDown = "d-flex";
    this.displaySymptom = "d-none";
  }
  OnClickTest(){
    this.DisplayTestDropDown = "d-flex";
    this.displayTest = "d-none";
  }
  getAllTests(){
    this.service.getAllTests().subscribe({
      next: (res: Test[]) => {
        this.Tests = res;
        console.log(this.Tests);
      },
      error: (err) => console.log(err),
    });
  }

  getAllSymptoms(){
    this.service.getAllSymptoms().subscribe({
      next: (res: Symptom[]) => {
        this.Symptoms = res;
        console.log(this.Symptoms);
      },
      error: (err) => console.log(err),
    });
  }
    
  displayFnSymptom(symptom: Symptom) {
    return symptom && symptom.Name ? symptom.Name : '';
  }

  submitSymptomForm() {
    console.log(this.SymptomForm.value);
    this.service.AddSymptomByAppointmentId(this.SymptomForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => console.log(err),
    });
  } 
  submitTestForm(){
    console.log(this.TestForm.value);
    this.service.AddTestByAppointmentId(this.TestForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error:(err) =>console.log(err),
    })
  }



  displayFnTest(test: Test) {
    return test && test.Name ? test.Name : '';
  }
  
  
 
}
      
    


