import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuisnessProfileComponent } from './buisness-profile.component';

describe('BuisnessProfileComponent', () => {
  let component: BuisnessProfileComponent;
  let fixture: ComponentFixture<BuisnessProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuisnessProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuisnessProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
