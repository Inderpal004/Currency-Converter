let btn = document.getElementById('btn')

const popup = async (value, currency) => {
    let str = ""
    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_Hg98rcRczYVOEFtkkjduV0SNfM8U4NFiQS69Jyvy&base_currency=${currency}`
    document.querySelector('.resultCont').style.display = 'block'
    document.querySelector('.img').style.display = 'block'
    let data = await fetch(url)
    let results = await data.json()
    document.querySelector('.img').style.display = 'none'
    let tableBody = document.getElementById('tableBody')
    for (let currencyCode in results.data) {
        if (results.data.hasOwnProperty(currencyCode)) {
            let currency = results.data[currencyCode];
            str += ` <tr>
        <td>${currencyCode}</td>
      <td>${currency.code}</td>
      <td>${(currency.value) * value}</td>
  </tr>`
            tableBody.innerHTML = str
        }
    }
}

btn.addEventListener('click', (e) => {
    e.preventDefault()
    const value = parseInt(document.querySelector("input[name='quantity']").value)
    const currency = document.querySelector("select[name='currency']").value
    popup(value, currency)
})




