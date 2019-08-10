var HelloWorld = /** @class */ (function () {
    function HelloWorld() {
    }
    HelloWorld.prototype.mensagem = function () {
        alert("Hello world");
    };
    HelloWorld.prototype.mensagem2 = function (nome) {
        alert(nome);
    };
    return HelloWorld;
}());
