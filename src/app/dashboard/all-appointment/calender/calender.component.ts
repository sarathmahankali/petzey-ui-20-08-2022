import { formatDate } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.scss'],
})
export class CalenderComponent implements OnInit {
  startDate: FormControl;
  endDate: FormControl;
  selectStartDate = true;
  validDateRange: boolean = false;
  constructor(private dialogRef: MatDialogRef<CalenderComponent>) {
    this.startDate = new FormControl();
    this.endDate = new FormControl();
  }

  ngOnInit(): void {}

  updateDate($event) {
    this.selectStartDate
      ? this.startDate.setValue(formatDate($event, 'yyyy-MM-dd', 'en-US'))
      : this.endDate.setValue(formatDate($event, 'yyyy-MM-dd', 'en-US'));
    this.selectStartDate = !this.selectStartDate;

    if (
      this.startDate.value === null ||
      this.startDate.value === undefined ||
      this.endDate.value === null ||
      this.endDate.value === undefined ||
      this.startDate.value > this.endDate.value
    ) {
      this.validDateRange = false;
    } else {
      this.validDateRange = true;
    }
  }

  applyChanges() {
    this.dialogRef.close({
      dates: {
        startDate: this.startDate.value,
        endDate: this.endDate.value,
      },
    });
  }

  cancel() {
    this.dialogRef.close();
  }
}
