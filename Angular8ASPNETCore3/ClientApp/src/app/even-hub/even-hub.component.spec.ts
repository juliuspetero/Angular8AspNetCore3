import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenHubComponent } from './even-hub.component';

describe('EvenHubComponent', () => {
  let component: EvenHubComponent;
  let fixture: ComponentFixture<EvenHubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenHubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
