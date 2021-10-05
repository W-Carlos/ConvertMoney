const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')

const convertValues = async () => {
    const inputReais = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-value-text')
    const currencyValueText = document.getElementById('currency-value-text')

    // Dados atualizados das moedas
    const data = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL").then(response => response.json())

    const dolar = data.USDBRL.high
    const euro = data.EURBRL.high
    const bitcoin = data.BTCBRL.high

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR',
        { style: 'currency', currency: 'BRL' }
    ).format(inputReais)

    if(select.value === "US$ Dólar americano") {
        currencyValueText.innerHTML = new Intl. NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(inputReais / dolar)

    }

    if(select.value === "€ Euro"){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'EUR' }
        ).format(inputReais / euro)
    }

    if(select.value === "Bitcoin"){
        currencyValueText.innerHTML = new Intl.NumberFormat('de-DE',
            { style: 'currency', currency: 'XBT' }
        ).format(inputReais / bitcoin)
    }
    
}

const changeCurrency = () => {
    const currencyName = document.getElementById('currency-name-text')
    const currencyImg =document.getElementById('currency-image')

    if(select.value === "US$ Dólar americano") {
        currencyName.innerHTML = 'Dólar Americano'
        currencyImg.src = 'assets/estados-unidos.svg'
    }

    if(select.value === "€ Euro") {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = 'assets/euro.svg'
    }

    if(select.value === "Bitcoin") {
        currencyName.innerHTML = 'Bitcoin'
        currencyImg.src = 'assets/bitcoin.svg'
    }

    convertValues()
}

button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency)