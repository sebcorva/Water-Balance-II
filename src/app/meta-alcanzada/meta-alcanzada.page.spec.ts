import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MetaAlcanzadaPage } from './meta-alcanzada.page';

describe('MetaAlcanzadaPage', () => {
  let component: MetaAlcanzadaPage;
  let fixture: ComponentFixture<MetaAlcanzadaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaAlcanzadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
