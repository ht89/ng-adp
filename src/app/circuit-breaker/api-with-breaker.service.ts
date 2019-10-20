import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWithBreakerService {
  private apis: Map<string, ApiStatus>;
  private failPercentage = 0.2;
  private timeWindow = 60 * 60 * 24;
  private timeToRetry = 60;

  constructor(private http: HttpClient) {}

  getUrl(url: string): void {
    const rootUrl = this.extractRootDomain(url);

    if (this.isClosed(rootUrl) || this.readyToRetry(rootUrl)) {
      let timeout;

      const sub = this.http.get(url).subscribe(res => {
        console.log(res);

        clearTimeout(timeout);
        this.addCall(rootUrl, true);
      });

      timeout = setTimeout(() => {
        sub.unsubscribe();
        this.addCall(rootUrl, false);
      }, 1000);
    }
  }

  private addCall(url: string, status: boolean) {
    let res = this.apis.get(url);

    if (!res) {
      res = new ApiStatus(url);
      this.apis.set(url, res);
    }

    res.calls.push(new Call(Date.now(), status));

    if (!status) {
      res.lastFail = Date.now();
    }
  }

  private readyToRetry(url: string): boolean {
    return this.apis.get(url).lastFail < Date.now() - this.timeToRetry;
  }

  private isClosed(url: string): boolean {
    return (
      !this.apis.get(url) ||
      this.apis.get(url).computeFailPercentage(this.timeWindow) >
        this.failPercentage
    );
  }

  private extractHostname(url: string): string {
    let hostname;
    // find & remove protocol (http, ftp, etc) and get hostname
    if (url.indexOf('://') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }

    // find & remove port number
    hostname = hostname.split(':')[0];

    // find & remove '?'
    hostname = hostname.split('?')[0];

    return hostname;
  }

  private extractRootDomain(url: string): string {
    let domain = this.extractHostname(url);
    const splitArr = domain.split('.');
    const arrLength = splitArr.length;

    // extract the root domain here
    // if there's a subdomain
    if (arrLength > 2) {
      domain = splitArr[arrLength - 2] + '.' + splitArr[arrLength - 1];
    }

    // check to see if it's using a Country Code Top Level Domain (ccTLD) i.e. '.me.uk'
    if (
      splitArr[arrLength - 2].length === 2 &&
      splitArr[arrLength - 1].length === 2
    ) {
      domain = splitArr[arrLength - 3] + '.' + domain;
    }

    return domain;
  }
}
