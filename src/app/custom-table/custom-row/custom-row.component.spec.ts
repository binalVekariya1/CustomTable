import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomRowComponent } from './custom-row.component';

describe('CustomRowComponent', () => {
  let component: CustomRowComponent;
  let fixture: ComponentFixture<CustomRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
