import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projekt';

  days = ['Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota', 'Niedziela'];

isVisible = true;
isHidden = false;

show() {
this.isVisible = !this.isVisible;

}
hidden() {
this.isHidden = !this.isHidden;

}


}
