import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Admin } from '../../../model/admin.model';
import { AppState } from '../../../store/state/app.state';

@Component({
  selector: 'app-admin-side-bar',
  templateUrl: './admin-side-bar.component.html',
  styleUrls: ['./admin-side-bar.component.css'],
})
export class AdminSideBarComponent implements OnInit {
  admin!: Admin | null;
  isLogged!: boolean | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('adminAuth')
      .subscribe(
        (state) => (
          (this.admin = state.admin), (this.isLogged = state.isLogged)
        )
      );
    console.log('Admin Side bar: ', this.admin);
    console.log('isLogged Side bar : ', this.isLogged);
  }
}
