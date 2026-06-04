/* Option 2 — custom dot cursor with trailing ring. Loaded after main.js. */
(function(){
    if(!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    var dot=document.createElement('div'); dot.className='o2-cursor';
    var ring=document.createElement('div'); ring.className='o2-ring';
    document.body.appendChild(dot); document.body.appendChild(ring);
    var mx=0,my=0,rx=0,ry=0;
    document.addEventListener('mousemove',function(e){mx=e.clientX;my=e.clientY;dot.style.transform='translate('+(mx-5)+'px,'+(my-5)+'px)';});
    (function loop(){rx+=(mx-rx)*0.18;ry+=(my-ry)*0.18;ring.style.transform='translate('+(rx-18)+'px,'+(ry-18)+'px)';requestAnimationFrame(loop);})();
})();
