/* Keep track of calls to an API */

class ApiStatus {
  lastFail: number;
  calls: Call[];

  constructor(public url: string) {}

  computeFailPercentage(timeWindow: number): number {
    let i = this.calls.length - 1;
    let success = 0;
    let fail = 0;

    // timeWindow: duration during which sth can take place
    while (this.calls[i].time > Date.now() - timeWindow && i >= 0) {
      if (this.calls[i].status) {
        success++;
      } else {
        fail++;
      }

      i--;
    }

    return fail / (fail + success);
  }
}
