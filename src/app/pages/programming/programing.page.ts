import { Component, OnInit } from '@angular/core';
import { ProgramingJokesService } from 'src/app/services/programmingJokes.service';
// svaka komponenta ima dekorator u njemu se deklarise:
//* selektor
//* template ili templateUrl
//* stil
// dekorator mora u fajlovima biti iznad klase koju deklarise 




// komponenta obicno treba da ima selktor. 
// ova komponenta nema selktor jer je necemo pozivati iz templatea 
// s obzirom da je ova komponenta stranica nju loaduje router 
// zato nema potrebe da postoji selektor 


// selektor ovibicno treba da ima neki prefiks da se ne bi suprostavljao sa nativ componentama



@Component({
templateUrl: './programing.page.html'
})
// sama klasa mora biti exportovana i deklarisana u modulu kojem pripada u ovom slucaju app.module.ts


// ukoliko je u pitanju stranica mora se inportovati u routeru  da bi mogla da se pozove u ruteru


// tslint:disable-next-line: component-class-suffix
export class  ProgrammingPage  implements OnInit {



    constructor(private apiService: ProgramingJokesService ){

    }

    ngOnInit(){
        this.apiService.get()
    }


}
