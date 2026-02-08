[raindrops-city-1.html](https://github.com/user-attachments/files/25157973/raindrops-city-1.html)
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, maximum-scale=1.0">
<title>Raindrops — A moment in time</title>
<style>
*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:100%;height:100%;overflow:hidden;}
body{background:#050810;display:flex;flex-direction:column;align-items:center;justify-content:center;
min-height:100vh;min-height:100dvh;font-family:'Helvetica Neue',-apple-system,sans-serif;
user-select:none;-webkit-user-select:none;touch-action:none;overflow:hidden;}
canvas{border-radius:12px;cursor:pointer;touch-action:none;box-shadow:0 0 60px rgba(180,140,255,0.06);}
.sub{color:rgba(255,255,255,0.10);font-size:10px;margin-top:8px;letter-spacing:2px;text-align:center;}
</style>
</head>
<body>
<canvas id="g"></canvas>
<p class="sub">RAINDROPS — A moment in time</p>
<script>
// === CONFIG ===
const DROPS_TO_WIN = 30;
const RAIN_INT = 80;          // regular rain spawn interval (dense)
const GLOW_MIN_GAP = 3000;    // minimum ms between glowing drops
const GLOW_MAX_GAP = 6000;    // maximum ms between glowing drops
const HIT_R = 45;
const DURATION = 240;          // 4 minutes — longer, more relaxed
const DENSE = 4;               // regular drops per spawn

const QUOTES = [
  "Be still. The rain knows when to stop.",
  "Even cities sleep eventually.",
  "The noise fades. You remain.",
  "Somewhere above, stars are waiting.",
  "Let the rain wash the day away.",
  "You found quiet in the chaos.",
  "The city breathes between the drops.",
  "Not every moment needs a purpose.",
  "Some storms are meant to be watched.",
  "Rest here. The world can wait.",
];

// === AUDIO ===
let actx=null,started=false,rainSrc=null,rainG=null;

function initAudio(){
  if(started)return;try{
  actx=new(window.AudioContext||window.webkitAudioContext)();started=true;
  const sr=actx.sampleRate,len=sr*2;
  const buf=actx.createBuffer(2,len,sr);
  for(let ch=0;ch<2;ch++){
    const d=buf.getChannelData(ch);let last=0;
    for(let i=0;i<len;i++){const w=Math.random()*2-1;d[i]=(last+(0.02*w))/1.02;last=d[i];d[i]*=3.5;}
  }
  rainSrc=actx.createBufferSource();rainSrc.buffer=buf;rainSrc.loop=true;
  const f=actx.createBiquadFilter();f.type="lowpass";f.frequency.value=800;
  const mid=actx.createBiquadFilter();mid.type="peaking";mid.frequency.value=2000;mid.gain.value=3;
  rainG=actx.createGain();rainG.gain.value=0.18;
  rainSrc.connect(f);f.connect(mid);mid.connect(rainG);rainG.connect(actx.destination);
  rainSrc.start();
  }catch(e){}}

function chime(){
  if(!actx)return;
  const freqs=[1568,2093,2637,3136,3520];
  const f=freqs[Math.floor(Math.random()*freqs.length)];
  [f,f*1.002].forEach((freq,i)=>{
    const o=actx.createOscillator(),g=actx.createGain();
    o.type="sine";o.frequency.value=freq;
    g.gain.setValueAtTime(i===0?0.12:0.06,actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001,actx.currentTime+0.8);
    o.connect(g);g.connect(actx.destination);o.start();o.stop(actx.currentTime+0.8);
  });
  const nb=actx.createBufferSource();
  const nBuf=actx.createBuffer(1,actx.sampleRate*0.05,actx.sampleRate);
  const nd=nBuf.getChannelData(0);for(let i=0;i<nd.length;i++)nd[i]=(Math.random()*2-1)*0.3;
  nb.buffer=nBuf;
  const nf=actx.createBiquadFilter();nf.type="bandpass";nf.frequency.value=4000;nf.Q.value=5;
  const ng=actx.createGain();ng.gain.setValueAtTime(0.08,actx.currentTime);
  ng.gain.exponentialRampToValueAtTime(0.001,actx.currentTime+0.15);
  nb.connect(nf);nf.connect(ng);ng.connect(actx.destination);nb.start();
}

