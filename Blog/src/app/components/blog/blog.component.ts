import { Component, Input } from '@angular/core';
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
    if (
      this.noticia.titulo === '' ||
      this.noticia.imagen === '' ||
      this.noticia.texto === '' ||
      this.noticia.fecha === ''
    ) {
      alert('Faltan campos por rellenar');
    } else {
      this.arrayNoticias.push(this.noticia);
      this.noticia = { titulo: '', imagen: '', texto: '', fecha: '' };
    }
  }
  pintarNoticia() {
    let html = '';
    this.arrayNoticias.forEach((noticia) => {
      html += `<article class="new">
      <h2>${noticia.titulo}</h2> 
      <img src="${noticia.imagen}"/> 
      <p>${noticia.texto}</p> 
      <p>${noticia.fecha}</p>
      </article>`;
    });
    return html;
  }
  arrayNoticiasBase: Inoticias[] = [
    {
      titulo: 'Paconi ha muerto',
      imagen:
        'https://pbs.twimg.com/profile_images/1222480033098407936/vD3lP05I_200x200.jpg',
      texto:
        'Paconi, el famoso streamer que dio a conocer a Plex al mundo, ha muerto a manos del Xokas por cuestionarle como se hace la paella valenciana. Otro caso aislado de violencia intrafamiliar que deja un víctima más este verano. ',
      fecha: '06/07/2025',
    },
    {
      titulo: 'El famoso deporte veraniego ya tiene olimpiadas',
      imagen:
        'https://img.redbull.com/images/c_crop,x_523,y_0,h_2086,w_1669/c_fill,w_450,h_600/q_auto:low,f_auto/redbullcom/2018/05/23/6fe4dc78-7071-4b03-956c-0f111fcc5f0c/red-bull-cliff-diving-balcon',
      texto:
        'El deporte conocido como "Balconing", ya cuenta con olimpiadas. Estas tomarán lugar en Oropesa del Mar, donde antiguamente se situaba Marina d`Or. Los más aficionados esperan una aplastante victoria Británica. ',
      fecha: '26/06/2050',
    },
  ];
}
