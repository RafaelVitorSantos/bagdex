var x = 1
var loop = 1

var pokemonsName = ["VOARA", "AZURARA", "ARARAZUL", "PEQUEMICO", "MICORADO",
    "DORALEÃO", "CAPI", "VARACAPI", "CAPILORDE", "TAMANDUÍ", "TAMIRIM", "LUTANDUÁ",
    "CARALATA", "CARAMELO", "VIRAMELO", "IAÇÁ", "AÇAÍNE", "NANÁ", "GUARANIN", "BEBOTO",
    "BODUTOR", "LAGUITO", "DURITO", "BANSQUITO", "CHANIN", "FOFILHO", "SLICURAU", "PAMONHANA",
    "JONDI", "BOJARRO", "BENJA", "BENJAMAIS", "BENJAMUITOS", "PONDI", "DIQUEIJOS", "BESARELA",
    "BESERCULES", "JULICAC", "CAQUILETE", "GRAFÉ", "TORRAFÉ", "CAFASMA", "DURATISTA", "DUTRINO",
    "DURAÍBA", "ZÉGOTI", "PFIZEGATOR", "JACAREVAC", "ASTRACARÉ", "COLOTE", "CAJAÇA", "VÊIGUERREIRO",
    "BISCOLACHA", "BOLACHOITO", "RATINRRATO", "RATOBUM", "CUSCUTE", "MONSTRUZ", "QUEROKERO",
    "QUEROCAOS", "BEMTEVI", "BEMTEVEREI", "BEMTEVEJO", "PREGAINA", "LARGATA", "CASULETA",
    "BORBOLETO", "BRABULETA", "UVISIER", "SANSOELHO", "COXITA", "PASFEIRA", "CALDICANA",
    "PEQUITIXA", "CALANQUI", "PETEIÚ", "BEZETA", "CARAPRETA", "BEZELA", "VACARELA", "CAPRITIDOS",
    "SAPOEIRA", "JIUSAPO", "CAPAGAZ", "CARCEGO", "MORGANCA", "BEEBOLVO", "OCTEDDY", "TAZUM",
    "MONTAZO", "FANTAZO", "FEIJOTE", "BANLOIRA", "MAMUNA", "MANTRIO", "MASSINAS", "JUBARÁ", "JOSORÉ",
    "FIXUXO", "TXUCÃO", "CHIFÍBIO", "SAPARRÃO", "CHIMARRÃ", "TERERECA", "SIN", "SALABIN", "ZIRIGUIDUM",
    "ELECBOL", "BRAZORB", "DONCORVO", "CANARIN", "PISTOLIN", "TATULECO", "TATUNASTRA", "TUPIN",
    "VOLPINIQUIN", "FLORINIQUIN", "HIDRONIQUIN", "BRASANIQUIN", "TITANIQUIN", "URUMENGO", "CEBRUTIUS",
    "DIGUIDIM", "ORCANTOS", "PORMEIRAS", "SANTAULO", "MOSQUIÃO", "PEIXUANÃ", "PIRARUPEIXE", "IMPERÁTILUS",
    "IRRITATOR", "CELECONDA", "SUCULESTE", "URSOCOTOM", "ARAUPINHA", "ARAUBROTO", "ARAUFORTE", "XUNAVE",
    "CRISTALUNA", "SEREIARA", "PIROPIRA", "SACERÊ", "COBRATÁ", "MULANTÃ", "MAPINGUÁ", "LOGUARÁ", "IAGUARÁ",
    "VELOPYA", "GAMBIARROS", "BILU", "BIVALDO"]

