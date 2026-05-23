let currentAudio = null

export function playAudio(path) {
  stopAudio()
  const audio = new Audio(path)
  currentAudio = audio
  audio.play().catch(() => {
    currentAudio = null
  })
  return audio
}

export function stopAudio() {
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
}

export function initAudioButtons(root = document) {
  root.querySelectorAll('[data-audio]').forEach((button) => {
    button.addEventListener('click', () => playAudio(button.dataset.audio))
  })
}
