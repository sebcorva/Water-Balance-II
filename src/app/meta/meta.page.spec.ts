import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaPage } from './meta.page';
import { CommonModule } from '@angular/common';

describe('MetaPage', () => {
  let component: MetaPage;
  let fixture: ComponentFixture<MetaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], 
      declarations: [MetaPage]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
