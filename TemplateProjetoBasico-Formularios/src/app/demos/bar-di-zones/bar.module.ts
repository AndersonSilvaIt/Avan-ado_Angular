import { ModuleWithProviders, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BarComponent } from "./bar.component";
import { BarUndiadeConfig } from "./bar.config";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        BarComponent
    ],
    exports: [
        BarComponent
    ]
})
export  class BarModule {

    static forRoot(config: BarUndiadeConfig) : ModuleWithProviders {
        return {
            ngModule: BarModule,
            providers: [
                {provide: 'ConfigManualUnidade' , useValue: config}
            ]
        };
    }

    static forChild() {
        
        

    }

 }