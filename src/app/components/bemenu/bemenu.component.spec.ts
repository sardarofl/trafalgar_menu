import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BemenuComponent } from './bemenu.component';

describe('BemenuComponent', () => {
  let component: BemenuComponent;
  let fixture: ComponentFixture<BemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
