import { Injectable } from '@angular/core';

@Injectable()
export class IncrementService {

  constructor() { }

  increment(value: number): number {
    return value++;
  }

}
