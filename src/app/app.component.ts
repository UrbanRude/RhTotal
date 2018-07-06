import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { config } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoading = false;
  constructor(private _dataService: DataService, private _snackBar: MatSnackBar){
    this._dataService
        .getIsLoadingEvent()
        .subscribe(isLoad => this.isLoading = isLoad);
    this._dataService
        .getGeneralNotificationMessage()
        .subscribe(msg => {
          this._snackBar.open(msg, 'Ok', {
            duration: 2000
          });
        });
  }
}


