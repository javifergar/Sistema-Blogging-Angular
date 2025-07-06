import { Component } from '@angular/core';
import { Inoticias } from '../../interfaces/inoticias';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  noticia: Inoticias = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
  };
  arrayNoticias: Inoticias[] = [];

  cargarNoticia() {
    this.arrayNoticias.push(this.noticia);
    this.noticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    console.log(this.arrayNoticias);
  }
  pintarNoticia() {
    let html = '';
    this.arrayNoticias.forEach((noticia) => {
      html += `<li class="rojo">${noticia.titulo} ${noticia.imagen} ${noticia.texto} ${noticia.fecha}</li>`;
    });
    return html;
  }
}
