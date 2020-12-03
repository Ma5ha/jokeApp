import { Component, OnInit } from '@angular/core';
import { ProgramingJokesService } from 'src/app/services/programmingJokes.service';
import { JokesEntity } from 'src/app/types/jokeResponse.type';
// svaka komponenta ima dekorator u njemu se deklarise:
// * selektor
// * template ili templateUrl
// * stil
// dekorator mora u fajlovima biti iznad klase koju deklarise




// komponenta obicno treba da ima selktor.
// ova komponenta nema selktor jer je necemo pozivati iz templatea
// s obzirom da je ova komponenta stranica nju loaduje router
// zato nema potrebe da postoji selektor


// selektor ovibicno treba da ima neki prefiks da se ne bi suprostavljao sa nativ componentama



@Component({
templateUrl: './programing.page.html',
styleUrls: [ './programming.page.scss']
})
// sama klasa mora biti exportovana i deklarisana u modulu kojem pripada u ovom slucaju app.module.ts


// ukoliko je u pitanju stranica mora se inportovati u routeru  da bi mogla da se pozove u ruteru


// tslint:disable-next-line: component-class-suffix
export class  ProgrammingPage  implements OnInit {

// implements sintaksa samo naglasva compaleru da pogleda da postoji ova methoda u klasi
// ne mora se naglasiti da bi lifecycle methoda radila


jokes: JokesEntity[];


    constructor(private apiService: ProgramingJokesService ){
    // u konstruktoru private oznacava da je property dostupan samo unutar clase ne i izvan nje
    // mozda si i radio sa ovim u reactu nisam radio sa klasama pa ne znam jesi li upoznat pitaj me ako nisi
    // private je shorhand... to izgulaj u typescript dokumentaciji
    // dio apiService : ProgramingJokesService oznacava  injectoru da nam provida service
    // u ovom slucaju to je ProgramingJokesService koji je obicna klasa dekorisana injectorom
    // dvotacka u TypeScriptu se naziva type anotacija


    }

    ngOnInit(): void{
        // void znaci da nasa fnk nista ne vraca a ako vraca mora biti anotirana sa tipom koji vraca kao u service get metodi
            // lifecycle method-a u react class api-u  to je componentDidMount ili useEffect u hook api

        this.apiService.get().subscribe(
            res => {
            const {jokes} = res;
            this.jokes = jokes;
        },
        err => {
            console.log(err);
        });
        // ukoliko bi smo samo pozvali get metodu sa naseg servica ne bi smo dobili podatke
        // dakle, da bi se izvrsio observable mora se na njega subscribovati

    }


}
