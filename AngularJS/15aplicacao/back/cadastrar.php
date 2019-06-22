<?php

include("conexao.php");

$dados = json_decode(file_get_contents("php://input"));

$titulo = $dados->titulo;
$noticia = $dados->noticia;

$sql = "INSERT INTO noticia (titulo,noticia) VALUES ('$titulo','$noticia')";
mysqli_query($conectar, $sql);
