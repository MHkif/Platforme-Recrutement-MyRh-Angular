import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/state/app.state';
import { Admin } from '../../../model/admin.model';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  admin!: Admin | null;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store
      .select('adminAuth')
      .subscribe(
        (state) => (
          (this.admin = state.admin),
          console.log('Admin   : ', state.admin),
          console.log('isLogged   : ', state.isLogged)
        )
      );

  }
}
