export class Bijoux {
    id: any;
    type: string;
    forme: string;
    couleur: string;
    couleurdeux: string;
    couleurtrois: string;
    materiaux: string;
    materiauxdeux: string;
    materiauxtrois: string;
    prix: number;
    image: any;
    information: string;
    stock: number;

    constructor(
        id: any,
        type: string,
        forme: string,
        couleur: string,
        couleurdeux: string,
        couleurtrois: string,
        materiaux: string,
        materiauxdeux: string,
        materiauxtrois: string,
        prix: number, image: any,
        information: string,
        stock: number) {

        this.id = id;
        this.type = type;
        this.forme = forme;
        this.couleur = couleur;
        this.couleurdeux = couleurdeux;
        this.couleurtrois = couleurtrois;
        this.materiaux = materiaux;
        this.materiauxdeux = materiauxdeux;
        this.materiauxtrois = materiauxtrois;
        this.prix = prix;
        this.image = image;
        this.information = information;
        this.stock = stock;
    }
}
