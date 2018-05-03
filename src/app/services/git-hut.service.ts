import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../model/git-hub-model";

//const _getUserUrl='https://api.github.com/users';
const _getUserUrl='http://localhost:7001/scheduler-web/resources/catalog/usersGit';

@Injectable()
export class GitHubService{
    
    constructor(private _httpClien: HttpClient){

    }

    getUserInfo(userName: string){
     return  this._httpClien.get(`${_getUserUrl}/${userName}`,{responseType: 'json'})
       .map((x: any) => {
           let gitHubObj = new GitHubModel();
           gitHubObj.avatar_url = x.avatar_url;
           gitHubObj.login = x.login;
           gitHubObj.name = x.name;
           gitHubObj.followers = x.followers;
           gitHubObj.following = x.following;
           return gitHubObj;
       }).catch(this.handleError);

    }

    handleError(error:any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() ||'Server error' );
        //return Observable.throw(error.json() != null ? error.json() : 'Server error'); hace lo mismo que arriba
    }

}