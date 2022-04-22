import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    formulario!: FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });
  }

}
