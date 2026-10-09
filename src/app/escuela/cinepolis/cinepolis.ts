import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule, CommonModule],
  selector: 'app-cinepolis',
  styleUrl: './cinepolis.css',
  templateUrl: './cinepolis.html',
})
export class Cinepolis {
  formulario!: FormGroup;
  
  // Constante del precio por boleta
  readonly PRECIO_BOLETA: number = 12;

  // Variables para la salida en pantalla
  nombreCliente: string = '';
  totalPagar: number = 0;
  mensajeError: string = '';

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nombre: new FormControl('', Validators.required),
      compradores: new FormControl(1, [Validators.required, Validators.min(1)]),
      tarjetaCineco: new FormControl('no', Validators.required),
      boletas: new FormControl(1, [Validators.required, Validators.min(1)]),
    });
  }

  procesar(): void {
    this.mensajeError = '';
    this.totalPagar = 0;

    const nombre = this.formulario.value.nombre;
    const compradores = Number(this.formulario.value.compradores);
    const boletas = Number(this.formulario.value.boletas);
    const tarjetaCineco = this.formulario.value.tarjetaCineco;

    // Regla: Máximo 7 boletas por comprador
    const maxBoletasPermitidas = compradores * 7;

    if (boletas > maxBoletasPermitidas) {
      this.mensajeError = `No se pueden comprar más de 7 boletas por comprador. Máximo permitido para ${compradores} comprador(es): ${maxBoletasPermitidas} boletas.`;
      return;
    }

    // 1. Subtotal base
    let subtotal = boletas * this.PRECIO_BOLETA;
    let descuentoBoletas = 0;

    // 2. Descuento por cantidad de boletas
    if (boletas > 5) {
      descuentoBoletas = 0.15; // 15%
    } else if (boletas >= 3) {
      descuentoBoletas = 0.10; // 10%
    } else {
      descuentoBoletas = 0;    // Sin descuento para 1 o 2 boletas
    }

    let totalConDescuentoBoletas = subtotal - (subtotal * descuentoBoletas);

    // 3. Descuento adicional por tarjeta CINECO (10%)
    if (tarjetaCineco === 'si') {
      totalConDescuentoBoletas -= (totalConDescuentoBoletas * 0.10);
    }

    // Actualizar datos para mostrar
    this.nombreCliente = nombre;
    this.totalPagar = totalConDescuentoBoletas;
  }
}
