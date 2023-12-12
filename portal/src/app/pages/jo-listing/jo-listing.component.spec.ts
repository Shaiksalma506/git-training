import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoListingComponent } from './jo-listing.component';

describe('JoListingComponent', () => {
  let component: JoListingComponent;
  let fixture: ComponentFixture<JoListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JoListingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
