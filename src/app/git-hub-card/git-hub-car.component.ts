import { Component,OnInit,OnDestroy} from "@angular/core";
import { GitHubModel } from "../model/git-hub-model";


@Component({
    selector: 'app-git-hub-card',
    templateUrl: './git-hub-car.component.html',
    styleUrls: ['./git-hub-car.component.css']
})
export class GitHubCardComponent implements OnInit ,OnDestroy{

    gitHubData: GitHubModel;
    constructor(){
        this.gitHubData=new GitHubModel();
        this.gitHubData.avatar_url="https://cdn1.iconfinder.com/data/icons/rcons-user-action/512/user-512.png";
        this.gitHubData.followers='1';
        this.gitHubData.following='1';
        this.gitHubData.login='Jairox';
        this.gitHubData.name='Jairo Alberto';
   
    }

    ngOnInit() {
        
    }

    ngOnDestroy(){

    }

}