var pokemonsTipo = ["PLANTA", "PLANTA & VOADOR", "PLANTA & VOADOR", "FOGO", "FOGO", "FOGO & AÇO", "ÁGUA",
    "ÁGUA", "ÁGUA & PEDRA", "TERRA", "TERRA", "TERRA & LUTADOR", "NORMAL", "NORMAL", "NORMAL & PSÍQUICO",
    "PLANTA", "PLANTA & LUTADOR", "PLANTA", "PLANTA & PSÍQUICO", "ÁGUA", "ÁGUA & PSÍQUICO", "INSETO",
    "INSETO", "INSETO & ÁGUA & VOADOR", "NORMAL", "PLANTA", "PLANTA", "PLANTA & FADA", "TERRA & VOADOR",
    "TERRA & VOADOR & ÁGUA", "SINTÉTICO & ELÉTRICO", "SINTÉTICO & ELÉTRICO", "SINTÉTICO & ELÉTRICO & FOGO",
    "FADA", "FADA", "INSETO & VOADOR", "INSETO & AÇO & VOADOR", "PLANTA & TERRA", "PLANTA & TERRA",
    "PLANTA", "PLANTA & FOGO", "PLANTA & FOGO & FANTASMA", "PEDRA", "PEDRA", "PEDRA & PSÍQUICO", "FADA",
    "ÁGUA", "ÁGUA", "ÁGUA", "SINTÉTICO & FADA", "SINTÉTICO & FADA", "SINTÉTICO & FADA & LUTADOR",
    "NORMAL & LUTADOR", "NORMAL & LUTADOR", "ELÉTRICO & ÁGUA", "ELÉTRICO & ÁGUA", "PLANTA", "PLANTA",
    "VOADOR", "VOADOR & SOMBRIO", "VOADOR & SOM", "VOADOR & SOM", "VOADOR & SOM", "FANTASMA E VOADOR",
    "INSETO", "INSETO", "INSETO & VOADOR", "INSETO & VOADOR", "PLANTA & ELÉTRICO", "FADA & VOADOR",
    "FADA & LUTADOR", "FADA & FOGO", "FANTASMA & PLANTA", "DRAGÃO & PLANTA", "DRAGÃO & PLANTA",
    "DRAGÃO & PLANTA", "NORMAL", "NORMAL", "NORMAL", "NORMAL", "NORMAL & FADA", "LUTADOR & VENENOSO",
    "LUTADOR & VENENOSO", "FANTASMAS & VENENOSO", "VOADOR & SOMBRIO & SOM", "VOADOR & SOMBRIO & SOM", "ÁGUA & PEDRA",
    "ÁGUA & SOM", "SINTÉTICO & VOADOR", "SINTÉTICO & VOADOR", "SINTÉTICO & VOADOR & FANTASMA", "FANTASMA & GELO",
    "FANTASMA & ÁGUA", "PLANTA & VENENOSO", "PLANTA & VENENOSO", "PLANTA & VENENOSO & SOM", "NORMAL & VOADOR",
    "NORMAL & VOADOR", "NORMAL", "NORMAL", "PLANTA & VENENOSO", "PLANTA & VENENOSO", "PLANTA & VENENOSO",
    "PLANTA & VENENOSO & GELO", "PSÍQUICO", "PSÍQUICO", "PSÍQUICO & SOM", "SINTÉTICO & ELÉTRICO", "SINTÉTICO & ELÉTRICO",
    "ÁGUA & VOADOR", "NORMAL & VOADOR", "LUTADOR & VOADOR", "TERRA & PEDRA", "TERRA & PEDRA", "VOADOR & NORMAL",
    "VOADOR & ELÉTRICO", "VOADOR & PLANTA", "VOADOR & ÁGUA", "VOADOR & FOGO", "VOADOR & AÇO", "VOADOR & SOMBRIO",
    "SINTÉTICO & AÇO & SOM", "SINTÉTICO & AÇO & SOM", "ÁGUA & GELO", "PLANTA & TERRA", "PSÍQUICO & FADA", "VOADOR & AÇO",
    "ÁGUA", "ÁGUA & SOMBRIO", "DRAGÃO & ELÉTRICO & SOM", "PEDRA & ÁGUA", "PLANTA", "PLANTA & PSÍQUICO", "NORMAL", "PLANTA",
    "PLANTA", "PLANTA & LUTADOR", "CÓSMICO & AÇO", "CÓSMICO & FADA", "ÁGUA & PSÍQUICO & SOM", "PLANTA & FOGO",
    "VOADOR & PSÍQUICO", "FOGO & SOMBRIO", "FOGO & FANTASMA", "LUTADOR & TERRA", "TERRA & SOMBRIO", "AÇO & SOMBRIO",
    "VOADOR & SOMBRIO", "SINTÉTICO & SOMBRIO", "CÓSMICO & PSÍQUICO", "CÓSMICO & PSIQUICO"]

