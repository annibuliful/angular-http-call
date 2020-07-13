import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
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
    const callOne = this.callHttp.testCall(1);
    const callTwo = this.callHttp.testCall(2);

    forkJoin([callOne, callTwo]).subscribe((data) => {
      console.log(data);
    });
    // this.callHttp.testCall().subscribe((data) => {
    //   this.data = data.map(({ userId, title }) => ({ userId, title }));
    //   console.log(this.data);
    // });
    // this.callHttp
    //   .testCall()
    //   .pipe(map((val) => val.userId))
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
  }
}
