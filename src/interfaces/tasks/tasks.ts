export interface ITaskCreate {
  title: string;
  description: string;
  status:
    | "A Fazer"
    | "Em Andamento"
    | "Bloqueada"
    | "Para Revisão"
    | "Concluída";
  priority: "Baixa" | "Média" | "Alta" | "Crítica";
  responsible: string;
}

export interface ITaskUpdate {
  title?: string;
  description?: string;
  status?:
    | "A Fazer"
    | "Em Andamento"
    | "Bloqueada"
    | "Para Revisão"
    | "Concluída";
  priority?: "Baixa" | "Média" | "Alta" | "Crítica";
  responsible?: string;
}
