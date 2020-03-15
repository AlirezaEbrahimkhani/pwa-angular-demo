import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

export interface Item {
  name: string;
  description: string;
  url: string;
  html: string;
  markdown: string;
}

@Injectable({
  providedIn: "root"
})
export class ApiService {

  private dataUrl: string = "https://www.techiediaries.com/api/data.json";

  constructor(private httpClient: HttpClient) {}

  fetch() {
    return this.httpClient.get(this.dataUrl);
  }
}
