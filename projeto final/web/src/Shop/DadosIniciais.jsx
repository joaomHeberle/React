const DadosIniciais = {
    itens: {
        'item-1': { id: 'item-1', conteudo: 'Poção', preço: 10 },
        'item-2': { id: 'item-2', conteudo: 'Cajado', preço: 20 },
        'item-3': { id: 'item-3', conteudo: 'Espada', preço: 3000 }
    },
    colunas: {
        'coluna-1': {
            id: 'coluna-1',
            titulo: 'Loja 1',
            itensId: ['item-1', 'item-2', 'item-3']
        },

        'coluna-2': {
            id: 'coluna-2',
            titulo: 'Inventario',
            itensId: []
        }
    },

    colunaOrdenacao: [ 'coluna-2','coluna-1'],
}

export default DadosIniciais;