import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsejosPage } from './consejos.page';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ConsejosPage', () => {
  let component: ConsejosPage;
  let fixture: ComponentFixture<ConsejosPage>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
    });
    fixture = TestBed.createComponent(ConsejosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
