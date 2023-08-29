const piadaDiv=document.getElementById('piada');
const reacaoDiv=document.getElementById('reacao');

function testeApi(){
    axios.get('https://v2.jokeapi.dev/joke/Any?lang=pt')
    .then(response => {
        console.log(response.data.results)
        if (response.data.joke) {
            piadaDiv.innerHTML = `
                <p>${response.data.joke}</p>
            `;
        } else if (response.data.setup && response.data.delivery) {
            piadaDiv.innerHTML = `
                <p>${response.data.setup}</p>
                <p>${response.data.delivery}</p>
            `;
        }
        axios.get('https://dog.ceo/api/breeds/image/random')
                .then(response => {
                    const imageUrl = response.data.message;
                    reacaoDiv.innerHTML = `
                        <p>Reação:</p>
                        <img src="${imageUrl}" alt="Cão Reação">
                    `;
                })
                .catch(error => {
                    console.error('Erro na requisição de reação:', error);
                });
    })
    .catch(error => {
        console.error('Deu ruim', error);
    });
}
const chamaApi=document.getElementById('bt-gerarPiada');

chamaApi.addEventListener('click', () => {
    testeApi();
});

