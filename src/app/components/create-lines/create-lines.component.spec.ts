import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLinesComponent } from './create-lines.component';

describe('CreateLinesComponent', () => {
  let component: CreateLinesComponent;
  let fixture: ComponentFixture<CreateLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
