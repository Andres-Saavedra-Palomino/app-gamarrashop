import {
  Component,
  Inject,
  Input,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'gam-form-ropa',
  templateUrl: './form-ropa.component.html',
  styleUrls: ['./form-ropa.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FormRopaComponent implements OnInit {
  title: string;
  group: FormGroup = new FormGroup({});
  photoToShow: string = '';
  constructor(@Inject(MAT_DIALOG_DATA) private data: any) {
    this.title = this.data ? 'Edicion' : 'Nuevo';
    this.setForm();
  }
  setForm() {
    this.group = new FormGroup({
      id: new FormControl(this.data ? this.data.id : null),
      tipo: new FormControl(
        this.data ? this.data.tipo : null,
        Validators.required
      ),
      estilo: new FormControl(
        this.data ? this.data.estilo : null,
        Validators.required
      ),
      talla: new FormControl(this.data ? this.data.talla : null),
      precio: new FormControl(
        this.data ? this.data.precio : null,
        Validators.required
      ),
      color: new FormControl(this.data ? this.data.color : null),
      marca: new FormControl(
        this.data ? this.data.marca : null,
        Validators.required
      ),
      unidades: new FormControl(
        this.data ? this.data.unidades : null,
        Validators.required
      ),
      isActive: new FormControl(this.data ? this.data.isActive : null),
    });

    if (this.data) {
      this.group.addControl('photo', new FormControl(null));
      this.photoToShow = this.data.foto;
    } else {
      this.group.addControl(
        'photo',
        new FormControl(null, Validators.required)
      );
    }
  }

  save() {
    console.log(this.group);
  }

  ngOnInit(): void {}
}
