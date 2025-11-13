export const formatosService = {
    PrecoBR:(preco: number): string => {
        return `${preco.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL' //currency é moeda
        })}` //para transformar seu numero em moeda
    },
    PesoEmKg: (valorPeso: number): string => {
        return `${valorPeso.toLocaleString('pt-BR', {minimumFractionDigits: 3})} Kg`
    }
} //para transformar seu numero em kg 