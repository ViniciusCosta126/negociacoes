export class Negociacao {
  constructor(
    public readonly _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const dataNova = new Date(this._data.getTime());
    return dataNova;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }
}
