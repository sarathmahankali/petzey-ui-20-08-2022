import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  getAllParent() {
    const url = 'https://localhost:44357/api/pet/parents/getAll';
    return this.http.get(url);
  }
  getAllPetsByParent(ownerId: number) {
    const url = `https://localhost:44357/api/pet/getPetParentDetails/${ownerId}`;
    return this.http.get(url);
  }

  createAppointment(data: any) {
    const url = 'https://localhost:44398/api/appointments/create';
    return this.http.post(url, data);
  }
}
