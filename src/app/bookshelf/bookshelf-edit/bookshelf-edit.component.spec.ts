import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookshelfEditComponent } from './bookshelf-edit.component';

describe('BookshelfEditComponent', () => {
  let component: BookshelfEditComponent;
  let fixture: ComponentFixture<BookshelfEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookshelfEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookshelfEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
