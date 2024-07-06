import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IngresoPage } from './ingreso.page';
import { CommonModule } from '@angular/common';

describe('IngresoPage', () => {
  let component: IngresoPage;
  let fixture: ComponentFixture<IngresoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], 
      declarations: [IngresoPage]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