function playEnd(){
  if(!actx)return;
  if(rainG)rainG.gain.linearRampToValueAtTime(0.04,actx.currentTime+5);
  [261.6,329.6,392,523.2].forEach((f,i)=>{
    const o=actx.createOscillator(),g=actx.createGain();
    o.type="sine";o.frequency.value=f;
    g.gain.setValueAtTime(0,actx.currentTime+i*0.3);
    g.gain.linearRampToValueAtTime(0.05,actx.currentTime+i*0.3+0.6);
    g.gain.exponentialRampToValueAtTime(0.001,actx.currentTime+i*0.3+4);
    o.connect(g);g.connect(actx.destination);o.start(actx.currentTime+i*0.3);o.stop(actx.currentTime+i*0.3+4);
  });
}

function resetRain(){if(rainG&&actx)rainG.gain.linearRampToValueAtTime(0.18,actx.currentTime+1);}

// === CANVAS ===
const cv=document.getElementById("g"),c=cv.getContext("2d");
function getSize(){
  const mw=Math.min(window.innerWidth*0.96,500);
  const mh=(window.innerHeight||document.documentElement.clientHeight)*0.82;
  let w=mw,h=w/(16/9);if(h>mh){h=mh;w=h*(16/9);}if(w>mw){w=mw;h=w/(16/9);}
  return{w:Math.floor(w),h:Math.floor(h)};
}
function resize(){const{w,h}=getSize();cv.width=w*2;cv.height=h*2;cv.style.width=w+"px";cv.style.height=h+"px";c.setTransform(2,0,0,2,0,0);}
resize();window.addEventListener("resize",resize);

// === SKYLINE ===
function buildSkyline(w,h){
  const bs=[];let x=-5;
  while(x<w+20){
    const bw=14+Math.random()*38;
    const bh=h*0.12+Math.random()*h*0.48;
    const ant=Math.random()>0.7;
    const wins=[];
    const wC=Math.floor(bw/8),wR=Math.floor(bh/12);
    for(let r=1;r<wR;r++)for(let cl=0;cl<wC;cl++){
      if(Math.random()>0.35)wins.push({
        rx:3+cl*(bw/wC),ry:r*12,lit:Math.random()>0.15,
        flicker:Math.random()>0.85,fSpd:0.02+Math.random()*0.05,fPh:Math.random()*Math.PI*2,
      });
    }
    bs.push({x,w:bw,h:bh,ant,aH:10+Math.random()*20,wins});
    x+=bw+2+Math.random()*5;
  }
  return bs;
}
let sky=null;

