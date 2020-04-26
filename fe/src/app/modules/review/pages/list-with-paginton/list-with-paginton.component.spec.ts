import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWithPagintonComponent } from './list-with-paginton.component';

describe('ListWithPagintonComponent', () => {
  let component: ListWithPagintonComponent;
  let fixture: ComponentFixture<ListWithPagintonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWithPagintonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWithPagintonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
