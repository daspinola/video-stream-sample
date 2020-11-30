document.addEventListener('DOMContentLoaded', init, false);

/** 
* You can manipulate the video here
* For example: Uncomment the code below and in the index to get a Start/Stop button
*/
function init() {
  const switchBtn = document.getElementById('btn-switch')
  const videoPlayer = document.getElementById('video-player')
  const videoPlayer2 = document.getElementById('video-player-2')

  switchBtn.addEventListener('click', () => {
    if (videoPlayer.paused) {
      videoPlayer2.pause()
      videoPlayer2.currentTime = 0
      videoPlayer2.style.display = 'none'
      videoPlayer.style.display = 'block'
      videoPlayer.play()
    } else {
      videoPlayer.pause()
      videoPlayer.currentTime = 0
      videoPlayer.style.display = 'none'
      videoPlayer2.style.display = 'block'
      videoPlayer2.play()
    }
  })
}
