import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from '../data-storage/data-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  show: boolean = false;
  collapse: boolean = true;
  userSub: Subscription;
  isAuthenticated = false;
  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onSaveData() {
    this.dataStorageService.storeBooks();
  }

  onFetchData() {
    this.dataStorageService.fetchBooks().subscribe((data) => {
      console.log(data);
    });
  }

  onLogout() {
    this.authService.logout();
    this.router.navigate(['/auth'])
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
