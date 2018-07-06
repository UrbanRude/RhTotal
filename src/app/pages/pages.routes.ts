/** LIBRERIAS DE ANGULAR **/
import { Routes, RouterModule } from "@angular/router";

/** COMPONENTES **/
import { PagesComponent } from "./pages.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";
import { AnticipoComponent } from "./anticipo/anticipo.component";
import { DescuentosComponent } from "./descuentos/descuentos.component";
import { SegurosComponent } from "./seguros/seguros.component";
import { ContentComponent } from "./content/content.component";
import { RolesComponent } from "./roles/roles.component";
import { ClientesComponent } from "./clientes/clientes.component";

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children:[
            { path:'usuarios', component: UsuariosComponent },
            { path:'anticipo', component: AnticipoComponent },
            { path:'descuentos', component: DescuentosComponent },
            { path:'seguros', component: SegurosComponent },
            { path:'content', component: ContentComponent },
            { path:'roles', component: RolesComponent },
            { path:'clientes', component: ClientesComponent },
            { path:'', redirectTo:'/usuarios', pathMatch:'full'}
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

