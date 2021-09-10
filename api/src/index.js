





app.use(express.json());


app.get('/matricula', async (req,resp) => {
    try{
        let alunos = await db.tb_matricula.findAll({onder: [['id:matricula', 'desc']] });
        resp.send(alunos);
    } catch (e) {
        resp.send({erro: e.toString() })
    }
})

app.post('/matricula', async (req, resp) => {
    try {
        let {nome, chamada, curso, turma } = req.body;

        let r = await db.tb_matricula.create({
            nm_aluno: nome,
            nr_chamada: chamada,
            nm_curso
        })
    }
})