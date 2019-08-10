import { Component, OnInit } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { ModalComponent } from './modal/modal.component';
import { ModalState } from './modal/modalState';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  bsModalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  ngOnInit() {
  }

  abrirModal(modal: number) {
    var obj = this.infoModal(modal);
    const initialState = {
      title: obj.title,
      info: obj.info
    }
    this.bsModalRef = this.modalService.show(ModalComponent, { initialState });
    this.bsModalRef.content.closeBtnName = 'Fechar';
  }

  private infoModal(imgNumber: number): ModalState {
    var initialSate: ModalState;
    switch (imgNumber) {
      case 1:
        initialSate = new ModalState('Globo', 'Rede Globo é uma rede de televisão comercial aberta brasileira com sede na cidade do Rio de Janeiro. É assistida por mais de 200 milhões de pessoas diariamente, sejam elas no Brasil ou no exterior.');
        break;

      case 2:
        initialSate = new ModalState('Microsoft', 'Microsoft Corporation é uma empresa transnacional americana com sede em Redmond, Washington, que desenvolve, fabrica, licencia, apoia e vende softwares de computador, produtos eletrônicos, computadores e serviços pessoais.');
        break;

      case 3:
        initialSate = new ModalState('BBC', 'A British Broadcasting Corporation é uma corporação pública de rádio e televisão do Reino Unido fundada em 1922. Possui uma boa reputação nacional e internacional. Por vezes, é chamada afetuosamente pelos britânicos como Beeb, The Corporation ou Auntie.');
        break;


      case 4:
        initialSate = new ModalState('UOL', 'Universo Online, conhecido pela sigla UOL, é uma empresa brasileira de conteúdo, produtos e serviços de Internet do conglomerado Grupo Folha. Em 2017, foi considerado pela plataforma SimilarWeb o sexto site mais visitado da Internet no Brasil, atrás dos sites do Google e do Facebook.');
        break;

      case 5:
        initialSate = new ModalState('Calvin Klein', 'DescriçãoCalvin Klein Inc., nome legal de Calvin Klein também conhecida abreviadamente por CK é uma marca americana criada em 1968 pelo designer Calvin Klein. É especializada em couro, acessórios de estilo de vida, artigos de decoração, perfumaria, joalharia, relógios e pronto-a-vestir.');
        break;

      case 6:
        initialSate = new ModalState('Yahoo!', 'Yahoo! é um portal web sediado em Sunnyvale, Califórnia que é uma subsidiária integral da Verizon Communications através da Verizon Media. O Yahoo foi fundado por Jerry Yang e David Filo em janeiro de 1994 e foi incorporada em 2 de março de 1995.');
        break;

      case 7:
        initialSate = new ModalState('Ambev', 'DescriçãoA Cervejaria Ambev é uma empresa de capital aberto brasileira dedicada à produção de bebidas, entre as quais cerveja, refrigerantes, energéticos, sucos e chás.');
        break;

      case 8:
        initialSate = new ModalState('Nike', 'Nike, Inc. é uma empresa estadunidense de calçados, equipamentos esportivos, roupas, e acessórios fundada em 1964 por Bill Bowerman e Phillip Knight. A sua sede fica em Beaverton, no estado de Oregon, nos Estados Unidos.');
        break;
    }

    return initialSate;
  }

}
