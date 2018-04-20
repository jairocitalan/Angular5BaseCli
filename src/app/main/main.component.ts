import { Component, OnInit } from '@angular/core';
import { GitHubService } from '../services/git-hut.service';
import { GitHubModel } from '../model/git-hub-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  gitHubData: GitHubModel;
  gitHubDataList: Array<GitHubModel>;
  constructor(private _gitHubServices: GitHubService) {
     
      this.gitHubDataList=new Array<GitHubModel>();  
   }

  

  ngOnInit() {   
   


  }

  onSearchUser(userName: string){
    this._gitHubServices.getUserInfo(userName).subscribe(x => {
     this.gitHubDataList.push(x);
    });
  }
  onDelete(obj: GitHubModel){
    console.log(obj);
    this.gitHubDataList=this.gitHubDataList.filter(x => x != obj);
    
  }

}
