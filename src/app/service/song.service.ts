import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Song} from "../model/Song";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SongService {
  private API_SONG = environment.API_LOCAL+'song';

  constructor(private httpClient: HttpClient) { }
  createSongService(song: Song): Observable<any>{
    return this.httpClient.post(this.API_SONG, song);
  }
}
