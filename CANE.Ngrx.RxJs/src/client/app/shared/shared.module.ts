import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
// import { Injectable } from "@angular/core";
// import { HttpClient } from "@angular/common/http";
//import { Observable } from "rxjs/Observable";

// import { IncrementService } from "./services/increment.service";


@NgModule({
    imports: [ CommonModule, FormsModule, ReactiveFormsModule ],
    declarations: [ ],
    exports: [ CommonModule, FormsModule, ReactiveFormsModule ]
})


export class SharedModule {
    // put services
    // static forRoot(): ModuleWithProviders {
    //     return {
    //         ngModule: SharedModule,
    //         providers: [ IncrementService ]
    //     }
    // }

}
