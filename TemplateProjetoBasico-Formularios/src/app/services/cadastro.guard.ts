import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { CadastroComponent } from "../demos/reactiveForms/cadastro/cadastro.component";



@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {

    canDeactivate(component: CadastroComponent): boolean {

        if (component.mudancasNaoSalvas) 
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulário?');

        return true;
    }

}