import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { emptyAction, showAlert } from './App.Action';
import { exhaustMap, map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private _snackbar: MatSnackBar) {}

  _showAlert = createEffect(() =>
    this.actions$.pipe(
      ofType(showAlert),
      exhaustMap((action) => {
        return this.showsnackBarAlert(action.message, action.resultType).afterDismissed()
        .pipe(
            map(() => {
                return emptyAction()
            })
        );
      })
    )
  );

  showsnackBarAlert(message: string, resultType: string = 'fail') {
    let _class = resultType == 'pass' ? 'green-snackbar' : 'red-snackbar';
    return this._snackbar.open(message, 'OK', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      duration: 5000,
      panelClass: [_class],
    });
  }
}
