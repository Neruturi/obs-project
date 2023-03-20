import { Component,OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
Observable
import {filter} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'obs';
  constructor(){

  }
  ngOnInit(): void {
    let probj=new Promise(res =>{
      // promise is eager and runs as soon as intiated/called...but observable is lazy and executes only if subscribed
      console.log("eager promise n consoles immediately when pr is defined")
      setTimeout( ()=> {
        res("promise working");
        res("pr working 1");
        res("2 pr working")
        // resolve in promise is similar to next method 
      },1000)
    })
    probj.then(result=> console.log(result))
    // to return data of promise,use resolve function 
    // in observable use subscribe.next method
// .then to listen to promise with cbfn




    let obsr=new Observable(sub =>{
      console.log("lazy observable")
      setTimeout( ()=>{
        // console.log("observable working")
        sub.next("observable working");
        sub.next("obs working");
        sub.next("obs 2 working")
      },1000)
    })
//  obsr.subscribe(result=> console.log(result))
// ...not subscribed then no o/p of observable

obsr.pipe( 
  filter(d=> d==='obs 2 working')
).subscribe(result=> console.log(result))
// filtered the multiple values emitted by observable with 1 value using filter- import from rxjs operators
  }
}
