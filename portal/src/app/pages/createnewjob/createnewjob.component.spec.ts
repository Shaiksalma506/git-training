import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatenewjobComponent } from './createnewjob.component';

describe('CreatenewjobComponent', () => {
  let component: CreatenewjobComponent;
  let fixture: ComponentFixture<CreatenewjobComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreatenewjobComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatenewjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
