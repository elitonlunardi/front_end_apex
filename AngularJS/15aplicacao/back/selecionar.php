<?php

//Conexão
include("conexao.php");

//SQL
$sql = "SELECT * FROM noticia";

//Executar o comando SQL
$executar = mysqli_query($conectar, $sql);

//Exibindo dados
$dados = "";
while ($indice = mysqli_fetch_assoc($executar)) {

    //Adicionar a vírgula se necessário
    if ($dados != "") {
        $dados .= ",";
    }

    $dados .= "{";
    $dados .= '"id":"' . $indice['id'] . '", ';

    $dados .= '"titulo":"' . $indice['titulo'] . '", ';
    $dados .= '"noticia":"' . $indice['noticia'] . '"';
    $dados .= "}";
}

//Complementar a variável dados
$dados = '{"registros":[' . $dados . ']}';

//Exibir a variável dadados
echo $dados;
