import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewAnalyzerComponent } from './review-analyzer.component';

describe('ReviewAnalyzerComponent', () => {
  let component: ReviewAnalyzerComponent;
  let fixture: ComponentFixture<ReviewAnalyzerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewAnalyzerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewAnalyzerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
