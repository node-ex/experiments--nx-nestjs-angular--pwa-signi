import { CommonModule, DOCUMENT } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Inject, inject } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrl: './home-view.component.scss',
  imports: [CommonModule, RouterModule],
})
export class HomeViewComponent {
  http = inject(HttpClient);

  constructor(@Inject(DOCUMENT) private document: Document) {}

  startSignProcess() {
    this.http.post('/api/signi/contract', {}).subscribe({
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next: (result: any) => {
        console.log(result);
        // eslint-disable-next-line
        const signiUrl = result.notifications[0].links.contract;
        console.log(signiUrl);
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        this.document.location.href = signiUrl;
      },
    });
  }
}
