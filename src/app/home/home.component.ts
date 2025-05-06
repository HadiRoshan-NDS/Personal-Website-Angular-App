import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}
  title = 'pw-app';

  navigateToHome() {
    this.router.navigate(['']);
  }
  navigateToAbout() {
    this.router.navigate(['about']);
  }
  navigateToContact() {
    this.router.navigate(['contact']);
  }
  navigateToResume() {
    this.router.navigate(['resume']);
  }
  navigateToSkills() {
    this.router.navigate(['skills-certificates']);
  }

  ngOnInit(): void {}
}
