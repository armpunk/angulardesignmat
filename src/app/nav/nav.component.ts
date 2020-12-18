import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

  showMore = 'keyboard_arrow_right';
  hidden: boolean = false;
  toggle(){
    this.hidden = !this.hidden;
    if(this.hidden){
    this.showMore = 'keyboard_arrow_down';
    } 

    if(!this.hidden){
    this.showMore = 'keyboard_arrow_right';
    }
 }

}
