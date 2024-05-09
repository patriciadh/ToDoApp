import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FriendListComponent } from './friendshipsList.component';

describe('FriendListComponent', () => {
  let component: FriendListComponent;
  let fixture: ComponentFixture<FriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});