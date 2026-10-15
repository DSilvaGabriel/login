import { Component } from '@angular/core';


import { FormBuilder, FormGroup } from '@angular/forms';
import { createForm } from '../../function/form/createForm.function';
import { formCreateAccount } from '../../const/form/acount.const';
import { insert } from '../../function/data/local/local.function';
import { UserService } from '../../service/user.service';
import { RouterService } from '../../service/router.service';
import { SnackBarService } from '../../service/snack-bar.service';

@Component({
  selector: 'app-create',
  standalone: false,
  styleUrl: './create.scss',
  templateUrl: './create.html',
})
export class Create {

  form!: FormGroup;

  constructor(  
    private formBuilder: FormBuilder,

    private userService: UserService,
    private routerService: RouterService,
    private snackBarService: SnackBarService
  ){
    this.form = createForm(formCreateAccount, this.formBuilder)
  }

  onSubimit(){
    const form = this.form;

    try {
      console.log(form.value)

      if(this.form.invalid) {
        throw new Error('Preencha todos os dados');
      }

      const data = form.value;

      insert('user', data);

      this.userService.defineUser(data);

      this.routerService.navigatePage('');
    } catch(error: any){
      this.snackBarService.openSnackBar(error, 'ok');
    }
  }
}