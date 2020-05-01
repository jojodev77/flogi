import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalComponnentComponent } from './modal-componnent.component';

xdescribe('ModalComponnentComponent', () => {
  let component: ModalComponnentComponent;
  let fixture: ComponentFixture<ModalComponnentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalComponnentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponnentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
