/*
let moedas = [
    {
        moedaCorrente : "Real",
        simbolo : "R$",
        fatorConversao : 1
    }
];
*/

let moedas = [
    {
        moedaCorrente: "Real",
        simbolo: "R$",
        imagem: "",
        link: "",
        periodoValidade: {
            inicio: "07/10/1833",
            fim: "07/10/1833" /* "Alvará s/n de 1/09/1808" */
        },
        fundamentoLegal: "Alvará s/n de 1/09/1808",
        equivalencia: "R 1$200 = 1/8 de ouro de 22K",
        fatorConversao: "1/(1000^5*2750)"
    },
    {
        moedaCorrente: "Mil-Réis",
        simbolo: "Rs",
        imagem: "",
        link: "",
        periodoValidade: {
            inicio: "08/10/1833",
            fim: "31/10/1942"
        },
        fundamentoLegal: "Lei nº 59, de 8/10/1833",
        equivalencia: "Rs 2$500 = 1/8 de ouro de 22K",
        fatorConversao: "1/(1000^4*2750)"
    },
    {
        moedaCorrente: "Cruzeiro",
        simbolo: "Cr$",
        imagem: "1942-11-01 Cruzeiro - Santos Dumont.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=SantosDumontCr10_000_00",
        periodoValidade: {
            inicio: "01/11/1942",
            fim: "30/11/1964"
        },
        fundamentoLegal: "Decreto-Lei nº 4791, de 5/10/1942",
        equivalencia: "Cr$ 1,00 = Rs 1$000 (1 cruzeiro corresponde a 1000 réis)",
        fatorConversao: "1/(1000^4*2750)"
    },
    {
        moedaCorrente: "Cruzeiro (eliminado os centavos)",
        simbolo: "Cr$",
        imagem: "1942-11-01 Cruzeiro - Santos Dumont.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=SantosDumontCr10_000_00",
        periodoValidade: {
            inicio: "01/12/1964",
            fim: "12/02/1967"
        },
        fundamentoLegal: "Lei nº 4511, de 12/12/1964",
        equivalencia: "Cr$ 1 = Cr$ 1,00",
        fatorConversao: "1/(1000^4*2750)"
    },
    {
        moedaCorrente: "Cruzeiro Novo (volta dos centavos)",
        simbolo: "NCr$",
        imagem: "1967-02-13 Cruzeiro Novo - Santos Dumont.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=SantosDumontNCr10-00",
        periodoValidade: {
            inicio: "13/02/1967",
            fim: "14/05/1970"
        },
        fundamentoLegal: "Decreto-Lei nº 1 de 13/11/1965",
        equivalencia: "1 NCr$ 1,00 = Cr$ 1.000",
        fatorConversao: "1/(1000^3*2750)"
    },
    {
        moedaCorrente: "Cruzeiro",
        simbolo: "Cr$",
        imagem: "1970-05-15 Cruzeiro - Juscelino Kubitschek.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=JuscelinoKubitschekCr100_000_00",
        periodoValidade: {
            inicio: "15/05/1970",
            fim: "14/08/1984"
        },
        fundamentoLegal: "Resolução do Banco Central nº 144, de 31/03/70",
        equivalencia: "Cr$ 1,00 = NCr$ 1,00",
        fatorConversao: "1/(1000^3*2750)"
    },
    {
        moedaCorrente: "Cruzeiro (eliminado os centavos)",
        simbolo: "Cr$",
        imagem: "1970-05-15 Cruzeiro - Juscelino Kubitschek.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=JuscelinoKubitschekCr100_000_00",
        periodoValidade: {
            inicio: "15/08/1984",
            fim: "27/02/1986"
        },
        fundamentoLegal: "Lei nº 7214, de 15/08/84",
        equivalencia: "Cr$ 1 = Cr$ 1,00",
        fatorConversao: "1/(1000^3*2750)"
    }
];

// Continuando o array de moedas
moedas.push(
    {
        moedaCorrente: "Cruzado I",
        simbolo: "Cz$",
        imagem: "1986-02-28 Cruzado - Carlos Chagas.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=CarlosChagasCz10_000_00",
        periodoValidade: {
            inicio: "28/02/1986",
            fim: "15/01/1989"
        },
        fundamentoLegal: "Decreto-Lei nº 2283, de 27/02/1986",
        equivalencia: "Cz$ 1,00 = Cr$ 1.000",
        fatorConversao: "1/(1000^2*2750)"
    },
    {
        moedaCorrente: "Cruzado II",
        simbolo: "NCz$",
        imagem: "1989-01-16 Cruzado Novo - Augusto Ruschi.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=AugustoRuschiNCz500_00",
        periodoValidade: {
            inicio: "06/01/1989",
            fim: "15/03/1990"
        },
        fundamentoLegal: "Medida Provisória nº 32, de 15/01/1989, convertida em Lei nº 7730, de 31/01/1989",
        equivalencia: "NCz$ 1,00 = Cz$ 1.000,00",
        fatorConversao: "1/(1000*2750)"
    },
    {
        moedaCorrente: "Color I - Mar 1990 Color II Cruzeiro",
        simbolo: "Cr$",
        imagem: "1990-03-16 Cruzeiro - Mario de Andrade.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=MariodeAndradeCr500_000_00",
        periodoValidade: {
            inicio: "16/03/1990",
            fim: "31/07/1993"
        },
        fundamentoLegal: "Medida Provisória nº 168, de 15/03/1990, convertida na Lei nº 8024, de 12/04/1990",
        equivalencia: "Cr$ 1,00 = NCz$ 1,00",
        fatorConversao: "1/(1000*2750)"
    },
    {
        moedaCorrente: "Transição para o Real - Ago 1993",
        simbolo: "CR$",
        imagem: "1993-08-01 Cruzeiro Real - baiana.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=BaianaCR50_000_00",
        periodoValidade: {
            inicio: "01/08/1993",
            fim: "30/06/1994"
        },
        fundamentoLegal: "Lei nº 8697, de 27/08/1993, e Resolução BACEN nº 2010, de 28/07/1993",
        equivalencia: "CR$ 1,00 = Cr$ 1.000,00",
        fatorConversao: "1/2750"
    },
    {
        moedaCorrente: "Real",
        simbolo: "R$",
        imagem: "1994-07-01 Segunda Família do Real - lobo guará.jpg",
        link: "https://www.bcb.gov.br/cedulasemoedas/cedulasemitidas?modalAberto=EfigiedaRepublicaR200_2_familia",
        periodoValidade: {
            inicio: "01/07/1994",
            fim: "atual"
        }, // Considerando o Real como a moeda atual
        fundamentoLegal: "Leis nº 8880, de 27/05/1994, e 9069, de 29/06/1995",
        equivalencia: "R$ 1,00 = CR$ 2.750,00",
        fatorConversao: 1
    }
);