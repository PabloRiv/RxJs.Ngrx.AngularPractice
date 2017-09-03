import { Observer } from "rxjs";


export class MyObserver implements Observer<number> {
    next(value) {
        console.log(`value: ${ value }`);
    }

    error(e) {
        console.log(`value: ${ e }`);
    }

    complete() {
        console.log("complete");
    }
}