function drawSky(w,h,t){
  if(!sky)sky=buildSkyline(w,h);
  const by=h;
  // City glow
  const gl=c.createRadialGradient(w/2,h,0,w/2,h,h*0.8);
  gl.addColorStop(0,"rgba(60,30,80,0.12)");gl.addColorStop(0.5,"rgba(40,20,60,0.05)");gl.addColorStop(1,"rgba(0,0,0,0)");
  c.fillStyle=gl;c.fillRect(0,0,w,h);

  sky.forEach(b=>{
    c.fillStyle="rgba(8,6,14,0.95)";c.fillRect(b.x,by-b.h,b.w,b.h);
    c.strokeStyle="rgba(60,40,80,0.12)";c.lineWidth=0.5;c.strokeRect(b.x,by-b.h,b.w,b.h);
    if(b.ant){
      const ax=b.x+b.w/2;
      c.strokeStyle="rgba(40,30,60,0.5)";c.lineWidth=1;
      c.beginPath();c.moveTo(ax,by-b.h);c.lineTo(ax,by-b.h-b.aH);c.stroke();
      if(Math.sin(t*0.003+b.x)>0.3){
        c.fillStyle="rgba(255,50,50,0.6)";c.beginPath();c.arc(ax,by-b.h-b.aH,1.5,0,Math.PI*2);c.fill();
        const rg=c.createRadialGradient(ax,by-b.h-b.aH,0,ax,by-b.h-b.aH,8);
        rg.addColorStop(0,"rgba(255,50,50,0.15)");rg.addColorStop(1,"rgba(255,50,50,0)");
        c.fillStyle=rg;c.beginPath();c.arc(ax,by-b.h-b.aH,8,0,Math.PI*2);c.fill();
      }
    }
    b.wins.forEach(win=>{
      let a=win.lit?0.6:0.08;
      if(win.flicker)a*=0.5+0.5*Math.sin(t*win.fSpd+win.fPh);
      if(win.lit){
        const wx=b.x+win.rx,wy=by-b.h+win.ry;
        c.fillStyle=`rgba(255,220,140,${a*0.3})`;c.fillRect(wx-1,wy-1,5,5);
        c.fillStyle=`rgba(255,200,100,${a})`;c.fillRect(wx,wy,3,3);
      } else {
        c.fillStyle=`rgba(30,25,45,${a})`;c.fillRect(b.x+win.rx,by-b.h+win.ry,3,3);
      }
    });
  });
}

// === STREETLIGHT ===
function drawLight(w,h,prog){
  const lx=w*0.5,baseY=h*0.72,pH=65,armW=22;
  const fadeIn=Math.min(prog*4,1);
  // Pole
  c.strokeStyle=`rgba(180,170,190,${0.5*fadeIn})`;c.lineWidth=2;
  c.beginPath();c.moveTo(lx,baseY);c.lineTo(lx,baseY-pH);c.stroke();
  // Arm
  c.beginPath();c.moveTo(lx,baseY-pH);c.quadraticCurveTo(lx+armW*0.5,baseY-pH-6,lx+armW,baseY-pH+5);c.stroke();
  // Fixture
  c.fillStyle=`rgba(180,170,190,${0.35*fadeIn})`;
  c.beginPath();c.moveTo(lx+armW-4,baseY-pH+5);c.lineTo(lx+armW+4,baseY-pH+5);
  c.lineTo(lx+armW+3,baseY-pH+11);c.lineTo(lx+armW-3,baseY-pH+11);c.closePath();c.fill();

  if(prog>0.15){
    let fp=(prog-0.15)/0.85;
    let intensity=fp;
    if(prog<0.35)intensity*=(Math.sin(prog*90)>0?1:0.15);
    else if(prog<0.5)intensity*=(Math.sin(prog*50)>0?1:0.4);

    const lxP=lx+armW,lyP=baseY-pH+11;
    // Light cone
    c.save();c.globalAlpha=intensity*0.2;
    c.beginPath();c.moveTo(lxP-3,lyP);c.lineTo(lxP-30,baseY+10);c.lineTo(lxP+30,baseY+10);c.lineTo(lxP+3,lyP);c.closePath();
    const cone=c.createLinearGradient(0,lyP,0,baseY+10);
    cone.addColorStop(0,"rgba(255,220,150,1)");cone.addColorStop(1,"rgba(255,220,150,0)");
    c.fillStyle=cone;c.fill();c.restore();
    // Bulb glow
    const bg=c.createRadialGradient(lxP,lyP,0,lxP,lyP,25);
    bg.addColorStop(0,`rgba(255,230,170,${0.5*intensity})`);bg.addColorStop(0.3,`rgba(255,200,120,${0.2*intensity})`);bg.addColorStop(1,"rgba(255,200,120,0)");
    c.fillStyle=bg;c.beginPath();c.arc(lxP,lyP,25,0,Math.PI*2);c.fill();
    c.fillStyle=`rgba(255,245,210,${0.9*intensity})`;c.beginPath();c.arc(lxP,lyP,2.5,0,Math.PI*2);c.fill();
    // Rain in light
    if(intensity>0.4){
      for(let i=0;i<6;i++){
        const rx=lxP-18+Math.random()*36,ry=lyP+8+Math.random()*(baseY-lyP-15);
        c.strokeStyle=`rgba(255,220,170,${0.12*intensity})`;c.lineWidth=0.5;
        c.beginPath();c.moveTo(rx,ry);c.lineTo(rx+0.3,ry+7);c.stroke();
      }
    }
  }
}

