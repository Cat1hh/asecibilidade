// Sons para diferentes tipos de alerta
const sounds = {
  green: new Audio('/alerta-verde.mp3'),
  orange: new Audio('/alerta-laranja.mp3'),
  red: new Audio('/alerta-vermelho.mp3'),
};

export function playAlertSound(type = 'red') {
  const audio = sounds[type] || sounds.red;
  audio.currentTime = 0;
  audio.play();
}
