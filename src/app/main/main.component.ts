import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../utility.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  posts!:any
  comments!:any

  constructor(public utility:UtilityService) { }

  ngOnInit(): void {
    this.utility.getPosts().subscribe((elem)=> this.posts=elem)

    
  }

  showComments(i:number){
    this.utility.getComments(i).subscribe((param)=>this.comments=param)
  }



}
