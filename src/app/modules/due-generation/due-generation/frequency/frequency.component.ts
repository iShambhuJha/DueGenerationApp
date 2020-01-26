import { Component, OnInit } from "@angular/core";
import { addDays, addMonths } from "@progress/kendo-date-math";
@Component({
  selector: "app-frequency",
  templateUrl: "./frequency.component.html",
  styleUrls: ["./frequency.component.css"]
})
export class FrequencyComponent implements OnInit {
  public days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday"
  ];
  public months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec"
  ];
  dayDif: any;
  dueDateDaily: any = [];
  weekOff: any = [];
  selectedDays: any = [];
  dueDateWeekly: any = [];
  dueDateMonthly: any = [];
  selectedOption: any;
  randomDatesWeekly: any = [];
  randomDatesMonthly: any = [];
  constructor() {}

  ngOnInit() {}
  onCheckboxChange(event, value) {
    if (event.target.checked) {
      this.selectedDays.push(value);
    } else if (!event.target.checked) {
      const index = this.selectedDays.indexOf(value);

      if (index > -1) {
        this.selectedDays.splice(index, 1);
      }
    }
  }
  // To generate due date based on user selection (daily/ weekly/ monthly/ randomly)
  generateDueDates(value: string) {
    this.weekOff = JSON.parse(localStorage.getItem("weekOffs"));
    var jsonDate = JSON.parse(localStorage.getItem("dateRange"));
    var startDay = new Date(jsonDate.startDate);
    var endDay = new Date(jsonDate.endDate);
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    this.dayDif =
    Math.abs(startDay.getTime() - endDay.getTime()) / 1000 / 60 / 60 / 24;
    for (let i = 0; i <= this.dayDif; i++) {
      this.dueDateDaily.push(addDays(startDay, i));
    }
    if (value == "daily") { // daily due date generation
      this.dueDateDaily.map(ele => {
        if (
          ele.getDay() == this.weekOff[0] ||
          ele.getDay() == this.weekOff[1]
        ) {
          const index = this.dueDateDaily.indexOf(ele);
          this.dueDateDaily.splice(index, 1);
        }
      });
      localStorage.setItem("dueDateDaily", JSON.stringify(this.dueDateDaily));
      alert("data submitted");

    } else if (value == "weekly") { // weekly due date generation
      this.dueDateDaily.map(ele => {
        this.selectedDays.map(day => {
          if (
            ele.getDay() == day &&
            ele.getDay() != this.weekOff[0] &&
            ele.getDay() != this.weekOff[1]
          ) {
            this.dueDateWeekly.push(ele);
          } else {
            return;
          }
        });
      });
      localStorage.setItem("dueDateWeekly", JSON.stringify(this.dueDateWeekly));
      alert("data submitted");

    } else if (value == "monthly") { // monthly due date generation
      this.selectedDays.map(ele => {
        this.dueDateMonthly.push(addMonths(startDay, ele));
      });
      localStorage.setItem(
        "dueDateMonthly",
        JSON.stringify(this.dueDateMonthly)
      );
      alert("data submitted");

    } else if (value == "random") { // random due date generation
      if (this.selectedOption == "weekly") { // random(weekly) due date generation
        this.dayDif /= 7;
        var noOfWeek = Math.floor(this.dayDif);
        for (let i = 0; i < noOfWeek; i++) {
          endDay = addDays(startDay, 7);
          for (let step = 0; step < 2; step++) {
            this.randomDatesWeekly.push(
              new Date(
                startDay.getTime() +
                  Math.random() * (endDay.getTime() - startDay.getTime())
              )
            );
          }
          startDay = endDay;
        }
        localStorage.setItem(
          "randomDatesWeekly",
          JSON.stringify(this.randomDatesWeekly)
        );
        alert("data submitted");

      } else { // random(monthly) due date generation
        this.dayDif /= 30;
        var noOfMonth = Math.floor(this.dayDif);
        for (let i = 0; i < noOfMonth; i++) {
          endDay = addDays(startDay, 30);
          for (let step = 0; step < 6; step++) {
            this.randomDatesMonthly.push(
              new Date(
                startDay.getTime() +
                  Math.random() * (endDay.getTime() - startDay.getTime())
              )
            );
          }
          startDay = endDay;
        }
        localStorage.setItem(
          "randomDatesMonthly",
          JSON.stringify(this.randomDatesMonthly)
        );
        alert("data submitted");
      }
    }
  }
  // On change radio selection for random due generation
  onRandomChange(data) {
    this.selectedOption = data;
  }
}
