/** LIBRERIAS DE ANGULAR **/
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";

/** NG2 CHARTS */
import { ChartsModule } from 'ng2-charts';

/** RUTAS**/
import { PAGES_ROUTES } from "./pages.routes";

import { UsuariosComponent } from "./usuarios/usuarios.component";
import { PagesComponent } from "./pages.component";
import { AnticipoComponent } from './anticipo/anticipo.component';
import { DescuentosComponent } from './descuentos/descuentos.component';
import { SegurosComponent } from './seguros/seguros.component';
import { ContentComponent } from './content/content.component';
import { RolesComponent } from './roles/roles.component';
import { ClientesComponent } from './clientes/clientes.component';
import { MATERIAL_COMPONENTS } from "../app.material";
import { TablaComponent } from "../components/tabla/tabla.component";
import { GraficaDonaComponent } from "../components/grafica-dona/grafica-dona.component";

@NgModule({
    declarations:[
        PagesComponent,
        UsuariosComponent,
        AnticipoComponent,
        DescuentosComponent,
        SegurosComponent,
        ContentComponent,
        RolesComponent,
        ClientesComponent,
        TablaComponent,
        GraficaDonaComponent
    ],
    exports:[
        UsuariosComponent,
        PagesComponent,
        TablaComponent,
        GraficaDonaComponent
    ],
    imports:[
        SharedModule,
        PAGES_ROUTES,
        MATERIAL_COMPONENTS,
        ChartsModule
    ]

})

export class PagesModule { }