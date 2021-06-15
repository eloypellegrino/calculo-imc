const buttonImc = document.querySelector('.imc-calc-button')
let imcResultText = document.querySelector('.imc-result')

buttonImc.addEventListener('click', () => {
    const weight = document.querySelector('#weight').value
    const height = document.querySelector('#height').value / 100
    const resultIcm = (weight / (height * height)).toFixed(2)
    console.log(resultIcm)

    const tds = document.querySelectorAll('td')
    for (const td of tds) {
        td.classList.remove('stageSelected')
    }

    if (resultIcm < 18.5) {
        imcResultText.innerHTML = `O seu IMC é ${resultIcm}, que significa <span class="imc-status">abaixo do peso</span>.`
        document.querySelector('.firstStage').classList.add('stageSelected')
    }

    if (resultIcm >= 18.5 && resultIcm < 25) {
        imcResultText.innerHTML = `O seu IMC é ${resultIcm}, que significa <span class="imc-status">peso normal</span>.`
        document.querySelector('.secondStage').classList.add('stageSelected')
    }

    if (resultIcm >= 25 && resultIcm < 30) {
        imcResultText.innerHTML = `O seu IMC é ${resultIcm}, que significa <span class="imc-status">sobrepeso</span>.`
        document.querySelector('.thirdStage').classList.add('stageSelected')
    }

    if (resultIcm >= 30 && resultIcm < 35) {
        imcResultText.innerHTML = `O seu IMC é ${resultIcm}, que significa <span class="imc-status">obesidade grau 1</span>.`
        document.querySelector('.fourthStage').classList.add('stageSelected')
    }

    if (resultIcm >= 35 && resultIcm < 40) {
        imcResultText.innerHTML = `O seu IMC é ${resultIcm}, que significa <span class="imc-status">obesidade grau 2</span>.`
        document.querySelector('.fifthStage').classList.add('stageSelected')
    }

    if (resultIcm >= 40) {
        imcResultText.innerHTML = `O seu IMC é ${resultIcm}, que significa <span class="imc-status">obesidade grau 3</span>.`
        document.querySelector('.sixthStage').classList.add('stageSelected')
    }
})