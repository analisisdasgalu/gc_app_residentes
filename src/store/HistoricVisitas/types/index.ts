export type VisitaHistorica {
  idVisita: string;
  fechaVisita: string;
  horaVisita: string;
  tipoVisita: string;
  tipoIngreso: string;
  emailAutor: string;
  casa: string;
  vehiculos: string[];
}

export interface IHistoricoVisitas {
  visitas: VisitaHistorica[];
} 
