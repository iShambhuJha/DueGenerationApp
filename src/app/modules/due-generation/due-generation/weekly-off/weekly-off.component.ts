import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weekly-off',
  templateUrl: './weekly-off.component.html',
  styleUrls: ['./weekly-off.component.css']
})
export class WeeklyOffComponent implements OnInit {
  public days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  selectedDays: any = [];
  form1: Document = new Document();
  counter: number = 0;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }
  //limiting user to select to 1 or 2  checkboxes
   chkcontrol(j) {
    var total=0;
    for(var i=0; i < document.forms.form1.ckb.length; i++){
    if(document.forms.form1.ckb[i].checked){
    total =total +1;}
    if(total > 2){
    alert("Please Select only two")
    document.forms.form1.ckb[j].checked = false ;
    return false;
    }
    }
    }
  // to be called once user select/deselect days of a week
  onCheckboxChange(event, value) {

    if (event.target.checked) {
      this.selectedDays.push(value);
    }
    else if (!event.target.checked) {

      let index = this.selectedDays.indexOf(value);

      if (index > -1) {

        this.selectedDays.splice(index, 1);
      }
    }
  }
  // on submission of weekly off days
  onSubmitWeeklyOff() {
    localStorage.setItem('weekOffs', JSON.stringify(this.selectedDays));
    alert('data submitted');
    this.router.navigate(['due-generation/frequency']);

  }
}

