import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  name: string;
  speed: number;
  model: string;
  colors: Colors;
  options: string[];
  isEdit: boolean;

  constructor() { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.name = 'Audi';
    this.speed = 260;
    this.model = 'RS8';
    this.colors = {
      car: 'While',
      salon: 'Red',
      wheels: 'Silver',
    };
    this.options = ['Abs', 'Autopilots', 'Auto_Parking'];
  }

  showEdit() {
    this.isEdit = !this.isEdit;
  }

  // tslint:disable-next-line:typedef
  addOpt(option) {
    this.options.unshift(option);
    return false;
  }

  // tslint:disable-next-line:typedef
  deleteOpt(option) {
    for (let i = 0; i <this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
        break;
      }
    }
  }

  // tslint:disable-next-line:typedef
  carName(carName) {
    if (carName == 'mercedes') {
      this.name = 'Mercedes';
      this.speed = 320;
      this.model = 'S600';
      this.colors = {
        car: 'Black',
        salon: 'White',
        wheels: 'Black',
      };
      this.options = ['Abs', 'Asr', 'Climate_Control', 'Autopilots', 'Auto_Parking'];
    } else if (carName == 'audi') {
      this.name = 'Audi';
      this.speed = 260;
      this.model = 'RS8';
      this.colors = {
        car: 'While',
        salon: 'Red',
        wheels: 'Silver',
      };
      this.options = ['Abs', 'Autopilots', 'Auto_Parking'];
      // tslint:disable-next-line:triple-equals
    } else if (carName == 'bmw') {
      this.name = 'Bmw';
      this.speed = 360;
      this.model = 'M8';
      this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'White',
      };
      this.options = ['Abs', 'Autopilots', 'Auto_Parking'];
    } else {
      this.name = 'Porsche';
      this.speed = 380;
      this.model = 'Panamera';
      this.colors = {
        car: 'Black',
        salon: 'White',
        wheels: 'Orange',
      };
      this.options = ['Abs', 'Autopilots', 'Auto_Parking', 'Cruise control', 'Electric parking brake'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
