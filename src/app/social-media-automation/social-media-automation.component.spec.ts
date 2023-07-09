import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaAutomationComponent } from './social-media-automation.component';

describe('SocialMediaAutomationComponent', () => {
  let component: SocialMediaAutomationComponent;
  let fixture: ComponentFixture<SocialMediaAutomationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialMediaAutomationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialMediaAutomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
