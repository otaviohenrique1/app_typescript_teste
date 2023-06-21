export class Calculadora {
  static CalculaMedida(a: number, b: number, c: number): number {
    // a-b
    // c-x
    // x = (b*c)/a
    return ((b * c) / a);
  }

  static CalculaMedidaFormatada(resultado: number): string {
    return resultado.toFixed(2).toString();
  }

  static PerimetroCirculo(valor: number): number {
    return (2 * Math.PI * valor);
  }

  static PerimetroCirculo2(valor: number): string {
    return Math.round((2 * Math.PI * valor)).toFixed(2).toString();
  }

  static Teorema_de_Pitagoras(cateto1: number, cateto2: number): number {
    return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
  }

  static Teorema_de_Pitagoras2(
    cateto1: number = 0,
    cateto2: number = 0,
    hipotenusa: number = 0): number {
    if (hipotenusa == 0) {
      return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)));
    } else if (cateto1 == 0) {
      return Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2)));
    } else if (cateto2 == 0) {
      return Math.sqrt((Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2)));
    }
    return 0;
  }

  static Teorema_de_Pitagoras3(cateto1: number, cateto2: number): string {
    return Math.round(Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2)))).toFixed(2).toString();
  }

  static Teorema_de_Pitagoras4(cateto1: number, cateto2: number): string {
    return Math.sqrt((Math.pow(cateto1, 2) + Math.pow(cateto2, 2))).toFixed(2).toString();
  }

  static FormataCalculo(valor: string[]): string {
    var resultado = valor.join(" -> ");
    return resultado;
  }

  static FormatadorFinal(valor: number, resultado: number, nome_medida: string): string {
    return this.FormataCalculo([
      nome_medida,
      valor.toString(),
      resultado.toString(),
      Math.round(resultado).toString()
    ]);
  }

  static CalculaListaMedidas(map: { nome: string; a: number; b: number; c: number; }[], a: number, b: number): void {
    map.forEach((item) => {
      console.log(Calculadora.FormatadorFinal(item.c, Calculadora.CalculaMedida(item.a, item.b, item.c), item.nome));
    });
  }

  static teoremaDePitagoras3(
    cateto1: number = 0,
    cateto2: number = 0,
    hipotenusa: number = 0
  ) {
    let resultado: number = 0;
    let nomeCampo: string = '';

    if (cateto1 == 0) {
      nomeCampo = 'Cateto 1';
      resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2));
      return {
        'nomeCampo': nomeCampo,
        'resultado': resultado,
      };
    } else if (cateto2 == 0) {
      nomeCampo = 'Cateto 2';
      resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2));
      return {
        'nomeCampo': nomeCampo,
        'resultado': resultado,
      };
    } else if (hipotenusa == 0) {
      nomeCampo = 'Hipotenusa';
      resultado = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
      return {
        'nomeCampo': nomeCampo,
        'resultado': resultado,
      };
    }
    // nomeCampo = '';
    return {
      'nomeCampo': '',
      'resultado': 0,
    };
  }

  static teoremaDePitagoras4(
    cateto1: number = 0,
    cateto2: number = 0,
    hipotenusa: number = 0,
  ) {
    let resultado: number = 0;
    let nomeCampo: string = '';

    if (cateto1 == 0) {
      nomeCampo = 'Cateto 1';
      resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto2, 2));
      return [nomeCampo, resultado];
    } else if (cateto2 == 0) {
      nomeCampo = 'Cateto 2';
      resultado = Math.sqrt(Math.pow(hipotenusa, 2) - Math.pow(cateto1, 2));
      return [nomeCampo, resultado];
    } else if (hipotenusa == 0) {
      nomeCampo = 'Hipotenusa';
      resultado = Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
      return [nomeCampo, resultado];
    }
    return ['', 0];
  }

  static equacao2Grau(
    a: number,
    b: number,
    c: number
  ) {
    /*
      Se Δ < 0, a equacao do segundo grau nao possui raizes reais;
      Se Δ = 0, a equacao do segundo grau possui uma raiz real;
      Se Δ > 0, a equacao do segundo grau possui duas raizes reais.
    */
    let delta: number = Math.pow(b, 2) - (4 * a * c);

    if (delta < 0) {
      return { "r": "nao possui raizes reais" };
    } else if (delta == 0) {
      let x = (-b + 0) / (2 * a);
      return { x };
    } else if (delta > 0) {
      let x1: number = (-b + Math.sqrt(delta)) / (2 * a);
      let x2: number = (-b - Math.sqrt(delta)) / (2 * a);
      return { x1, x2 };
    }
    return {"r": "Valor invalido"};
  }

  static geraNumero(tamanho: number) {
    return Math.floor(Math.random() * tamanho);
  }

  static geraListaNumerosEmString(tamanho: number) {
    let lista: number[] = [];
    for (var i = 0; i < tamanho; i++) {
      lista.push(Math.floor(Math.random() * 10));
    }
    let texto: string = lista.join();
    return texto;
  }
}

export function CalculaPerimetroCirculo(valor: number): void {
  let perimetroCirculo: number = Calculadora.PerimetroCirculo(valor);
  let resultadoImagem: string = Math.round(perimetroCirculo).toString();
  console.log(resultadoImagem);
}


export function numeroDivisivel(numero: number): string[] {
  let lista: string[] = [];
  for (let i = 1; i <= 9; i++) {
    lista.push(`${i} => ${(numero/(i)).toFixed(2)}`);
  }
  return lista;
}

export function numeroMultiplos(numero1: number, numero2: number): string[] {
  let lista: string[] = [];
  for (let i = 1; i <= numero2; i++) {
    lista.push(`${i} => ${(numero1*(i)).toFixed(2)}`);
  }
  return lista;
}
