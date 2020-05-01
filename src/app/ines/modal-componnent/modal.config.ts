export const modalTypesConfig = {
    'creation-affaire': {
        class: 'success',
        message: 'Votre affaire a été crée avec succès.',
        action: 'Revenir à mes affaires',
        callback: 'creation-affaire',
        cancel: false
    },
    'erreur-generique': {
        class: 'error',
        message: 'Une erreur est survenue.<br>Veuillez réessayer plus tard. ',
        action: 'Quitter',
        callback: 'generic-erreur',
        cancel: false
    },
    'succes-postCharge': {
        class: 'success',
        message: 'Article ajouté au panier.',
        // tslint:disable-next-line: object-literal-key-quotes
        'action': 'C\'est noté',
        callback: 'succes-postCharge',
        cancel: false
    },
    'succes-connexion': {
        class: 'success',
        message: 'Bonjour Florence ',
        action: 'A toi de jouer',
        callback: 'succes-connexion',
        cancel: false
    },
    'erreur-connexion': {
        class: 'error',
        message: 'Identifiant incorrect / tracage INP activé...',
        // tslint:disable-next-line: object-literal-key-quotes
        'action': 'C\'est noté',
        callback: 'erreur-connexion',
        cancel: false
    },
    'panier-vide': {
        class: 'error',
        message: 'Le panier est vide',
        // tslint:disable-next-line: object-literal-key-quotes
        'action': 'C\'est noté',
        callback: 'panier-vide',
        cancel: false
    },
    'error-system': {
        class: 'error',
        message: 'Erreur systeme, faire CTRL + F5',
        // tslint:disable-next-line: object-literal-key-quotes
        'action': 'C\'est noté',
        callback: 'error-system',
        cancel: false
    },
    'succes-suppression': {
        class: 'success',
        message: 'Bijoux supprimer avec succés ',
        action: 'ok',
        callback: 'succes-suppression',
        cancel: false
    },
    'echec-suppression': {
        class: 'error',
        message: 'Echec de la suppression ',
        action: 'Plus tard',
        callback: 'echec-suppression',
        cancel: false
    },
    'ajout-bijoux': {
        class: 'success',
        message: 'Ajout du bijoux dans la dataBase ',
        action: 'Bon boulot',
        callback: 'ajout-bijoux',
        cancel: false
    },
    'echec-ajout-bijoux': {
        class: 'error',
        message: 'Echec de l\'ajout, CRTL + F5 ',
        action: 'jonathandelaosa@gmail.com',
        callback: 'echec-ajout-bijoux',
        cancel: false
    },
    'update-bijoux': {
        class: 'success',
        message: 'Modification du bijoux dans la dataBase ',
        action: 'Bon boulot',
        callback: 'update-bijoux',
        cancel: false
    },
    'noupdate-bijoux': {
        class: 'success',
        message: 'Erreur de Modification du bijoux dans la dataBase ',
        action: 'Bon boulot',
        callback: 'noupdate-bijoux',
        cancel: false
    },
};
