import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EpisodesResponse, CharactersResponse } from '../models/api.model'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl: string = 'https://rickandmortyapi.com/api'
  options = {
    observe: 'body' as const,
    responseType: 'json' as const
  }

  constructor(
    private http: HttpClient
  ) { }

  getCharacters(pageUrl: string | null) {
    let url = `${this.apiUrl}/character`
    if(pageUrl && pageUrl.length > 0) {
      url = pageUrl
    }

    return this.http.get<CharactersResponse>(url, this.options)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleErrors(error)
      })
    )
  }

  getCharactersByStatus(data: {searchName: string, status: string}) {
    let params = new HttpParams()
    params = params.set('name', data.searchName)
    if(data.status !== 'Status') {
      params = params.set('status', data.status)
    }

    return this.http.get<CharactersResponse>(`${this.apiUrl}/character`, { ...this.options, params: params })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleErrors(error)
      })
    )
  }

  getEpisodes(pageUrl: string | null) {
    let url = `${this.apiUrl}/episode`
    if(pageUrl && pageUrl.length > 0) {
      url = pageUrl
    }

    return this.http.get<EpisodesResponse>(url, this.options)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        return this.handleErrors(error)
      })
    )
    
  }

  handleErrors(error: HttpErrorResponse): Observable<never>  {
    if(error.status === 0) {
      return throwError(() => new Error('Problemas de connexion'))
    }
    if(error.status === 404) {
      return throwError(() => new Error('Personaje no encontrado'))
    }

    return throwError(() => new Error('unknown error'))
  }

}
