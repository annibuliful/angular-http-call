import { Component, OnInit } from '@angular/core';
import { CallHttpService } from './call-http.service';

@Component({
  providers: [CallHttpService],
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public title = 'test-httpclient';
  public data: any;
  constructor(private callHttp: CallHttpService) {}
  public ngOnInit() {
    this.callHttp.testCall().subscribe((data) => {
      console.log(data);
    });
  }
}
