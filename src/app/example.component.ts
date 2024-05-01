import { Component } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  visible = true;
  displayMode: 'ios' | 'md' = 'md';

  toggleVisibility() {
    this.visible = !this.visible;
  }
}
