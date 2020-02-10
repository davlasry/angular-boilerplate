import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileNavItemComponent } from './profile-nav-item.component';

describe('ProfileNavItemComponent', () => {
  let component: ProfileNavItemComponent;
  let fixture: ComponentFixture<ProfileNavItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileNavItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileNavItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