// === GAME STATE ===
const gs={
  drops:[],catchPs:[],ripples:[],
  score:0,phase:"menu",timeLeft:DURATION,
  lastRain:0,nextGlow:0,lastGlowTime:0,
  cloudOff:0,menuPulse:0,
  endT:0,endQuote:"",
  dimAlpha:0, // for end sequence dimming
};

// Schedule next glow drop
function scheduleGlow(){
  gs.nextGlow=Date.now()+GLOW_MIN_GAP+Math.random()*(GLOW_MAX_GAP-GLOW_MIN_GAP);
}

function mkDrop(w,h,forceGlow){
  const gl=forceGlow||false;
  return{
    x:Math.random()*w,y:-10-Math.random()*50,
    speed:gl?1.2+Math.random()*0.5:3.5+Math.random()*3.5,
    length:gl?18+Math.random()*10:3+Math.random()*8,
    opacity:gl?1:0.04+Math.random()*0.12,
    isGlowing:gl,pulsePhase:Math.random()*Math.PI*2,
    width:gl?2.5:0.5+Math.random()*0.7,
    caught:false,fadeOut:1,
    drift:(Math.random()-0.5)*0.4,
  };
}

function mkFx(x,y){
  const ps=[];
  for(let i=0;i<14;i++){
    const a=(Math.PI*2*i)/14+Math.random()*0.3,s=2+Math.random()*3;
    ps.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-1.5,life:1,size:1.5+Math.random()*3,
      color:Math.random()>0.5?"rgba(236,210,255,":"rgba(200,175,255,"});
  }
  return ps;
}

function mkRip(x,y){return{x,y,radius:3,opacity:0.45,speed:1};}

// === INPUT ===
function getPos(e){
  const r=cv.getBoundingClientRect();
  const sx=(cv.width/2)/r.width,sy=(cv.height/2)/r.height;
  const px=e.touches?e.touches[0].clientX:e.clientX;
  const py=e.touches?e.touches[0].clientY:e.clientY;
  return{x:(px-r.left)*sx,y:(py-r.top)*sy};
}

function tap(e){
  e.preventDefault();initAudio();

  if(gs.phase==="menu"){
    gs.phase="playing";gs.score=0;gs.timeLeft=DURATION;
    gs.drops=[];gs.catchPs=[];gs.ripples=[];
    gs.endT=0;gs.dimAlpha=0;
    sky=null;scheduleGlow();
    resetRain();lastTick=Date.now();return;
  }

  if(gs.phase==="quote"){
    gs.phase="menu";gs.score=0;sky=null;
    gs.dimAlpha=0;resetRain();return;
  }

  if(gs.phase!=="playing")return;

  const{x,y}=getPos(e);
  let best=Infinity,bi=-1;
  for(let i=0;i<gs.drops.length;i++){
    const d=gs.drops[i];if(!d.isGlowing||d.caught)continue;
    const dist=Math.hypot(x-d.x,y-d.y);
    if(dist<HIT_R&&dist<best){best=dist;bi=i;}
  }
  if(bi>=0){
    const d=gs.drops[bi];d.caught=true;gs.score++;
    gs.catchPs.push(...mkFx(d.x,d.y));
    gs.ripples.push(mkRip(d.x,d.y));chime();
    if(gs.score>=DROPS_TO_WIN){
      gs.phase="ending";gs.endT=0;
      gs.endQuote=QUOTES[Math.floor(Math.random()*QUOTES.length)];
      playEnd();
    }
  } else {
    gs.ripples.push(mkRip(x,y));
  }
}

