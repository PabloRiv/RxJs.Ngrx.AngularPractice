import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { MovieComponent } from "./movie.component";
import { MovieService } from "./movie.service";
import { MovieRoutingModule } from './movie-routing.module';

@NgModule({
    imports: [ 
        SharedModule, MovieRoutingModule
    ],
    declarations: [ MovieComponent ],
    exports: [],
    providers: [ MovieService ]
})


export class MovieModule {

}
