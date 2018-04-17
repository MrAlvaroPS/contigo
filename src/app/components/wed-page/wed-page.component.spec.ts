import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WedPageComponent } from './wed-page.component';

describe('WedPageComponent', () => {
  let component: WedPageComponent;
  let fixture: ComponentFixture<WedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
