import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosdetailsComponent } from './produtosdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ProdutosdetailsComponent', () => {
  let component: ProdutosdetailsComponent;
  let fixture: ComponentFixture<ProdutosdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdutosdetailsComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(ProdutosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
