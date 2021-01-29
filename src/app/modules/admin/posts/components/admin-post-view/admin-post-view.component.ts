import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-post-view',
  templateUrl: './admin-post-view.component.html',
  styleUrls: ['./admin-post-view.component.css']
})
export class AdminPostViewComponent {
  constructor(public readonly activatedRoute: ActivatedRoute) {}
}
