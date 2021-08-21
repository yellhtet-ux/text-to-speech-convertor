const Speech = new SpeechSynthesisUtterance();
const Synthesis = window.speechSynthesis;
let voices = [];
Speech.lang = "en";

//Inputs
const textArea = document.getElementsByTagName("textarea")[0];
const volumeInput = document.querySelector(".volume");
const rateInput = document.querySelector(".rate");
const pitchInput = document.querySelector(".pitch");
const voicesSelection = document.querySelector(".voices");

//Buttons
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const cancel = document.querySelector(".cancel");

const playSpeak = () => {
  Speech.text = textArea.value;
  window.speechSynthesis.speak(Speech);
};

const setVolume = () => {
  const volume = volumeInput.value;
  Speech.volume = volume;

  document.querySelector(".volume__label").innerHTML = volume;
};

const setRate = () => {
  const rate = rateInput.value;
  Speech.rate = rate;

  document.querySelector(".rate__label").innerHTML = rate;
};

const setPitch = () => {
  const pitch = pitchInput.value;
  Speech.pitch = pitch;

  document.querySelector(".pitch__label").innerHTML = pitch;
};

Synthesis.onvoiceschanged = () => {
  voices = Synthesis.getVoices();
  Speech.voice = voices[0];

  voices.forEach(
    (sounds, i) =>
      (voicesSelection.options[i] = new Option(
        sounds.lang.toLocaleUpperCase(),
        i
      ))
  );
};

const setVoice = () => {
  const voice = voicesSelection.value;
  Speech.voice = voices[voice];
};

const setPauseBtn = () => {
  Synthesis.pause();
};

const setResumeBtn = () => {
  Synthesis.resume();
};

const setCancelBtn = () => {
  Synthesis.cancel();
};

start.addEventListener("click", playSpeak);
pause.addEventListener("click", setPauseBtn);
resume.addEventListener("click", setResumeBtn);
cancel.addEventListener("click", setCancelBtn);
volumeInput.addEventListener("input", setVolume);
rateInput.addEventListener("input", setRate);
pitchInput.addEventListener("input", setPitch);
voicesSelection.addEventListener("change", setVoice);
