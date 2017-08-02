import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class Dados {

  constructor(public storage: Storage) {}

  obterDados(){
    return this.storage.get('dados');
  }

  salvar(dados){

    let dadoModificado = JSON.stringify(dados); //CONVERTE OBJETO JAVASCRIPT EM STRING
    this.storage.set('dados', dadoModificado);

  }

  apagar(novaColecao){
    //return this.storage.remove('dados');
    let dadoModificado = JSON.stringify(novaColecao);
    this.storage.set('dados', dadoModificado);
    } 
  }
