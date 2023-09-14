import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DogsListComponent } from './dogs-list/dogs-list.component';

const routes: Routes = [{ path: 'auth', component: AuthComponent },
{ path: 'dogs', component: DogsListComponent },
 { path: '', redirectTo: 'auth', pathMatch: 'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
