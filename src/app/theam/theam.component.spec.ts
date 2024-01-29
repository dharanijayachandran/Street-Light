import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheamComponent } from './theam.component';

describe('TheamComponent', () => {
  let component: TheamComponent;
  let fixture: ComponentFixture<TheamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