function Proximo() {
    if (this.x < 150) {
        this.x += 1
        BuscarID()
        var imagemAntes = 'imagem/' + (this.x - 1) + '.jpg'
        var imagemDepois = 'imagem/' + (this.x + 1) + '.jpg'
        var nome = 'imagem/' + this.x + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome()
    } else if (this.x == 150) {
        this.x += 1
        BuscarID()
        var imagemAntes = 'imagem/' + 150 + '.jpg'
        var imagemDepois = 'imagem/' + 1 + '.jpg'
        var nome = 'imagem/' + 151 + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome5()
    } else if (this.x == 1) {
        this.x += 1
        BuscarID()
        var nome = 'imagem/' + 1 + '.jpg'
        var imagemAntes = 'imagem/' + 151 + '.jpg'
        var imagemDepois = 'imagem/' + 2 + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome6()
    } else {
        this.x = 1
        BuscarID()
        var nome = 'imagem/' + 1 + '.jpg'
        var imagemAntes = 'imagem/' + 151 + '.jpg'
        var imagemDepois = 'imagem/' + 2 + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome2()
    }
    animation()
}

function Anterior() {
    if (this.x > 2) {
        this.x -= 1
        BuscarID()
        var nome = 'imagem/' + this.x + '.jpg'
        var imagemAntes = 'imagem/' + (this.x - 1) + '.jpg'
        var imagemDepois = 'imagem/' + (this.x + 1) + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome()
    } else if (this.x == 151) {
        this.x -= 1
        BuscarID()
        var imagemAntes = 'imagem/' + 150 + '.jpg'
        var imagemDepois = 'imagem/' + 1 + '.jpg'
        var nome = 'imagem/' + 151 + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome5()
    } else if (this.x == 2) {
        this.x -= 1
        BuscarID()
        var nome = 'imagem/' + 1 + '.jpg'
        var imagemAntes = 'imagem/' + 151 + '.jpg'
        var imagemDepois = 'imagem/' + 2 + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome6()
    } else {
        this.x = 151
        BuscarID()
        var nome = 'imagem/' + 151 + '.jpg'
        var imagemAntes = 'imagem/' + 150 + '.jpg'
        var imagemDepois = 'imagem/' + 1 + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome3()
    }
    animation()
}

function Buscar(nameID) {
    if (pokemonsName.includes(nameID)) {
        this.x = (pokemonsName.indexOf(nameID) + 1)
        if (this.x == 151) {
            this.x = 151
            BuscarID()
            var imagemAntes = 'imagem/' + 150 + '.jpg'
            var imagemDepois = 'imagem/' + 1 + '.jpg'
            var nome = 'imagem/' + 151 + '.jpg'
            InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
            VerificarNome3()

        } else if (this == 1) {
            this.x = 1
            BuscarID()
            var nome = 'imagem/' + 1 + '.jpg'
            var imagemAntes = 'imagem/' + 151 + '.jpg'
            var imagemDepois = 'imagem/' + 2 + '.jpg'
            InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
            VerificarNome2()
        }

        BuscarID()
        var nome = 'imagem/' + this.x + '.jpg'
        var imagemAntes = 'imagem/' + (this.x - 1) + '.jpg'
        var imagemDepois = 'imagem/' + (this.x + 1) + '.jpg'
        InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
        VerificarNome4()
    } else if (parseFloat(nameID) >= 1 && parseFloat(nameID) <= 151) {
        if (parseFloat(nameID) == 151) {
            this.x = 151
            BuscarID()
            var imagemAntes = 'imagem/' + 150 + '.jpg'
            var imagemDepois = 'imagem/' + 1 + '.jpg'
            var nome = 'imagem/' + 151 + '.jpg'
            InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
            VerificarNome3()
        } else if (parseFloat(nameID) == 1) {
            this.x = 1
            BuscarID()
            var nome = 'imagem/' + 1 + '.jpg'
            var imagemAntes = 'imagem/' + 151 + '.jpg'
            var imagemDepois = 'imagem/' + 2 + '.jpg'
            InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
            VerificarNome2()
        } else {
            this.x = parseFloat(nameID)
            BuscarID()
            var nome = 'imagem/' + this.x + '.jpg'
            var imagemAntes = 'imagem/' + (this.x - 1) + '.jpg'
            var imagemDepois = 'imagem/' + (this.x + 1) + '.jpg'
            InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois)
            VerificarNome()
        }
    } else {
        alert('A BágDex possui 151 bagmons \n tente novamente!!! \n Sua tentativa foi: ' + nameID)
    }
    animation()
}

