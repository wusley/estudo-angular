"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ContatosListagemComponent = /** @class */ (function () {
    function ContatosListagemComponent(contatoService) {
        this.contatoService = contatoService;
    }
    ContatosListagemComponent.prototype.ngOnInit = function () {
        this.listar();
    };
    ContatosListagemComponent.prototype.listar = function () {
        var _this = this;
        this.contatoService.listar().subscribe(function (dados) {
            _this.hamsters = dados;
            console.log(_this.hamsters);
        });
    };
    ContatosListagemComponent = __decorate([
        core_1.Component({
            selector: 'app-contatos-listagem',
            templateUrl: './contatos-listagem.component.html',
            styleUrls: ['./contatos-listagem.component.scss']
        })
    ], ContatosListagemComponent);
    return ContatosListagemComponent;
}());
exports.ContatosListagemComponent = ContatosListagemComponent;
