import { MatButtonModule, MatCheckboxModule, MATERIAL_SANITY_CHECKS } from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [ MatButtonModule, MatCheckboxModule ],
    exports: [ MatButtonModule, MatCheckboxModule ]
})

export class MaterialModule {}