// M3 regression: first-screen fit, safe landing and reverse-scroll stability.
const {chromium}=require('playwright-core'),{createServer}=require('./serve.cjs');
const assert=require('node:assert/strict'),fs=require('node:fs');
(async()=>{
 const out='preview/mobile-m3';fs.mkdirSync(out,{recursive:true});
 const server=createServer();await new Promise(r=>server.listen(0,'127.0.0.1',r));
 const browser=await chromium.launch({channel:'chrome',headless:true});
 try{
  const page=await browser.newPage(),base='http://127.0.0.1:'+server.address().port,errors=[],results=[];
  page.on('pageerror',e=>errors.push(e.message));
  const scroll=async y=>{await page.evaluate(y=>scrollTo(0,y),y);await page.waitForTimeout(100);};
  for(const [width,height] of [[320,568],[360,640],[375,667],[390,844],[430,932],[768,1024],[844,390]]){
   await page.setViewportSize({width,height});await page.goto(base,{waitUntil:'networkidle'});
   await page.evaluate(()=>document.fonts.ready);await page.addStyleTag({content:'html{scroll-behavior:auto!important}'});
   const initial=await page.evaluate(()=>({buttons:document.querySelector('.hero-copy__actions').getBoundingClientRect().bottom,overflow:document.documentElement.scrollWidth>innerWidth}));
   assert(!initial.overflow);if(height>width)assert(initial.buttons<=height-12,`Hero buttons below first screen at ${width}: ${initial.buttons}`);
   await page.screenshot({path:`${out}/hero-${width}.png`});
   const {start,end}=await page.locator('[data-sequence]').evaluate(e=>({start:Number(e.dataset.mobileStart),end:Number(e.dataset.mobileEnd)}));
   assert(end>start);
   for(const progress of [.1,.35,.6,.85,1]){
    await scroll(start+(end-start)*progress+1);
    const rect=await page.evaluate(()=>{const selector=document.documentElement.dataset.flying==='true'?'[data-travelling-art]':'[data-art-slot] .framed-art';const r=document.querySelector(selector).getBoundingClientRect();return {top:r.top,bottom:r.bottom,header:document.querySelector('.site-header').getBoundingClientRect().bottom};});
    assert(rect.top>=rect.header+20,`Artwork enters header at ${width}, ${progress}`);
    assert(rect.bottom<=height+1,`Artwork leaves viewport at ${width}, ${progress}`);
    await page.screenshot({path:`${out}/flight-${width}-${progress}.png`});
   }
   // Reproduce the reported problem: scroll up to inspect the landed artwork.
   for(const offset of [-60,-140,0,120,-80]){
    await scroll(end+offset);
    assert.equal(await page.locator('html').getAttribute('data-flying'),'false',`Reverse scroll restarted flight at ${width}`);
    assert.equal(await page.locator('[data-art-slot] .framed-art').evaluate(e=>getComputedStyle(e).visibility),'visible');
   }
   await scroll(0);assert.equal(await page.locator('html').getAttribute('data-flying'),'false');
   await scroll(end+1);assert.equal(await page.locator('[data-art-slot] .framed-art').evaluate(e=>getComputedStyle(e).visibility),'visible',JSON.stringify(await page.evaluate(()=>({width:innerWidth,y:scrollY,start:document.querySelector('[data-sequence]').dataset.mobileStart,end:document.querySelector('[data-sequence]').dataset.mobileEnd})))+' requested '+end);
   results.push({width,height,firstScreen:height>width?'passed':'natural landscape scroll',landing:'passed',reverse:'passed'});
  }
  await page.setViewportSize({width:390,height:844});
  for(const slug of ['blossoms-in-ink','painted-in-gold','the-age-of-sail']){
   await page.goto(base+'/pages/collections/'+slug+'/index.html');
   const order=await page.evaluate(()=>{const r=s=>document.querySelector(s).getBoundingClientRect();return {back:r('.browse-hero--detail .back-link').bottom,imageTop:r('.browse-hero--detail img').top,imageBottom:r('.browse-hero--detail img').bottom,text:r('.browse-detail-text').top};});
   assert(order.back<=order.imageTop&&order.imageBottom<=order.text);
   await page.screenshot({path:`${out}/collection-${slug}.png`});
  }
  assert.deepEqual(errors,[]);fs.writeFileSync(out+'/checks.json',JSON.stringify({results,collections:3,errors},null,2));
  console.log('PASS M3: six portrait first screens, seven bounded artwork landings/reverse scroll journeys and three collection back buttons.');
 }finally{await browser.close();await new Promise(r=>server.close(r));}
})().catch(e=>{console.error(e);process.exitCode=1;});
