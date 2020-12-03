import { HttpClient, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JokesResponse } from '../types/jokeResponse.type';

@Injectable({providedIn: 'root'})
export class ProgramingJokesService {

api: string = environment.apiBase;
// ova kalasa je servis
// servis znaci da je injector moze instancirati i ubaciti u drugu klasu
// da bi bila servis mora se dekorisati sa @Injectable dekoratorom
    constructor(private httpClient: HttpClient){
        // u konstrutoru je ubacen klijent angularov koji je observable
        // u ProfiliPage komponenti ce vjerovatno biti nastavak toga sta to znaci ...
    }

    get(): Observable<JokesResponse>{
        // ova metoda prema anotascij vraca ovservable 
        // observable je u httpClientu generic to isto mozes izuciti
        // specificno za observeble je da bi on radio neko mora da se subscribuje na njega 
        
        const completeUrlString = this.api + '/joke/Programming?amount=15';

        return this.httpClient.get<JokesResponse>(completeUrlString);
        // zbog toga sto se mora subscribovati na njega ova funkcija mora da ga returnuje 
    }




}
