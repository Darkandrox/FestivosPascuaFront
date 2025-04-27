export interface ClsFestivo {
  id: number;
  nombre: string;
  dia: number;
  mes: number;
  diasPascuas: number;
  idTipo: number;
  tipo: {
    id: number;
    nombre: string;
  };
}