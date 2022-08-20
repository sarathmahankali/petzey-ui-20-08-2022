import { Component, OnInit } from '@angular/core';
declare var window:any;
@Component({
  selector: 'app-petparent-profile',
  templateUrl: './petparent-profile.component.html',
  styleUrls: ['./petparent-profile.component.scss']
})
export class PetparentProfileComponent implements OnInit {

  formModal:any;
  constructor() { }

  ngOnInit(): void {
    this.formModal = new window.bootstrap.Modal(
      document.getElementById("myModal")
    );
    }
  openmodal(){
    this.formModal.show();
  }
  closemodel(){
    this.formModal.hide();
  }
  SaveChanges(){
    this.formModal.hide();
  }
}
