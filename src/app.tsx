import './app.css'
import { useSignal } from '@preact/signals';
import {useEffect} from 'preact/hooks'
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
const color1 = useSignal('');
const color2 = useSignal('');
const color3 = useSignal('');
const pickedWord = useSignal('');
function randomInt(min:number, max:number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function DoTheThing(){
  pickedWord.value = vibeWords[randomInt(0, vibeWords.length - 1 )];

  let colora1 = `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
  color1.value  = colora1;
  let colora2 = `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
  color2.value = colora2;
  let colora3 = `rgb(${randomInt(0,255)}, ${randomInt(0,255)}, ${randomInt(0,255)})`;
  color3.value = colora3;

  document.body.style = `background: linear-gradient(90deg, ${color1}, ${color2}, ${color3});`; 
  // document.body.style = `background-color:${color1}`
}
useEffect(()=>{
  DoTheThing();
}, [])
  return (
    <>
    {/* <button onClick={e=>{
      setInterval(()=>{
        DoTheThing();
      }, 100)
    }}>Epilepsy Warning</button> */}
    <h1 class="cursive-font">
      I'm feelin' {pickedWord.value ? `${pickedWord.value}y` : ''}
    </h1>
      <button onClick={DoTheThing}>Color me Curious</button>

      <span onClick={_e=>{
        navigator.clipboard.writeText(color1.value)
      }}>{color1}</span>
      <span onClick={_e=>{
        navigator.clipboard.writeText(color2.value)
      }}>{color2}</span>
      <span onClick={_e=>{
        navigator.clipboard.writeText(color3.value)
      }}>{color3}</span>
    </>
  )
}
