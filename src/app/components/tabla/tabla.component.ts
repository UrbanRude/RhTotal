import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';
import { MatPaginator } from '@angular/material';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: []
})
export class TablaComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;

  dataSource = new UserDataSource(this._user_service);
  displayedColumns = ['name','email','phone','company','website'];
  
  constructor(
    private _user_service:UserService
  ){

  }

  ngOnInit() {
    
  }

  change(){
    console.log( `Cambio` )
  }

}

export class UserDataSource extends DataSource<any>{

  constructor( 
    private _user: UserService){
    super();
  }


  connect():Observable<User[]>{
    return this._user.getUsers();
  }

  disconnect(){

  }

}