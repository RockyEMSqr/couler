import './app.css'
import { useSignal } from '@preact/signals';
export function App() {
const vibeWords = [
  "radiant","bloom","spark","glow","shine","rise","joy","thrive","calm","bliss",
  "golden","bright","airy","smooth","lucid","flourish","hush","drift","float","mist",
  "lunar","halo","veil","echo","whisper","dawn","aura","cloud","shimmer","fade",
  "breathe","glitch","surge","pulse","charge","synth","neon","phase","burst","loop",
  "flux","vibe","zap","orbit","beam","root","moss","stone","leaf","flow","tide",
  "soil","grain","ember","dune","fern","dew","muse","idea","form","notion","craft",
  "sense","hue","trace","line","curve","frame","motion","shape","void","dusk",
  "noir","still","stark","bare","mute","shadow","dim","blur","static","chill"
];

const colors = ['#333']

const pickedWord = useSignal('');
function randomInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function DoTheThing(){
  pickedWord.value = vibeWords[randomInt(0, vibeWords.length - 1 )];

  let color1 = `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`
  let color2 = `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`
  document.body.style = `background: linear-gradient(to bottom, ${color1}, ${color2});`; 
  // document.body.style = `background-color:${color1}`
}
  return (
    <>
      <button onClick={DoTheThing}>Do it</button>

      <h1>{pickedWord.value}y</h1>
    </>
  )
}
