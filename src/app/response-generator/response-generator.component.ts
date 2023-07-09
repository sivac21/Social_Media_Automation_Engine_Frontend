import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-response-generator',
  templateUrl: './response-generator.component.html',
  styleUrls: ['./response-generator.component.css']
})
export class ResponseGeneratorComponent {

  userInput!: string;
  result!: string;
  loading: boolean = false;

  private apiUrl = 'http://localhost:5000/generateResponse';

  constructor(private http: HttpClient) { }

  submitForm(): void {
    this.loading = true;

    const prompt = `Generate an short email response in 130 words to the customer for the feedback given by the customer of the following content, which is delimited with triple backticks?\n\nContent: \`\`\`${this.userInput}\`\`\``;

    this.http.post<any>(this.apiUrl, { user_input: this.userInput }).subscribe(
      response => {
        this.result = response.result;
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}


