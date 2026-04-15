// Alerta sonoro de emergência
const alertAudio = new Audio('/alerta-emergencia.mp3');

export function playEmergencyAlertSound() {
  alertAudio.currentTime = 0;
  alertAudio.play();
}
