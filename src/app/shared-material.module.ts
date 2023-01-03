import { NgModule } from '@angular/core';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';


const materialModule = [
  MatToolbarModule,
  MatInputModule,  
  MatIconModule,
  MatSelectModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule
]
@NgModule({  
  exports:[...materialModule]
  
})
export class SharedMaterialModule { }
