import { Injectable } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Injectable({
    providedIn:'root'
})
export class ReceptionistService{
    constructor(){}
    form:FormGroup = new FormGroup({
        $key:new FormControl(null),
        fullname:new FormControl(''),
        mobile:new FormControl(''),
        Title:new FormControl('1'),
        Location:new FormControl('')

        });
    
}