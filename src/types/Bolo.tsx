export interface Bolo {
    nome: string;
    id: string | undefined;
    categorias: string[];
    imagens: string[]; //lista de string é mostrada dessa forma
    preco: number;
    peso: number | null;
}