import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyjobregistrationComponent } from './myjobregistration.component';

describe('MyjobregistrationComponent', () => {
  let component: MyjobregistrationComponent;
  let fixture: ComponentFixture<MyjobregistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyjobregistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyjobregistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
