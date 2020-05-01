import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDelComponent } from './update-del.component';

describe('UpdateDelComponent', () => {
  let component: UpdateDelComponent;
  let fixture: ComponentFixture<UpdateDelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateDelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