function BuscarID() {
    return antes = document.querySelector("#imageAnterior"),
        depois = document.querySelector("#imageProximo"),
        img = document.querySelector("#image")
}
function InserirImagem(antes, depois, img, nome, imagemAntes, imagemDepois) {
    img.setAttribute('src', nome)
    antes.setAttribute('src', imagemAntes)
    depois.setAttribute('src', imagemDepois)
}
function VerificarNome() {
    document.getElementById('nome').innerHTML = pokemonsName[this.x - 1]
    document.getElementById('tipo').innerHTML = pokemonsTipo[this.x - 1]

    document.getElementById('nomeAnterior').innerHTML = pokemonsName[this.x - 2]
    document.getElementById('tipoAnterior').innerHTML = pokemonsTipo[this.x - 2]

    document.getElementById('nomeProximo').innerHTML = pokemonsName[this.x]
    document.getElementById('tipoProximo').innerHTML = pokemonsTipo[this.x]
}

function VerificarNome2() {
    document.getElementById('nome').innerHTML = pokemonsName[0]
    document.getElementById('tipo').innerHTML = pokemonsTipo[0]

    document.getElementById('nomeAnterior').innerHTML = pokemonsName[150]
    document.getElementById('tipoAnterior').innerHTML = pokemonsTipo[150]

    document.getElementById('nomeProximo').innerHTML = pokemonsName[1]
    document.getElementById('tipoProximo').innerHTML = pokemonsTipo[1]
}

function VerificarNome3() {
    document.getElementById('nome').innerHTML = pokemonsName[150]
    document.getElementById('tipo').innerHTML = pokemonsTipo[150]

    document.getElementById('nomeAnterior').innerHTML = pokemonsName[149]
    document.getElementById('tipoAnterior').innerHTML = pokemonsTipo[149]

    document.getElementById('nomeProximo').innerHTML = pokemonsName[0]
    document.getElementById('tipoProximo').innerHTML = pokemonsTipo[0]
}
function VerificarNome4() {
    document.getElementById('nome').innerHTML = pokemonsName[pokemonsName.indexOf(nameID)]
    document.getElementById('tipo').innerHTML = pokemonsTipo[pokemonsName.indexOf(nameID)]

    document.getElementById('nomeAnterior').innerHTML = pokemonsName[pokemonsName.indexOf(nameID) - 1]
    document.getElementById('tipoAnterior').innerHTML = pokemonsTipo[pokemonsName.indexOf(nameID) - 1]

    document.getElementById('nomeProximo').innerHTML = pokemonsName[pokemonsName.indexOf(nameID) + 1]
    document.getElementById('tipoProximo').innerHTML = pokemonsTipo[pokemonsName.indexOf(nameID) + 1]

}

function VerificarNome5() {
    document.getElementById('nome').innerHTML = pokemonsName[150]
    document.getElementById('tipo').innerHTML = pokemonsTipo[150]

    document.getElementById('nomeAnterior').innerHTML = pokemonsName[149]
    document.getElementById('tipoAnterior').innerHTML = pokemonsTipo[149]

    document.getElementById('nomeProximo').innerHTML = pokemonsName[0]
    document.getElementById('tipoProximo').innerHTML = pokemonsTipo[0]
}

function VerificarNome6() {
    document.getElementById('nome').innerHTML = pokemonsName[0]
    document.getElementById('tipo').innerHTML = pokemonsTipo[0]

    document.getElementById('nomeAnterior').innerHTML = pokemonsName[150]
    document.getElementById('tipoAnterior').innerHTML = pokemonsTipo[150]

    document.getElementById('nomeProximo').innerHTML = pokemonsName[1]
    document.getElementById('tipoProximo').innerHTML = pokemonsTipo[1]
}

var y = 1
function animation() {
    if (this.y == 1) {
        document.getElementById('background-mid').classList.add('shake-animation');
        setTimeout(() => {
            document.getElementById('background-mid').classList.remove('shake-animation');
        }, 200)
    }
}