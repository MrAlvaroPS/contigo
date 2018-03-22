import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWedPageComponent } from './list-wed-page.component';

describe('ListWedPageComponent', () => {
  let component: ListWedPageComponent;
  let fixture: ComponentFixture<ListWedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListWedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
