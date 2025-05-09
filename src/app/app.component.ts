import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pw-app';

  images = [
    {
      imageSrc: 'assets/img/codingCyrus.jpeg',
      imageAlt: 'Cyrus coding on a mac',
    },
    {
      imageSrc: 'assets/img/ielts-trf.png',
      imageAlt: 'IELTS TRF',
    },
    {
      imageSrc: 'assets/img/ITTCNoFrameCS.jpg',
      imageAlt: 'ITTC Certificate',
    },
    {
      imageSrc: 'assets/img/networkplus.png',
      imageAlt: 'Netplus Certificate',
    },
  ];
}
