import { LOCATION_UPGRADE_CONFIGURATION } from "@angular/common/upgrade";
import { Routes } from "@angular/router";
export default[
    {
        path:'listaalumnos',
        loadComponent:()=>('./alumnos/alumnos.component')
    }
]