cv.addEventListener("click",tap);
cv.addEventListener("touchstart",tap,{passive:false});

// === DRAW DROP ===
function drawDrop(d){
  c.save();
  if(d.isGlowing&&!d.caught){
    d.pulsePhase+=0.04;const p=0.6+Math.sin(d.pulsePhase)*0.4;
    const og=c.createRadialGradient(d.x,d.y,0,d.x,d.y,32);
    og.addColorStop(0,`rgba(200,160,255,${0.22*p})`);og.addColorStop(0.4,`rgba(180,140,240,${0.08*p})`);og.addColorStop(1,"rgba(180,140,240,0)");
    c.fillStyle=og;c.beginPath();c.arc(d.x,d.y,32,0,Math.PI*2);c.fill();
    const ig=c.createRadialGradient(d.x,d.y,0,d.x,d.y,12);
    ig.addColorStop(0,`rgba(225,210,255,${0.45*p})`);ig.addColorStop(1,`rgba(180,150,240,${0.12*p})`);
    c.fillStyle=ig;c.beginPath();c.arc(d.x,d.y,12,0,Math.PI*2);c.fill();
    c.strokeStyle=`rgba(225,210,255,${0.8*d.fadeOut})`;c.lineWidth=d.width;c.lineCap="round";
    c.beginPath();c.moveTo(d.x,d.y-d.length/2);c.lineTo(d.x,d.y+d.length/2);c.stroke();
    c.fillStyle=`rgba(255,255,255,${0.85*p*d.fadeOut})`;
    c.beginPath();c.arc(d.x,d.y,2.5,0,Math.PI*2);c.fill();
  } else {
    c.strokeStyle=`rgba(150,145,175,${d.opacity*d.fadeOut})`;c.lineWidth=d.width;c.lineCap="round";
    c.beginPath();c.moveTo(d.x+d.drift*5,d.y-d.length/2);c.lineTo(d.x,d.y+d.length/2);c.stroke();
  }
  c.restore();
}

// === MAIN LOOP ===
let lastTick=Date.now();

