const getPhrases = () => {
  const frases = ['Sorria para quem você ama :)', 'Hidrate-se e coma frutas :)', 'Mande uma mensagem positiva para alguém :)', 'Sonhe alto e voe ainda mais alto :)', 'Viver é o dom mais precioso :)', 'Abraçe as oportunidades que o hoje te oferece :)'];
  let num = Math.floor(Math.random() * 6);
  frases.forEach((frase, i) => {
    if (i === num) {
      windDOM.innerText = frase;
    };
});
};

module.exports = getPhrases;