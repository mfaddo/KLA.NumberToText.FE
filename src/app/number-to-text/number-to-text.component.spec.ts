import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberToTextComponent } from './number-to-text.component';

describe('NumberToTextComponent', () => {
  let component: NumberToTextComponent;
  let fixture: ComponentFixture<NumberToTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberToTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberToTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
