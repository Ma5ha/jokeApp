import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ProgramingJokesService{


    constructor(private httpClient: HttpClient){

    }

    get(){
        console.log('í work')
    }


    

}
