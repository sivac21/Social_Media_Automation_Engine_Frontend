import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-review-analyzer',
  templateUrl: './review-analyzer.component.html',
  styleUrls: ['./review-analyzer.component.css']
})
export class ReviewAnalyzerComponent {

  userInput!: string;
  result1!: string | null;
  result2!: string;
  loading: boolean = false;


  private apiUrl1 = 'http://localhost:5000/summarization';
  private apiUrl2 = 'http://localhost:5000/analyzeSentiment';

  constructor(private http: HttpClient) { }

  submitForm(): void {

    this.loading = true;

    const prompt1 = `Summarize the following content, which is delimited with triple backticks?\n\nContent: \`\`\`${this.userInput}\`\`\``;
    const prompt2 = `What is the sentiment of the following product review, which is delimited with triple backticks?\n\nReview text: \`\`\`${this.userInput}\`\`\``;

    const request1 = this.http.post<any>(this.apiUrl1, { user_input: this.userInput, prompt: prompt1 });
    const request2 = this.http.post<any>(this.apiUrl2, { user_input: this.userInput, prompt: prompt2 });

    forkJoin([request1, request2]).subscribe(
      responses => {
        const response1 = responses[0];
        const response2 = responses[1];

        const summary = response1.result;
        if (summary) {
          const sentences = summary.split('. ');
          if (sentences.length > 2) {
            this.result1 = sentences.slice(0, 2).join('. ') + '.';
          } else {
            this.result1 = summary;
          }
        } else {
          this.result1 = null;
        }

        this.result2 = response2.result;

        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }


}
