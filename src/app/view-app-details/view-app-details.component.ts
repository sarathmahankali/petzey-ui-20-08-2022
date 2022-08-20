import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppointmentBasicDetails } from '../Models/AppointmentBasicDetails';
import { Prescription } from '../Models/Prescription.model';
import { Symptom } from '../Models/Symptom.Model';
import { Test } from '../Models/Test.model';
import { ViewDetailsService } from '../view-details/viewdetails.service';

@Component({
  selector: 'app-view-app-details',
  templateUrl: './view-app-details.component.html',
  styleUrls: ['./view-app-details.component.scss']
})
export class ViewAppDetailsComponent implements OnInit {

  DisplayDropDown:string="d-none";
  DisableDropDown:string="d-flex";


  thenBlock: TemplateRef<any>|null = null;
  show = true;
  ids:any;
  appointmentDetails:any;
  appointment:AppointmentBasicDetails;
  petDetails:any;
  Symptoms:Symptom[];
  Tests:Test[];
  PrescriptionDetails:Prescription;
  SymptomForm:FormGroup;
  TestForm:FormGroup;
  appointmentDetailsForm:FormGroup;
  PrescriptionDetailsForm:FormGroup;
  


  constructor(private fb:FormBuilder, private router:Router, private service:ViewDetailsService) { 
    this.ids = this.router.getCurrentNavigation().extras.state['ids']
    console.log(this.ids);
  }
  @ViewChild('primaryBlock', {static: true}) primaryBlock: TemplateRef<any>|null = null;
    @ViewChild('secondaryBlock', {static: true}) secondaryBlock: TemplateRef<any>|null = null;
  
    switchPrimary() {
      this.thenBlock = this.thenBlock === this.primaryBlock ? this.secondaryBlock : this.primaryBlock;
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
      console.log(res);
    })
    this.service.getPetDetails(this.ids.petId).subscribe(res=>{
      this.petDetails = res;
      console.log(res);
    })
    this.service.getAllSymptoms().subscribe({
      next: (res: any) => {
        this.Symptoms = res;
        console.log(this.Symptoms);
      },
      error: (err) => console.log(err),
    });
    this.thenBlock = this.primaryBlock;
  }
  
  OnClick(){
    this.DisplayDropDown = "d-flex";
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
      