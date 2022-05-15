import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-tp5',
  templateUrl: './tp5.component.html',
  styleUrls: ['./tp5.component.css']
})
export class TP5Component implements OnInit {

  formData: any = {};

  affichageMessage: boolean = false;

  username: any = {};

  email: any = {};

  password: any = {};

  formData1: any = {};

  affichageMessage1: boolean = false;

  username1 = new FormControl ('',[Validators.required, Validators.minLength(5)]);

  password1 = new FormControl ('',[Validators.required, this.hasExclamationMark]);

  loginForm: FormGroup = this.builder.group({

    username1: this.username1,

    password1: this.password1

  });

  constructor(private builder: FormBuilder) { }

  ngOnInit(): void {}

  enregistrerUtilisateur(formdata: NgForm) {

    this.formData = formdata.value;

    this.affichageMessage = true;

  }

  enregistrerUtilisateur1() {

    this.formData1 = this.loginForm.value;

    this.affichageMessage1 = true;

  }

  hasExclamationMark(input: FormControl) {

    const hasExclamation = input.value.indexOf('!') >= 0;

    return hasExclamation ? null : { needsExclamation: true };

  }

}
