import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'street-light-theam',
  templateUrl: './theam.component.html',
  styleUrls: ['./theam.component.css']
})
export class TheamComponent implements OnInit {
  themeNames: any;
  theamObject: { id: number; name: string; isSelected: boolean; }[];

  constructor(private master:MasterService) {
    this.theamChange();
    console.log("Component constructore.");
   }

  ngOnInit(): void {
    console.log("Component onInit.");
  //   this.theamObject=[
  //     {
  //         "id": 1,
  //         "name": "Empyreal",
  //         "isSelected": true
  //     }
  // ]
    this.theamChange();
   
  }
  theamChange() {
    this.master.getThemeNames().subscribe(dataSource => {
      this.themeNames = dataSource;
      sessionStorage.setItem('theamName',JSON.stringify(this.themeNames));
    });
  }

  
 
}
