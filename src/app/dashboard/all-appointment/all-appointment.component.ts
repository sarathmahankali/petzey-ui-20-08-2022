import { formatDate } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/Services/header.service';
import { SideBarService } from 'src/app/Services/sidebar.service';
import { CalenderComponent } from './calender/calender.component';

@Component({
  selector: 'all-appointments',
  templateUrl: './all-appointment.component.html',
  styleUrls: ['./all-appointment.component.scss'],
})
export class AllAppointmentComponent implements OnInit {
  currentStatus: string = 'All';
  startDate: string = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
  endDate: string = formatDate(Date.now(), 'yyyy-MM-dd', 'en-US');
  filters: any = {
    status: this.currentStatus,
    startDate: formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'),
    endDate: formatDate(Date.now(), 'yyyy-MM-dd', 'en-US'),
  };
  showGrid: boolean = true;
  role: string = 'vet';

  constructor(private router: Router, private dialog: MatDialog, public header:HeaderService,public side:SideBarService) {}

  ngOnInit(): void {
    this.side.showsidebar();
    this.header.showheader();
  }

  SelectChange(event) {
    this.filters = {
      status: event.target.value,
      startDate: this.startDate,
      endDate: this.endDate,
    };
  }
  newAppointment() {
    this.router.navigate(['dashboard','addAppointmentForDoctor']);
  }
  openCalenderDialog() {
    var dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '300px';

    var dialogRef = this.dialog.open(CalenderComponent, dialogConfig);

    dialogRef.afterClosed().subscribe({
      next: (data: any) => {
        this.filters = {
          status: this.currentStatus,
          startDate: data.dates.startDate,
          endDate: data.dates.endDate,
        };
        this.startDate = data.dates.startDate;
        this.endDate = data.dates.endDate;
      },
    });
  }
}
