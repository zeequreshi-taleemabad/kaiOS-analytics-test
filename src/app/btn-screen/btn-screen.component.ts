import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-btn-screen',
  templateUrl: './btn-screen.component.html',
  styleUrls: ['./btn-screen.component.css']
})
export class BtnScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['/video']);
  }

}
