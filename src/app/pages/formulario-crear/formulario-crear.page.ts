import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { BoxeadoresService } from 'src/app/servicios/boxeadores/boxeadores.service';

@Component({
  selector: 'app-formulario-crear',
  templateUrl: './formulario-crear.page.html',
  styleUrls: ['./formulario-crear.page.scss'],
})
export class FormularioCrearPage implements OnInit {
  public boxeadorForm: FormGroup;
  constructor(
    private fb: FormBuilder,
     private boxeadorService: BoxeadoresService,
     private router: Router
     ) { 
    this.boxeadorForm = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      tipo: ['', Validators.required],
      imagen: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    if (this.boxeadorForm.valid) {
      const boxeadorData = this.boxeadorForm.value;

      this.boxeadorService.createBoxeadores(boxeadorData).subscribe(
        (nuevoBoxeador) => {
          console.log('Boxeador creado exitosamente:', nuevoBoxeador);
        },
        (error) => {
          console.error('Error al crear el boxeador:', error);
        }
      );
    }
    this. navigateAtras();
  }

  public navigateAtras() {
      setTimeout( () => {
        this.router.navigate(['boxeadores']);
      }, 2000)
    } 
}


