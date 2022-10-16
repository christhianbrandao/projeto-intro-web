let todosgases = [{
    elemento: "Hélio",
    Descoberto: 1868,
    Estavel: true,
    Aplicações: 'Utilizado em dirigíveis e balões, ressonância magnética também é usada no tratamento de Asma Grave.',
    fig: "img/helio.png",
    link: "https://pt.wikipedia.org/wiki/H%C3%A9lio"

},
{
    elemento: "Neônio",
    Descoberto: 1898,
    Estavel: true,
    Aplicações: 'Usado em tubo de neon ,Fonte luminosa para leitores de códigos de barras em lojas comerciais.',
    fig: 'img/neonio.png',
    link: "https://pt.wikipedia.org/wiki/N%C3%A9on"
},
{
    elemento: "Argonio",
    Descoberto: 1785,
    Estavel: true,
    Aplicações: 'Usado na recriação de atmosferas inertes. O laser de argonio tem usos médicos em odontologia e oftalmologia.',
    fig: 'img/argonio.png',
    link: "https://pt.wikipedia.org/wiki/%C3%81rgon"
},
{
    elemento: "Criptônio",
    Descoberto: 1898,
    Estavel: true,
    Aplicações: 'Usado em lâmpadas fluorescentes em sistemas de iluminação de aeroportos ,O laser de crípton é usado em medicina para cirurgia da retina do olho.',
    fig: "img/kriptonio.png",
    link: "https://pt.wikipedia.org/wiki/Cr%C3%ADpton"
},
{
    elemento: "Xenônio",
    Descoberto: 1898,
    Estavel: true,
    Aplicações: 'Usado em anestésicos, flashes fotográficos, tratamento medicamentoso no transtorno de pânico, depressão etc.',
    fig: "img/xenonio.png",
    link: "https://pt.wikipedia.org/wiki/Xen%C3%B4nio"
},
{
    elemento: "Radônio",
    Descoberto: 1899,
    Estavel: true,
    Aplicações: 'Usado em fonte de radiação em terapias contra o câncer, indicador radioativo para a detecção de fuga de gases.',
    fig: "img/randonio.png",
    link: "https://pt.wikipedia.org/wiki/R%C3%A1don"
}]





// if(gas1.Estavel===true){
//     todosgass.push(gas1)
// }if(gas2.Estavel===true){
//     todosgass.push(gas2)
// }if(gas3.Estavel===true){
//     todosgass.push(gas3)
// }if(gas4.Estavel===true){
//     todosgass.push(gas4)
// }if(gas5.Estavel===true){
//     todosgass.push(gas5)
// }if(gas6.Estavel===true){
//     todosgass.push(gas6)
// }else{alert('Só é permitido gas estavel')}

// console.log(todosgass)



// const string = (obj) => {
//     let str = `Elemento: ${obj.elemento.toUpperCase()}\nDescoberto em: ${obj.Descoberto}\nAplicações: ${obj.Aplicações}\nÉ Estavel? ${obj.Estavel}`
//     console.log(str)
// }
// console.log(str)




// for (let i = 0; i < todosgass.length; i++) {
//     let Aplicações1 = todosgass[i].Aplicações.join();
//     todosgass[i].Aplicações=Aplicações1
//     // console.log(todosgass)
// } 

const listContainer = document.querySelector('#list');

function render(cadaElemento) {
    let list = '';

    if (cadaElemento.length <= 0) {
        list += `<div id="sem-elementos">Nao encontramos elementos</div>`;
    } else {
        cadaElemento.forEach((conteudo) => {
            list += `
            <div class="card">
                <div class="card-image">
                    <img src="${conteudo.fig}" alt="imagens dos gases nobres">
                </div>
            <a href=${conteudo.link}>${conteudo.elemento}</a> - Descoberto em ${conteudo.Descoberto}</br>${conteudo.Aplicações}
        </div>
            `;
        });
    }

    listContainer.innerHTML = list;
}
render(todosgases)

const header = document.querySelector('#header');
const search = document.querySelector('#pesquisaInput');


// function barraDeBusca(pesquisa){
//     return todosgases.filter((elementos)=>{
//         return todosgases.elements.toLowerCase()
//     })
// }

function pesquisarQuandoSoltar(event) {
    const digitadoNaBarraDePesquisa = event.target.value;
    console.log(digitadoNaBarraDePesquisa)

    const resultado = filtroDosElementos(digitadoNaBarraDePesquisa)

    resultado.length > 0 ? render(resultado) : listContainer.innerHTML = `Nenhum elemento foi encontrado`
    if (digitadoNaBarraDePesquisa === '') {
        render(todosgases)
    }

}

function filtroDosElementos(elementoQueQueroProcurar) {
    return todosgases.filter((elementos) => {
        return elementos.elemento.toLowerCase().includes(elementoQueQueroProcurar.toLowerCase());
    })
}

search.addEventListener('keyup', pesquisarQuandoSoltar);