const form   = document.getElementById('qrForm');
const input  = document.getElementById('textInput');
const qrBox  = document.getElementById('qrcode');
const downloadBtn = document.getElementById('downloadBtn');

let qrInstance = null;

form.addEventListener('submit', e => {
  e.preventDefault();
  const data = input.value.trim();
  if (!data) return;

  // Limpiar QR previo
  qrBox.innerHTML = '';
  downloadBtn.classList.add('hidden');

  // Generar nuevo QR
  qrInstance = new QRCode(qrBox, {
    text: data,
    width: 256,
    height: 256,
    colorDark : '#000000',
    colorLight : '#ffffff',
    correctLevel : QRCode.CorrectLevel.H
  });

  // Mostrar botón de descarga cuando el QR esté renderizado
  setTimeout(() => {
    const qrImg = qrBox.querySelector('img');
    if (qrImg) {
      downloadBtn.href = qrImg.src;
      downloadBtn.download = 'codigo-qr.png';
      downloadBtn.classList.remove('hidden');
    }
  }, 300);
});