import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { BooksListComponent } from './components/books-list/books-list.component'
import { ManageLibraryComponent } from './components/manage-library/manage-library.component'

const routes: Routes = [
    { path: '', component: BooksListComponent },
    { path: 'manage', component: ManageLibraryComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}