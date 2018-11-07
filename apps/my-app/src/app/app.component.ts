import { Component } from '@angular/core';
import { user } from '@farm/fixtures';

@Component({
  selector: 'farm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = user.name;
}
