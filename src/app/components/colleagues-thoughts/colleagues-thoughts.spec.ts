import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleaguesThoughts } from './colleagues-thoughts';

describe('ColleaguesThoughts', () => {
  let component: ColleaguesThoughts;
  let fixture: ComponentFixture<ColleaguesThoughts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColleaguesThoughts],
    }).compileComponents();

    fixture = TestBed.createComponent(ColleaguesThoughts);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
