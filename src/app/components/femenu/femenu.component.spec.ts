import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FemenuComponent } from './femenu.component';

describe('FemenuComponent', () => {
  let component: FemenuComponent;
  let fixture: ComponentFixture<FemenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FemenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FemenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
