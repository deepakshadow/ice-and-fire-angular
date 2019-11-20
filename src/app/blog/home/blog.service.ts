import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class BlogService {
  private baseUrl: string = "https://www.anapioficeandfire.com/api";

  constructor(private _http: HttpClient) {}

  // api GET call for all Books
  getAllBooks = () => {
    return this._http.get<any>(`${this.baseUrl}/books`, { observe: "body" });
  };
  // api GET call for all Characters
  getAllCharacters = () => {
    return this._http.get<any>(`${this.baseUrl}/characters`);
  };
  // api GET call for all Houses
  getAllHouses = () => {
    return this._http.get<any>(`${this.baseUrl}/houses`);
  };
  // api GET call for a particular book
  getABook = bookId => {
    return this._http.get<any>(`${this.baseUrl}/books/${bookId}`);
  };
  // api GET call for a particular character
  getACharacter = characterId => {
    return this._http.get<any>(`${this.baseUrl}/characters/${characterId}`);
  };
  // api GET call for a particular house
  getAHouse = houseId => {
    return this._http.get<any>(`${this.baseUrl}/houses/${houseId}`);
  };
  
}
