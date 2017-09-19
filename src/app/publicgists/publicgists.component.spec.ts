import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicgistsComponent } from './publicgists.component';

describe('PublicgistsComponent', () => {
  let component: PublicgistsComponent;
  let fixture: ComponentFixture<PublicgistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicgistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicgistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
