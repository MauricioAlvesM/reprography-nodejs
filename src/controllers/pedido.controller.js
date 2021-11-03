const pedidoService = require("../services/pedido.service");
const servicoService = require("../services/servico.service")

module.exports = {

    ////ADMIN

    //GET 

    //Buscar todos os pedidos da tabela pedido
    buscarTodos: async (req, res, next) => {
        var { rated } = req.params;

        if (rated == 1) {
            rated = [1, 2]
        }
        else if (rated == 0) {
            rated = [0, 0]
        }
        else {
            return res.json({ message: "Insira um parâmetro válido!" })
        }

        var pedidos = await pedidoService.findAllRated(rated);

        if (pedidos.length < 1) {
            return res.json({ message: "Nenhum pedido encontrado!" })
        }
        return res.json(pedidos);
    },

    buscarPorNome: async (req, res, next) => {
        // const query = `%${req.query.search}`;
        var pedidos = await pedidoService.findByName(req.params.pedido);
        if (pedidos.length < 1) {
            return res.json({ message: "Nenhum pedido encontrado!" })
        }
        return res.json(pedidos);
    },

    //Buscar os pedidos por ID do pedido
    buscarPorIdPedido: async (req, res, next) => {
        var pedidos = await pedidoService.findByPk(req.params.id);
        if (pedidos == null) {
            return res.json({ message: "Pedido não encontrado!" })
        }
        return res.json(pedidos);
    },

    //Todos os pedidos feito por tal pessoa (nif)
    buscarPorNif: async (req, res, next) => {
        const pedidos = await pedidoService.findAllRatedbyNif(req.params.nif, [0, 1, 2]);

        if (pedidos.length < 1) {
            return res.json({ message: "Nenhum pedido encontrado!" })
        }
        return res.json(pedidos);
    },


    ////Usuário Comum 

    //GET

    //Todos os pedidos feito pelo usuário LOGADO!
    meusPedidos: async (req, res, next) => {
        var { rated } = req.params;

        if (rated == 1) {
            rated = [1, 2]
        }
        else if (rated == 0) {
            rated = [0, 0]
        }
        else {
            return res.json({ message: "Insira um parâmetro válido!" })
        }

        var pedidos = await pedidoService.findAllRatedbyNif(req.user.nif, rated);

        if (pedidos.length < 1) {
            return res.json({ message: "Nenhum pedido encontrado!" })
        }
        return res.json(pedidos)
    },

    //POST


    //Adicionar pedido com detalhe solicitado por nif (usuario)
    adicionar: async (req, res) => {
        //Input que será enviado para tabela Pedido
        const { centro_custos, titulo_pedido, modo_envio, curso } = req.body;

        // Input que será enviado para tabela Det_Pedido
        const { num_copias, num_paginas, servicoCT, servicoCA, observacoes } = req.body;

        var custo_total = [(num_copias * num_paginas) * req.sub_total];

        //Inserindo um pedido e seus detalhes/serviços:
        await pedidoService.pedidoCreate({
            param: {
                titulo_pedido: titulo_pedido, nif: req.user.nif, id_modo_envio: modo_envio,
                id_avaliacao_pedido: 0, avaliacao_obs: null, custo_total: custo_total,
                det_pedidos: {
                    id_centro_custos: centro_custos, id_curso: curso, num_copias: num_copias,
                    num_paginas: num_paginas, observacoes: observacoes, sub_total_copias: req.sub_total
                },
            }

        }).then(pedido => {
            req.id = pedido.id_pedido; //Será passado para identificar o ID do pedido no e-mail... 
            pedidoService.tableMidCreate({
                param: {
                    pedidoId: pedido.id_pedido,
                    servicoCT: servicoCT,
                    servicoCA: servicoCA
                }
            }).then(async servico => {
                if (servico.servicoCT == 5 || servico.servicoCT == 6) {
                    await servicoService.serviceDecrement({ type: "ct", number: [5, 6], param: (num_copias * num_paginas) });
                }
                else {
                    await servicoService.serviceDecrement({ type: "ct", number: [servicoCT, servicoCT], param: (num_copias * num_paginas) });
                }
                await servicoService.serviceDecrement({ type: "ca", number: [servicoCA, servicoCA], param: (num_copias * num_paginas) });
                return res.json({ message: "Pedido realizado com sucesso!" });
            })
        });
    },


    //PUT

    alterarAvaliacao: async (req, res, next) => {
        var { id_avaliacao_pedido, avaliacao_obs } = req.body;

        if (!id_avaliacao_pedido) {
            return res.json({ error: "Informe se o pedido lhe atendeu ou não, por favor!" })
        }

        var pedidos = await pedidoService.findByPk(req.params.id);

        if (pedidos == null) {
            return res.json({ message: "Esse pedido não existe!" });
        }

        if (pedidos.id_avaliacao_pedido !== 0) {
            return res.json({ message: "Esse pedido já foi avaliado!" });
        }

        if (req.user.nif === pedidos.nif) {
            await pedidoService.updateRequest({ request: pedidos, param: { id_avaliacao_pedido, avaliacao_obs } });
            res.status(200).json({ message: `Avaliação do pedido ${req.params.id} atualizada com sucesso!` });

            // req.avaliacao_obs = avaliacao_obs; //Passando mensagem para requisição, para podermos usar em outras etapas da requisição (mailer.EnviaEmail)
            // req.titulo_pedido = pedidos.titulo_pedido; //Titulo do pedido que foi atualizado
            // req.id = pedidos.id_pedido; //ID do pedido que foi atualizado
            // req.nif = pedidos.nif; // NIF do usuário que atualizou o pedido
            // next();
            return;
        }
        else {
            return res.json({ error: "Você só pode alterar a avaliação de um pedido feito pelo seu usuário" });
        }
    }
}