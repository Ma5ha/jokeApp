
import { Component } from "@angular/core";

@Component({
    selector:'app-nav',
    templateUrl: './nabar.component.html',
    styleUrls:  ['./navbar.component.scss']
})


export class NavbarComponent{
    links: string[] =["programming", "dummy" ]
}