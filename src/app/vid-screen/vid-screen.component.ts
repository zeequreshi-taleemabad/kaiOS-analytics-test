import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vid-screen',
  templateUrl: './vid-screen.component.html',
  styleUrls: ['./vid-screen.component.css']
})
export class VidScreenComponent implements OnInit {

  videoStr = 'http://175.107.197.227/TaleemabadKaiOS/Grade1/English/Grade1EnglishAdjectivesAdjectives.mp4';

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.router.navigate(['']);
  }

}
