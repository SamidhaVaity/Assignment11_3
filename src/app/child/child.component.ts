import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent 
{
  public Ans2 : any;
  public Ans : any;
  constructor (private obj : StringService,private obj2 : NumberService)
  {
    this.Ans2 = this.obj.CountCapital(); 
    this.Ans = this.obj2.ChkPrime(); 
  }
  
}
