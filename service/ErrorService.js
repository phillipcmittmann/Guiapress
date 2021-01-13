module.exports = () => {
    contrat: (param) => 
        res.status(400).json({
            error: {
                message: `${param} is required or is on wrong format`,
                status: 400
            }
        })

    business: () => 
        res.status(422).json({
            error: {
                message: `Business error (???).`,
                status: 400
            }
        })

    notFound: (param) =>
        res.status(404).json({
            error: {
                message: `${param} not found`,
                status: 404
            }
        })

    created: (param) =>
        res.status(201).json({
            message: `${param} created successfully`,
            status: 202
        })

    ok: () =>
        res.status(200).json({
            message: 'OK',
            status: 200
        })
}

// 400 - erro de contrato (quando falta algum atributo required, atributo no formato errado)
// 422 - erro de negocio (depende de alguma coisa para fazer outra)
// 404 - nao encontrado
// 201 - created
// 200 - ok
// 503 - servico indisponivel
// 500 - internal server error