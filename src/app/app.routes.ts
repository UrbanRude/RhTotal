/** LIBRERIAS DE ANGULAR **/
import { Routes, RouterModule } from "@angular/router";

/** COMPONENTES **/
import { LoginComponent } from "./login/login.component";
import { NopagefoundComponent } from "./shared/nopagefound/nopagefound.component";

export const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '**', component:NopagefoundComponent}
  ];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );

