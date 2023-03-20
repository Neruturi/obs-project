import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{
ngOnInit(): void {
  // try{
  //   this.dvar({});

  // }catch(err){
  //   console.log(err);
  // }
}
}
