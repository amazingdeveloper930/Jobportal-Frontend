import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './component';
import { AddUserComponent } from './add/add.component';
import { ListUserComponent } from './list/list.component';
import { EditUserComponent } from './edit/edit.component';

const routes: Routes = [{
    path: '',
    component: UsersComponent,
    children: [
        {
            path: 'add',
            component: AddUserComponent,
        },
        {
            path: 'list',
            component: ListUserComponent,
        },
        {
            path: 'edit/:id',
            component: EditUserComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class UsersRoutingModule { }

export const routedComponents = [
    UsersComponent,
    AddUserComponent,
    ListUserComponent,
    EditUserComponent
];
