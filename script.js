var estado1 = {
    uf: 'PR',
    nome: 'Paraná',
    codigo: 200
}

var estado2 = {
    uf: 'SP',
    nome: 'São Paulo',
    codigo:400
}

var dados = [estado1,estado2];
var ths = ['UF','NOME ESTADO'];
var campos =['uf','nome'];


/*
    THS = nada mais são que os campos do cabeçalho da tabela. 
    idTabela = id da tag table HTML 
    dados = Vetor com o objeto do retorno da API
    campos = Quais atributos do objeto devem ser adicionados na tabela * IMPORTANTE PASSAR NA ORDEM DESEJADA * 
    idThead = id da tag thead HTML
    idTbody = id da tag tbody HTML
*/
async function populaTabela(ths,idTabela,dados,campos,idThead,idTbody){

    var tabela = document.getElementById(idTabela);

    var thead = document.getElementById(idThead);

    await criaThs(ths,thead);
    
    tabela.appendChild(thead);

    var tbody = document.getElementById(idTbody);

    await addDadosTabela(tbody,dados,campos);

    tabela.appendChild(tbody);

    
    await criaDataTable(idTabela);
    
    
  
}

//Função que cria o cabeçalho
async function criaThs(ths,thead){

    var tr = document.createElement('tr');
    for(let i=0; i<ths.length; i++){

        var th = document.createElement('th');
        th.innerText = `${ths[i]}`;
        
        tr.appendChild(th)
        thead.appendChild(tr);
    }
}

//Essa função vai varrer os dados passados e pegar somente o dados + o campo que deve ser adicionado.
async function addDadosTabela(tbody,dados,campos){


    for(let i=0; i<dados.length; i++){

        var tr = document.createElement('tr');

        for(let j=0; j<campos.length; j++){

            var td = document.createElement('td');
            td.innerText = dados[i][`${campos[j]}`];
            tr.appendChild(td);
            
            console.log(dados[i][`${campos[j]}`]);
        }

        tbody.appendChild(tr);
        
    }

}

//Função que cria a Tabela no padrão dataTable
async function criaDataTable(idTabela){
    $(`#${idTabela}`).DataTable();
}


populaTabela(ths,'tabela-estados',dados,campos,'thead-estados','body-table-estados');

