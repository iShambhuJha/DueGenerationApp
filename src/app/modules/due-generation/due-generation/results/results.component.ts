import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  public dateRange: any = [];
  public weekOffDays: any = [];
  public dueDateDaily: any = [];
  public dueDateWeekly: any = [];
  public dueDateMonthly: any = [];
  public dueDateMonthlyRandom: any = [];
  public dueDateWeeklyRandom: any = [];

  constructor() { }

  ngOnInit() {
    const weekday = new Array(7);
    weekday[0] = 'Sunday';
    weekday[1] = 'Monday';
    weekday[2] = 'Tuesday';
    weekday[3] = 'Wednesday';
    weekday[4] = 'Thursday';
    weekday[5] = 'Friday';
    weekday[6] = 'Saturday';
    this.dateRange = JSON.parse(localStorage.getItem('dateRange'));
    this.dueDateDaily = JSON.parse(localStorage.getItem('dueDateDaily'));
    this.dueDateWeekly = JSON.parse(localStorage.getItem('dueDateWeekly'));
    this.dueDateMonthly = JSON.parse(localStorage.getItem('dueDateMonthly'));
    this.dueDateMonthlyRandom = JSON.parse(localStorage.getItem('randomDatesMonthly'));
    this.dueDateWeeklyRandom = JSON.parse(localStorage.getItem('randomDatesWeekly'));
    JSON.parse(localStorage.getItem('weekOffs')).map(ele => {
      this.weekOffDays.push(weekday[ele]);
    })
    console.log(this.weekOffDays, 'this.weekOffDays')
  }

}
