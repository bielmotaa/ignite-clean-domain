import { randomUUID } from "node:crypto"

//vou usar essa classe agora para toda minha aplicacao quando eu quiser
// criar um id(seja no formato uuid ou outro) ou referenciar um id
export class UniqueEntityID {
  // private: de fora ninguem acessa id.value direto, so pelos metodos abaixo
  private value: string

  // o nome toString eh fixo do JavaScript: quando ele precisa transformar o objeto
  // em texto, chama esse metodo sozinho (ex: 'O id eh ' + id, `${id}`, String(id)).
  // sem ele, o texto seria "[object Object]"
  // exemplo:
  // const id = new UniqueEntityID('abc-123')
  // console.log('O id eh ' + id)   // "O id eh abc-123"  (o JS chamou id.toString() sozinho)
  toString() {
    return this.value
  }

  // devolve o valor do id. como o value eh private, esse eh o jeito de ler ele de fora.
  // eu chamo na mao: id.toValue()
  // o nome toValue eh escolha minha (poderia ser getValue), o JS nao conhece esse nome,
  // por isso ele nunca eh chamado sozinho, so quando eu escrevo
  // (diferente do toString, que o JS chama sozinho)
  // exemplo:
  // const id = new UniqueEntityID('abc-123')
  // const valor = id.toValue()   // "abc-123"  (eu chamei na mao)
  toValue() {
    return this.value
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }
}