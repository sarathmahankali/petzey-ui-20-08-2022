import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Vet } from '../Models/appointmentVet.model';
import { AppointmentBasicDetails } from '../Models/AppointmentBasicDetails';
import { Symptom } from '../Models/Symptom.Model';
@Injectable({
    providedIn: 'root',
  })
  export class ViewDetailsService {
    constructor(private http: HttpClient) {}

    getVetprofile(id) {
        var veturl = environment.vetURL;
        return this.http.get(`${veturl}api/doctors/doctorprofile/${id}`).pipe(
          map((d) => {
            var doctor = d;
            console.log(doctor);
            return doctor;
          })
        );
      }

      getVetDetails(vetId){
        var veturl = environment.vetURL;
        return this.http.get(`${veturl}api/Vet/GetVetProfileDetails/${vetId}`)
      }

      getPetDetails(petParentId){
        var peturl = environment.petURL;
        return this.http.get(`${peturl}api/pet/getPetsandPetParent/${petParentId}`)
      }

    getAllAppointmentDetails(id){
        var ConsultationURl = environment.ConsultationMockURL;
        return this.http.get(`${ConsultationURl}api/appointments/getallDetails/${id}`)
    }
    getAllSymptoms(){
      return this.http.get( `${environment.ConsultationMockURL}api/appointments/getAllSymptom`)
    }
    getAllTests(){
      return this.http.get(`${environment.ConsultationMockURL}api/appointments/getAllTests`)
    }

    AddSymptomByAppointmentId(symptom){
      return this.http.put(`${environment.ConsultationMockURL}api/appointments/AddSymptom/${symptom.appointmentId}`,symptom)
    }
    AddTestByAppointmentId(Test){
      return this.http.put(`${environment.ConsultationMockURL}api/appointments/AddTest/${Test.appointmentId}`,Test)
    }
    GetVitals(){
      return this.http.get(`${environment.ConsultationMockURL}api`)
    }
    
}