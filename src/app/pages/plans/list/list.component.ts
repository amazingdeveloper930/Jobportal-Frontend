import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { NbAuthService } from '@nebular/auth';
import { ListDataSource } from '../../../@core/network/list-data-source';
import { Router } from '@angular/router';
import { ToastService } from '../../../@core/utils/toast.service';
import { NbToastStatus } from '@nebular/theme/components/toastr/model';
import { PlanClient } from '../../../@core/network/plan-client.service';

@Component({
    selector: 'list-plan',
    templateUrl: './list.component.html',
    styles: [`
    nb-card {
        transform: translate3d(0, 0, 0);
    }
    `],
})
export class ListPlanComponent {
    loading = false;
    
    settings = {
        add: {
            addButtonContent: '<i class="nb-plus"></i>',
            createButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        edit: {
            editButtonContent: '<i class="nb-edit"></i>',
            saveButtonContent: '<i class="nb-checkmark"></i>',
            cancelButtonContent: '<i class="nb-close"></i>',
        },
        delete: {
            deleteButtonContent: '<i class="nb-trash"></i>',
            confirmDelete: false,
        },
        columns: {            
            name: {
                title: 'Name',
                type: 'string',
                filter: true,
                editable: false,                
            },
            description: {
                title: 'Description',
                type: 'string',
                filter: true,
                editable: false,                
            },
            price: {
                title: 'Price',
                type: 'string',
                filter: true,
                editable: false,                
            }                 
        },
        actions: {
            position: 'right',
            add: false
        },
        mode: 'external',
        hideSubHeader: false,
        pager: {
            perPage: 15
        }
    };        

    source: ListDataSource;
    
    constructor(private client: PlanClient, private http: HttpClient, private authService: NbAuthService, private router: Router,
        private toastService: ToastService) {
        this.source = new ListDataSource(this.http, this.authService, PlanClient.BASE_ENDPOINT);        
    }
    
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {                
            //this.delete(event);            
        }
    }

    edit(event) {        
        this.router.navigate(['/pages/plans/edit', event.data.id]);
    }

    // delete(event) {
    //     this.loading = true;
    //     this.client.delete(event.data.id).subscribe(
    //         res => {              
    //             this.loading = false;
    //             this.toastService.showToast(NbToastStatus.SUCCESS, 'Deleted', 'Category deleted successfully!');                              
    //             this.source.remove(event.data);
    //         },
    //         err => {              
    //           this.loading = false;
    //           this.toastService.showToast(NbToastStatus.DANGER, 'Failed', err.error.message ? err.error.message : 'Unable to delete category');              
    //         }
    //       );
    // }
}
