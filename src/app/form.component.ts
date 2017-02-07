import { Component } from '@angular/core';
import { FormModule } from './form.module';


@Component({
  selector: 'login-page',
  templateUrl: './login-page.html'
})
export  class FormComponent{
              //  console.log('constructor called');
                submitted = false;
                model = new FormModule();
              //onSubmit();
              	onSubmit(){
              		this.submitted = true;
                	this.showMsg();
            	}            
            showMsg(){
                var x = document.getElementById("snackbar")
                    x.className = "show";
                setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
            }
          	
    	}

