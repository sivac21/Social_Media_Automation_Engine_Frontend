import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-content-generator',
  templateUrl: './content-generator.component.html',
  styleUrls: ['./content-generator.component.css']
})
export class ContentGeneratorComponent {

  userInput!: string;
  result: any = { paragraph1: '', bullets: [], paragraph2: '', paragraph3: '' };
  loading: boolean = false;

  private apiUrl = 'http://localhost:5000/generateContent';

  constructor(private http: HttpClient) { }

  submitForm(): void {
    this.loading = true;
    const prompt = `Generate a content for engaging social media post to captivate our audience and drive interest in the product, which is delimited with triple backticks?\n\nContent: \`\`\`${this.userInput}\`\`\``;
    this.http.post<any>(this.apiUrl, { user_input: this.userInput }).subscribe(
      response => {
        const paragraphs = response.result.split('\n\n');
        const bullets = paragraphs[1].split('\n');

        this.result = {
          paragraph1: paragraphs[0],
          bullets: bullets.filter((bullet: string) => bullet.trim() !== ''),
          paragraph2: paragraphs[2],
          paragraph3: paragraphs[3]
        };
        this.loading = false;
      },
      error => {
        console.log(error);
        this.loading = false;
      }
    );
  }
}