function loop(){
  const now=Date.now(),{w:cw,h:ch}=getSize();

  // Timer
  if(gs.phase==="playing"){
    const dt=now-lastTick;
    if(dt>=1000){
      gs.timeLeft=Math.max(0,gs.timeLeft-Math.floor(dt/1000));
      lastTick=now-(dt%1000);
      if(gs.timeLeft<=0){
        gs.phase="ending";gs.endT=0;
        gs.endQuote=QUOTES[Math.floor(Math.random()*QUOTES.length)];
        playEnd();
      }
    }
  }

  // === BG ===
  const bg=c.createLinearGradient(0,0,0,ch);
  bg.addColorStop(0,"#08060e");bg.addColorStop(0.4,"#0f0a1e");bg.addColorStop(1,"#1a1025");
  c.fillStyle=bg;c.fillRect(0,0,cw,ch);

  const isActive=gs.phase==="menu"||gs.phase==="playing"||gs.phase==="ending"||gs.phase==="quote";

  if(isActive){
    // Clouds
    gs.cloudOff+=0.08;
    c.save();c.globalAlpha=0.2;c.fillStyle="rgba(30,20,45,1)";
    for(let i=0;i<3;i++){
      const cx2=((gs.cloudOff*(0.2+i*0.15)+i*200)%(cw+300))-150;
      c.beginPath();c.ellipse(cx2,18+i*14,100+i*20,14+i*5,0,0,Math.PI*2);c.fill();
    }
    c.restore();

    // Skyline
    drawSky(cw,ch,now);

    // === RAIN SPAWNING ===
    const canSpawnRain=gs.phase==="playing"||gs.phase==="ending";
    const isMenu=gs.phase==="menu"||gs.phase==="quote";

    if(canSpawnRain&&now-gs.lastRain>RAIN_INT){
      for(let i=0;i<DENSE;i++) gs.drops.push(mkDrop(cw,ch,false));
      gs.lastRain=now;
    }
    if(isMenu&&now-gs.lastRain>100){
      for(let i=0;i<2;i++){const d=mkDrop(cw,ch,false);d.opacity=0.03+Math.random()*0.06;gs.drops.push(d);}
      gs.lastRain=now;
    }

    // Glow drop spawning — only during playing, with scheduled gaps
    if(gs.phase==="playing"&&now>=gs.nextGlow){
      gs.drops.push(mkDrop(cw,ch,true));
      scheduleGlow();
    }

    // Cap
    if(gs.drops.length>500) gs.drops.splice(0,gs.drops.length-500);

    // Update & draw drops
    for(let i=gs.drops.length-1;i>=0;i--){
      const d=gs.drops[i];d.y+=d.speed;d.x+=d.drift;
      if(d.caught){d.fadeOut-=0.08;if(d.fadeOut<=0){gs.drops.splice(i,1);continue;}}
      if(d.y>ch+20){gs.drops.splice(i,1);continue;}

      // During ending, fade out glow drops
      if((gs.phase==="ending"||gs.phase==="quote")&&d.isGlowing&&!d.caught){
        d.fadeOut-=0.02;if(d.fadeOut<=0){gs.drops.splice(i,1);continue;}
      }
      // During ending, gradually slow and fade regular rain
      if(gs.phase==="ending"&&!d.isGlowing){
        d.opacity*=0.998;
        d.speed*=0.999;
      }

      drawDrop(d);
    }

    // Ground splashes
    if(gs.phase==="playing"){
      for(let i=0;i<2;i++){
        const sx=Math.random()*cw,sy=ch-2+Math.random()*3;
        c.fillStyle=`rgba(150,145,175,${0.04+Math.random()*0.04})`;
        c.beginPath();c.ellipse(sx,sy,2+Math.random()*3,1,0,0,Math.PI*2);c.fill();
      }
    }

    // Ripples
    for(let i=gs.ripples.length-1;i>=0;i--){
      const r=gs.ripples[i];r.radius+=r.speed;r.opacity-=0.01;
      if(r.opacity<=0){gs.ripples.splice(i,1);continue;}
      c.save();c.strokeStyle=`rgba(200,175,255,${r.opacity})`;c.lineWidth=1;
      c.beginPath();c.arc(r.x,r.y,r.radius,0,Math.PI*2);c.stroke();c.restore();
    }

    // Catch particles
    for(let i=gs.catchPs.length-1;i>=0;i--){
      const p=gs.catchPs[i];p.x+=p.vx;p.y+=p.vy;p.vy+=0.04;p.life-=0.016;
      if(p.life<=0){gs.catchPs.splice(i,1);continue;}
      c.save();c.globalAlpha=p.life;c.fillStyle=p.color+p.life+")";
      c.beginPath();c.arc(p.x,p.y,p.size*p.life,0,Math.PI*2);c.fill();c.restore();
    }
  }

  // === PLAYING UI ===
  if(gs.phase==="playing"){
    const bw=cw*0.5,bh=4,bx=(cw-bw)/2,by=ch-20;
    const prog=Math.min(gs.score/DROPS_TO_WIN,1);
    c.fillStyle="rgba(255,255,255,0.04)";
    c.beginPath();c.roundRect(bx,by,bw,bh,2);c.fill();
    if(prog>0){
      const fg=c.createLinearGradient(bx,0,bx+bw*prog,0);
      fg.addColorStop(0,"rgba(180,140,240,0.35)");fg.addColorStop(1,"rgba(220,200,255,0.6)");
      c.fillStyle=fg;c.beginPath();c.roundRect(bx,by,bw*prog,bh,2);c.fill();
      c.shadowColor="rgba(180,140,240,0.3)";c.shadowBlur=5;
      c.beginPath();c.roundRect(bx,by,bw*prog,bh,2);c.fill();c.shadowBlur=0;
    }
    c.fillStyle="rgba(220,200,255,0.35)";c.font="10px 'Helvetica Neue',sans-serif";
    c.textAlign="center";c.fillText(`${gs.score} / ${DROPS_TO_WIN}`,cw/2,by-5);
    const m=Math.floor(gs.timeLeft/60),s=gs.timeLeft%60;
    c.fillStyle="rgba(255,255,255,0.12)";c.font="10px 'Helvetica Neue',sans-serif";
    c.textAlign="right";c.fillText(`${m}:${s.toString().padStart(2,"0")}`,cw-12,16);
  }

  // === MENU ===
  if(gs.phase==="menu"){
    gs.menuPulse+=0.018;
    c.fillStyle="rgba(8,6,14,0.25)";c.fillRect(0,ch*0.3,cw,ch*0.35);
    // Title
    c.fillStyle="rgba(235,220,255,0.75)";c.font="600 26px 'Helvetica Neue',sans-serif";
    c.textAlign="center";c.fillText("raindrops",cw/2,ch/2-16);
    // Tap prompt — pulsing
    c.fillStyle=`rgba(220,190,255,${0.3+Math.sin(gs.menuPulse)*0.15})`;
    c.font="12px 'Helvetica Neue',sans-serif";c.fillText("tap to begin",cw/2,ch/2+12);
    // Subtitle
    c.fillStyle="rgba(200,180,230,0.2)";c.font="10px 'Helvetica Neue',sans-serif";
    c.fillText("catch the glowing drops",cw/2,ch/2+30);
    // Scene name
    c.fillStyle="rgba(200,180,230,0.12)";c.font="9px 'Helvetica Neue',sans-serif";
    c.fillText("city at night",cw/2,ch/2+48);
  }

  // === ENDING SEQUENCE ===
  if(gs.phase==="ending"){
    gs.endT+=0.003; // slower

    // Gradually dim the screen
    gs.dimAlpha=Math.min(gs.endT*0.8,0.55);
    c.fillStyle=`rgba(8,6,14,${gs.dimAlpha})`;c.fillRect(0,0,cw,ch);

    // Streetlight
    if(gs.endT>0.15){
      drawLight(cw,ch,Math.min((gs.endT-0.15)/0.7,1));
    }

    // Transition to quote after streetlight settles
    if(gs.endT>1.0){
      gs.phase="quote";gs.dimAlpha=0.55;
    }
  }

  // === QUOTE SCREEN ===
  if(gs.phase==="quote"){
    // Keep dim overlay
    c.fillStyle=`rgba(8,6,14,${gs.dimAlpha})`;c.fillRect(0,0,cw,ch);

    // Streetlight stays on
    drawLight(cw,ch,1);

    // Quote — warm, visible, centered
    c.save();
    c.fillStyle="rgba(255,225,170,0.75)";
    c.font="italic 16px 'Helvetica Neue',sans-serif";
    c.textAlign="center";
    const words=gs.endQuote.split(" ");
    let lines=[],line="";
    words.forEach(w=>{const test=line?line+" "+w:w;if(test.length>28){lines.push(line);line=w;}else line=test;});
    if(line)lines.push(line);
    const startY=ch/2-((lines.length-1)*22)/2-30;
    lines.forEach((l,i)=>c.fillText(l,cw/2,startY+i*22));
    c.restore();

    // Tap to continue
    c.fillStyle="rgba(255,225,170,0.25)";c.font="10px 'Helvetica Neue',sans-serif";
    c.textAlign="center";c.fillText("tap to continue",cw/2,ch-20);
  }

  requestAnimationFrame(loop);
}

scheduleGlow();
requestAnimationFrame(loop);
</script>
</body>
</html>
