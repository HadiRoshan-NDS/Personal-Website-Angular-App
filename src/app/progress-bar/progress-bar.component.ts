import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @ViewChild('progressBar') progressBar!: ElementRef;

  sections = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' },
    { id: 'skills-certificates', name: 'Skills and Certificates' },
    { id: 'resume', name: 'Resume' },
  ];
  activeSection: string = this.sections[0].id;

  @HostListener('window:scroll', ['$event'])
  updateProgressBar() {
    // Update progress bar height
    const scrollTotal = document.body.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollTotal) * 100;
    this.progressBar.nativeElement.style.height = `${progress}%`;

    // Update active section
    this.sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          this.activeSection = section.id;
        }
      }
    });
  }

  scrollTo(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
