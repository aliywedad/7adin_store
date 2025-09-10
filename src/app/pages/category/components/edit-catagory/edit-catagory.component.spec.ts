import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCatagoryComponent } from './edit-catagory.component';

describe('EditCatagoryComponent', () => {
  let component: EditCatagoryComponent;
  let fixture: ComponentFixture<EditCatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCatagoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
