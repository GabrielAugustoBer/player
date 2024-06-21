document.addEventListener("DOMContentLoaded", function() {
    // Defina o link do áudio diretamente aqui
    var audioUrl = "https://9462.brasilstream.com.br/mp3";
    
    // Cria um objeto de áudio
    var audioPlayer = new Audio(audioUrl);

    audioPlayer.volume = 0.3;
    
    // Adiciona evento ao botão de reprodução
    var playButton = document.getElementById('playButton');
    playButton.addEventListener('click', function() {
        audioPlayer.play();
    });
    
    // Adiciona evento ao botão de pausa
    var pauseButton = document.getElementById('pauseButton');
    pauseButton.addEventListener('click', function() {
        audioPlayer.pause();
    });
});
