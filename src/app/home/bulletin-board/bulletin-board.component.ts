import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.scss']
})
export class BulletinBoardComponent implements OnInit {
  dataFilesList: {
    name: string;
    url: string;
    creationDate: Date;
  }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.dataFilesList = [
      {
        name: 'Avaliação TCC - 1 Orientador',
        url: 'http://www.ufal.edu.br/unidadeacademica/ic/graduacao/ciencia-da-computacao/documentos/avaliacao-tcc-1-orientador/at_download/file',
        creationDate: new Date()
      },
      {
        name: 'Avaliação TCC - 2 Orientadores',
        url: 'http://www.ufal.edu.br/unidadeacademica/ic/graduacao/ciencia-da-computacao/documentos/avaliacao-tcc-2-orientadores/at_download/file',
        creationDate: new Date()
      },
      {
        name: 'Aproveitamento de Estudo',
        url: 'http://www.ufal.edu.br/unidadeacademica/ic/graduacao/ciencia-da-computacao/documentos/aproveitamento-de-estudo/image_view_fullscreen',
        creationDate: new Date()
      }
    ]
  }

}
