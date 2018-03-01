import { Component,OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable } from 'rxjs/Observable';
import { SmartTableService } from '../../../@core/data/smart-table.service';

import { APIService } from '../../../app_services/api.service';
import { APIData  , ProductData } from '../../../app_services/models/api.data.structure'

@Component({
  selector: 'ngx-store-table',
  templateUrl: './store-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class StoreTableComponent implements OnInit{

  ngOnInit() {
  }
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
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      createdAt: {
        title: 'created At',
        type: 'string',
      },
      updatedAt: {
        title: 'updated At',
        type: 'string',
      },
      seller: {
        title: 'Seller',
        type: 'String',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

    constructor(private _apiService: APIService) {
      this.source.onAdded().subscribe((productData :ProductData)=>{

        this._apiService.createProduct(productData).subscribe((apiresponse: APIData)=>{
          console.log(apiresponse);
        });
      });

      this._apiService.getProducts().subscribe((apiresponse: APIData)=>{
        for (var i = 0 ; i < apiresponse.data.length ; i++ )
          apiresponse.data[i].id = (i+1);

        console.log(apiresponse.data[0]);
        this.source.load( apiresponse.data);
      });
      this.source.onRemoved().subscribe((productData :ProductData)=>{
        
                this._apiService.deleteProduct(productData).subscribe((apiresponse: APIData)=>{
                  console.log(apiresponse);
                });
              });

              this.source.onUpdated().subscribe((productData :ProductData)=>{
                
                        this._apiService.updateProduct(productData).subscribe((apiresponse: APIData)=>{
                          console.log(apiresponse);
                        });
                      });
        
    }

    onDeleteConfirm(event): void {
      if (window.confirm('Are you sure you want to delete?')) {
        event.confirm.resolve();
      } else {
        event.confirm.reject();
      }
    }


}
