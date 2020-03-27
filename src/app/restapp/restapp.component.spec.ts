import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestappComponent } from './restapp.component';

describe('RestappComponent', () => {
  let component: RestappComponent;
  let fixture: ComponentFixture<RestappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
