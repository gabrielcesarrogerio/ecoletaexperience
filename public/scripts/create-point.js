
function populateufs() {
    const ufSelect=document.querySelector("select[name=uf]")
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then(res => res.json())
    //.then((res)=> {return res.json()}) //pode ser tb .then(res=> res.json()) se for só um "res" e quando for só uma linha de retorno // isso é uma função anonima que esta retornando um valor
    .then(states =>{
        for(state of states){
            ufSelect.innerHTML+= `<option value="${state.id}">${state.nome}</option>`
        }
    })
}
populateufs()

function getCities(event) {
    const citySelect=document.querySelector("[name=city]")
    const stateInput=document.querySelector("[name=state]")
    const ufValue = event.target.value
    const indexOfSelectedState= event.target.selectedIndex
    stateInput.value= event.target.options[indexOfSelectedState].text
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`
    citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
    citySelect.disabled = true
    fetch(url)
    .then(res => res.json() )
    .then(cities =>{
        for(const city of cities){
            citySelect.innerHTML+= `<option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false
    })
}

document.querySelector("select[name=uf]")
.addEventListener("change", getCities)

//itens de coleta
//pegar todos os li's
const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems = []

function handleSelectedItem(event){
    const itemLi = event.target
    //adicionar ou remover uma classe com js
    itemLi.classList.toggle("selected")
    const itemId = itemLi.dataset.id
    console.log('ITEM ID: ', itemId)
    //verificar se existem selecionados
    //se sim, pegar os itens selecionados
    const alreadySelected = selectedItems.findIndex( item => { //(function (item) é a mesma coisa que o que está, o que está só é mais simples. Isso é uma função anônima.
        //versao grande
        const itemFound = item == itemId //isso será true ou false
        return itemFound
        //versao simples
        //return = item == itemId
    })
    //se já estiver selecionado, tirar da seleção
    if(alreadySelected >=0){
        //tirar da seleção
        const filteredItems=selectedItems.filter(item =>{
            const itemIsDifferent = item != itemId //false
            return itemIsDifferent
        })
        selectedItems = filteredItems
    }
    //se não tiver selecionado, adicionar seleção 
    else{
        selectedItems.push(itemId)
    }
    console.log('selectedItems: ', selectedItems)
    //atualizar o campo escondido com os items selecionados
    //document.querySelector("input[name=items]")
    collectedItems.value=selectedItems
}