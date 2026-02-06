const imcSpecs={
        adulto:[
            {classifica: "Peso baixo",imc: 18.5 },
            {classifica: "Peso normal",imc: 24.9},
            {classifica: "Sobrepeso",imc: 29.9},
            {classifica: "Obesidade grau I",imc: 34.9},
            {classifica: "Obesidade grau II",imc: 39.9},
            {classifica: "Obesidade grau III",imc:40},
        ],
        idoso:[ 
            {classifica: "Peso baixo",imc: 22},
            {classifica: "Peso adequado",imc: 27},
            {classifica: "Excesso de peso",imc:27.1},
        ],
        menino:{
           idade:{
                5:[ 
                    {classifica: "Peso baixo",imc: 13.8},
                    {classifica: "Peso adequado",imc: 17.4},
                    {classifica: "Excesso de peso",imc:19.2},
                    {classifica: "Obesidade",imc:19.3}
                ],
                10:[
                    {classifica: "Peso baixo",imc: 14.2},
                    {classifica: "Peso adequado",imc: 19.1},
                    {classifica: "Excesso de peso",imc:21.5},
                    {classifica: "Obesidade",imc:21.6}
                ],
                15:[
                    {classifica: "Peso baixo",imc: 17.2},
                    {classifica: "Peso adequado",imc: 23.2},
                    {classifica: "Excesso de peso",imc:26},
                    {classifica: "Obesidade",imc:26.1}
                ],
           }
        },
        menina:{
            idade:{
                5:[ 
                    {classifica: "Peso baixo",imc: 13.6},
                    {classifica: "Peso adequado",imc: 17.1},
                    {classifica: "Excesso de peso",imc:18.9},
                    {classifica: "Obesidade",imc:19}
                ],
                10:[
                     {classifica: "Peso baixo",imc: 14},
                    {classifica: "Peso adequado",imc: 19},
                    {classifica: "Excesso de peso",imc:21.3},
                    {classifica: "Obesidade",imc:21.4}
                ],
                15:[
                    {classifica: "Peso baixo peso",imc: 17},
                    {classifica: "Peso adequado",imc: 24},
                    {classifica: "Excesso de peso",imc:26.7},
                    {classifica: "Obesidade",imc:26.8}
                ],
            }
        }
}

export default imcSpecs;