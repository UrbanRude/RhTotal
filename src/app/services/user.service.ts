import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../models/user.model";
import { Observable } from "rxjs";



@Injectable()
export class UserService{
    private serviceUrl:string = `https://jsonplaceholder.typicode.com/users`;

    constructor( private _http:HttpClient){}

    getUsers():Observable<User[]>{
        return this._http.get<User[]>(this.serviceUrl);
    }

}