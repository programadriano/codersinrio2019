import { Component } from '@angular/core';
import { AlertService } from './shared/services/alert.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(private _alertService: AlertService) { }

  title = 'codersinrio2019';
  video: string = "https://www.youtube.com/embed/Ckom3gf57Yw"


  messageSuccess() {
    this._alertService.success('titulo', 'texto', 'OK')
  }

}
