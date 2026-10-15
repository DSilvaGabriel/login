import { Component } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { formAccount } from '../../const/form/acount.const';
import { createForm } from '../../function/form/createForm.function';
import { get } from '../../function/data/local/local.function';
import { UserService } from '../../service/user.service';
import { RouterService } from '../../service/router.service';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-login',
  standalone: false,
  styleUrl: './login.scss',
  templateUrl: './login.html',
})
export class Login {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,

    private userService: UserService,
    private routerService: RouterService,
    private snackBarService: SnackBarService
  ){
    this.form = createForm(formAccount, this.formBuilder);
  }

  onSubimit(){
    const form = this.form;

    try {
      if(form.invalid) {
        throw new Error('Preencha todos os campos');
      }

      let data = get('user');
      if(!data) throw new Error('Nenhum usuário encontrado');
      
      const dataForm = form.value;

      if(dataForm.email === data.email) {
        if(dataForm.password === data.password){
           this.userService.defineUser(data);
          
           this.routerService.navigatePage('');
        } else {
          throw new Error('Dados não compativeis');
        }
      } else {
        throw new Error('Dados não compativeis');
      }
    } catch(error: any){
      this.snackBarService.openSnackBar(error, 'ok');
    }
  }
}