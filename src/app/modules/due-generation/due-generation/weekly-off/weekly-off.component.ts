import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weekly-off',
  templateUrl: './weekly-off.component.html',
  styleUrls: ['./weekly-off.component.css']
})
export class WeeklyOffComponent implements OnInit {
  public days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  selectedDays: any = [];
  constructor() {
  }

  ngOnInit() {
  }
  chkControl(j) {
    // var total=0;
    // for(var i=0; i < document.form1.ckb.length; i++){
    // if(document.form1.ckb[i].checked){
    // total =total +1;}
    // if(total > 2){
    // alert("Please Select only two")
    // document.form1.ckb[j].checked = false ;
    // return false;
    // }
    // }
  }
  onCheckboxChange(event, value) {

    if (event.target.checked) {
      console.log(value, 'value')
      this.selectedDays.push(value);
    }
    else if (!event.target.checked) {

      let index = this.selectedDays.indexOf(value);

      if (index > -1) {

        this.selectedDays.splice(index, 1);
      }
    }
    console.log(this.selectedDays, 'this.selectedDays')
  }
  onSubmitWeeklyOff() {
    localStorage.setItem('weekOffs', JSON.stringify(this.selectedDays));
    alert('data submitted');

  }
}

