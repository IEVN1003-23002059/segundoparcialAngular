import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-zodiaco',
  styleUrl: './zodiaco.css',
  templateUrl: './zodiaco.html',
})
export class Zodiaco {
  txtNombre: string = '';
  txtPrimerApellido: string = '';
  txtSegundoApellido: string = '';
  numDia: number = 0;
  numMes: number = 0;
  numAnioNacimiento: number = 0;
  opcionSexo: string = '';

  totalEdad: number = 0;
  nombreSigno: string = '';
  rutaImagenSigno: string = '';
  esVisibleResultado: boolean = false; 

  procesarFormulario() {
    this.obtenerEdad();
    this.obtenerSignoZodiacal();
    this.esVisibleResultado = true;
  }

  obtenerEdad() {
    if (this.numAnioNacimiento > 0) {
      this.totalEdad = 2026 - this.numAnioNacimiento;
    } else {
      this.totalEdad = 0;
    }
  }

  obtenerSignoZodiacal() {
    if (!this.numAnioNacimiento) {
      this.nombreSigno = '';
      this.rutaImagenSigno = '';
      return;
    }

    let indiceSigno = (this.numAnioNacimiento - 4) % 12;

    if (indiceSigno === 0) {
      this.nombreSigno = 'Rata';
      this.rutaImagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Rata.jpg';
    } else if (indiceSigno === 1) {
      this.nombreSigno = 'Buey';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqVBaVgIYxefuirwJEbNGVAwosZUJ8H1ruTCciLnRrOg1YDyD1MyMf64PB&s=10';
    } else if (indiceSigno === 2) {
      this.nombreSigno = 'Tigre';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFCv42Scl4ZtXY2NnkmPzlPY7DjgW4sDlgLrPPU0Ra1W_qizPCSzgHHj_X&s=10';
    } else if (indiceSigno === 3) {
      this.nombreSigno = 'Conejo';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1E_Nl-rl8sdR8SWqsxTngMiBJIi7sEBbail0KQy5RQyddallOosUBrW8&s=10';
    } else if (indiceSigno === 4) {
      this.nombreSigno = 'Dragón';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqhIzbH3BpIC7VB54ShXcThI1IO06goz6FVzb-2H9izf8KLIxaBt5RgYlU&s=10';
    } else if (indiceSigno === 5) {
      this.nombreSigno = 'Serpiente';
      this.rutaImagenSigno = 'https://confuciomag.com/wp-content/uploads/2016/01/06_horoscopo_chino_Serpiente.jpg';
    } else if (indiceSigno === 6) {
      this.nombreSigno = 'Caballo';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzXkTIC8Ktgtxf2IXL-xWW0_7iniwXAOix86lYWSDolyud8ZBPcjsTdAc&s=10';
    } else if (indiceSigno === 7) {
      this.nombreSigno = 'Cabra';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWt_TQMhoRmOKyXQo7Bb7-_WpPnhrdBAwXwZkopM_PwWJVx7_Ki91OJuM&s=10';
    } else if (indiceSigno === 8) {
      this.nombreSigno = 'Mono';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0Ck8vqBagLDjxhBI-RVmZzyZRF5jFnkPYfbxAy9t82yx_xpz4rzY06I&s=10';
    } else if (indiceSigno === 9) {
      this.nombreSigno = 'Gallo';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzNdB7ZNARFbYGGPftyDaHVhh6cAg9DEdFC__e6e61_nQu_REzY_XIUKs&s=10';
    } else if (indiceSigno === 10) {
      this.nombreSigno = 'Perro';
      this.rutaImagenSigno = 'https://studycli.org/wp-content/uploads/2021/06/chinese-new-year-year-of-the-dog-paper-cutting.jpeg';
    } else if (indiceSigno === 11) {
      this.nombreSigno = 'Cerdo';
      this.rutaImagenSigno = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUwPHIz80V2vPvfMdTAIMj_i30_XCZ-z_jgykVNJbUripcvJaspouDrfQ&s=10';
    }
  }
}