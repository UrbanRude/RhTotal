/** LIBRERIAS DE ANGULAR **/
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "./header/header.component";

/** ANGULAR MATERIAL **/
import { MATERIAL_COMPONENTS } from "../app.material";
import { CommonModule } from "@angular/common";
import { NopagefoundComponent } from './nopagefound/nopagefound.component';


@NgModule({
    imports:[
        RouterModule,
        MATERIAL_COMPONENTS,
        CommonModule
    ],
    declarations:[
        HeaderComponent,
        NopagefoundComponent
    ],
    exports:[
        HeaderComponent
    ]
})

export class SharedModule { }

