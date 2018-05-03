import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { GitHubModel } from "../app/model/git-hub-model";

//const _getUserUrl='https://api.github.com/users';
const _getUserUrl='http://10.11.1.100:8080/users';

@Injectable()
export class GitHubServiceMock{
    
    constructor(private _httpClien: HttpClient){

    }

    getUserInfo(userName: string){
        let gitHubObj = new GitHubModel();
        gitHubObj.avatar_url = '';
        gitHubObj.login = 'jairo';
        gitHubObj.name = 'jairo alberto';
        gitHubObj.followers = '';
        gitHubObj.following = '';
        
        return Observable.of(gitHubObj).catch(this.handleError);
    }

    
    handleError(error:any){
        console.log(`Error: ${error}`);
        return Observable.throw(error.json() ||'Server error' );
        //return Observable.throw(error.json() != null ? error.json() : 'Server error'); hace lo mismo que arriba
    }

}