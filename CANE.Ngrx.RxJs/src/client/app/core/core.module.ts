import { NgModule } from "@angular/core";

// app-wide singleton providers should be imported here to make sure there is only one instance
import { IncrementService } from "../shared/services/increment.service";
import { MyObserver } from "../shared/miObserver";

@NgModule({
    imports: [  ],
    // declarations: [],
    // exports: [],
    providers: [ IncrementService, MyObserver ]
})


export class CoreModule {

}
