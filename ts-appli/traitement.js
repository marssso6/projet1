"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var personne_1 = require("./personne");
var adresse_1 = require("./adresse");
var Enseignant = /** @class */ (function (_super) {
    __extends(Enseignant, _super);
    function Enseignant(nom, prenom, adresse, specialite, statut) {
        var _this = _super.call(this, nom, prenom, adresse) || this;
        _this.specialite = specialite;
        _this.statut = statut;
        return _this;
    }
    return Enseignant;
}(personne_1.Personne));
var adresse1 = new adresse_1.Adresse('44 rue lord kitchener', 'Le Havre', '77100');
var personne1 = new personne_1.Personne('Leroux', 'Marceau', adresse1);
var enseignant1 = new Enseignant('Smith', 'Jane', adresse1, 'Maths', 'present');
console.log(adresse1);
console.log(personne1);
console.log(enseignant1);
