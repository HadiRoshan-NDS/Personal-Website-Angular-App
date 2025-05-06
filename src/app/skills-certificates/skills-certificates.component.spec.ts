import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCertificatesComponent } from './skills-certificates.component';

describe('SkillsCertificatesComponent', () => {
  let component: SkillsCertificatesComponent;
  let fixture: ComponentFixture<SkillsCertificatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsCertificatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCertificatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
