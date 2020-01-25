import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { addDays } from '@progress/kendo-date-math';
import { startEndDate } from '../../../../core/model/startEndDate.model';

@Component({
  selector: 'app-start-end-date',
  templateUrl: './start-end-date.component.html',
  styleUrls: ['./start-end-date.component.css']
})
export class StartEndDateComponent implements OnInit {
  public valueStart: Date = new Date();
  public valueEnd: Date;
  public minDate: Date = new Date();
  public autoCorrect = true;
  public min = 1;
  public max = 100;
  public valueNum = 10;
  startEndDateForm: FormGroup;
  public endDate: Date;
  dateData: startEndDate = new startEndDate();
  radioValue: any;
  constructor() {
    localStorage.clear();
  }

  ngOnInit() {
    this.startEndDateForm = new FormGroup({
      startsFrom: new FormControl(this.valueStart),
      endsBy: new FormControl(),
      endsAfter: new FormControl(this.valueNum),
    });
    this.endDate = addDays(this.startEndDateForm.get('startsFrom').value, parseInt(this.startEndDateForm.get('endsAfter').value));
  }
  // Change function to be called on radio button change
  onChange(evt) {
    console.log(evt);
    this.radioValue = evt;
  }
  // on form submission
  onStartEndSubmit(): void {
    if (this.radioValue === 'endsBy') {
      this.endDate = this.startEndDateForm.get('endsBy').value.toString();
    } else {
      this.endDate = addDays(this.startEndDateForm.get('startsFrom').value, parseInt(this.startEndDateForm.get('endsAfter').value));
    }
    this.dateData.startDate = this.startEndDateForm.get('startsFrom').value.toString();
    this.dateData.endDate = this.endDate;
    localStorage.setItem('dateRange', JSON.stringify(this.dateData));
    alert('data submitted');
  }
}
