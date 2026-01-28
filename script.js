var tl = gsap.timeline()

tl.from("#page1 #nav #logo",{
    y:-200,
    opacity:0,
})

tl.from("#page1 #navlinks h4 span",{
    opacity:0,
    y:-20,
    stagger:0.2,
},"-=0.5")

tl.from("#page1 #navlinks h4",{
    opacity:0,
    stagger:0.2,
},"-=0.5")

tl.from("#page1 #icons h4",{
    opacity:0,
    y:-20,
    stagger:0.2,
},"-=0.5")

tl.from("#topic h2",{
    opacity:0,
},"-=0.5")

tl.from("#page1 #topic h1",{
    opacity:0,
    x:-200,
},"-=0.5")

tl.from("#page1 #topic h3",{
    opacity:0,
    x:-200,
},"-=0.5")

tl.from("#page1 #button",{
    opacity:0,
},"-=0.3")

tl.from("#slogan h1",{
    opacity:0,
    scale:0.1,
},"-=0.3")

tl.from("#slogan h2",{
    opacity:0,
    scale:0.1,
},"-=0.3")

tl.from("#product img",{
    opacity:0,
    scale:0.1,
},"-=1")

tl.from("#page1 #leftbtn",{
    opacity:0,
    x:-200,
},"-=0.2")

tl.from("#page1 #rightbtn",{
    opacity:0,
    x:200,
},"-=0.4")



//PRODUCT PAGE//
var tl2 = gsap.timeline()

tl2.from("#page6 #top img",{
    opacity:0,
    scale:0.1
})

tl2.from("#page6 #top h1",{
    opacity:0,
})

tl2.from("#page6 #topic1",{
    opacity:0,
},"-=0.3")

tl2.from("#page6 .drinks1",{
    opacity:0,
},"-=0.3")

var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page7",
    scroller: "body",
    start: "top 70%",
    end: "top 50%",
    scrub: 2
  }
})

tl1.from("#page7 #topic2 h1", {
  opacity: 0,
  y: 50,
  duration: 2
},"hello")

tl1.from("#page7 #topic2 h2", {
  opacity: 0,
  y: 50,
  duration: 2
},"hello")

tl1.from("#page7 .drinks2", {
  opacity: 0,
  y: 50,
  duration: 2
})

var tl1 = gsap.timeline({
  scrollTrigger:{
    trigger: "#page8",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 2
  }
})

tl1.from("#page8 #topic3 h1", {
  opacity: 0,
  y: 50,
  duration: 2
},"hello2")

tl1.from("#page8 #topic3 h2", {
  opacity: 0,
  y: 50,
  duration: 2
},"hello2")

tl1.from("#page8 .drinks3", {
  opacity: 0,
  y: 50,
  duration: 2
})

//OG PAGE//
var tl3 = gsap.timeline()

tl3.from("#back",{
    opacity:0,
    x:-20,
})

tl3.from("#screen1 h1",{
    opacity:0,
    x:-50
},"-=0.2")

tl3.from("#screen1 h2",{
    opacity:0,
    x:-50
},"-=0.4")

tl3.from("#screen1 p",{
    opacity:0,
    x:-50
},"-=0.3")

tl3.from("#shopbtn",{
    opacity:0,
},"-=0.3")

tl3.from("#ogdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50
})

tl3.from("#description h1",{
    opacity:0,
    x:50
},"-=1.3")

tl3.from("#description h3",{
    opacity:0,  
},"-=1.2")

tl3.from("#description h2",{
    opacity:0,
    x:50
},"-=1.2")


//LN PAGE//
var tl4 = gsap.timeline()

tl4.from("#ln #lndrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//ZS PAGE//
var tl5 = gsap.timeline()

tl5.from("#zs #zsdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//EB PAGE//
var tl6 = gsap.timeline()

tl6.from("#eb #ebdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//OD PAGE//
var tl7 = gsap.timeline()

tl7.from("#od #oddrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//RWP PAGE//
var tl8 = gsap.timeline()

tl8.from("#rwp #rwpdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//ROD PAGE//
var tl9 = gsap.timeline()

tl9.from("#rod #roddrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})



//LOCRAB PAGE//
var tla = gsap.timeline()

tla.from("#locrab #locrabdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//RPC PAGE//
var tlb = gsap.timeline()

tlb.from("#rpc #rpcdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//SPI PAGE//
var tlc = gsap.timeline()

tlc.from("#spi #spidrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//WM PAGE//
var tld = gsap.timeline()

tld.from("#wm #wmdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//WP PAGE//
var tle = gsap.timeline()

tle.from("#wp #wpdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//bh PAGE//
var tlf = gsap.timeline()

tlf.from("#bh #bhdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//vg PAGE//
var tlg = gsap.timeline()

tlg.from("#vg #vgdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//water PAGE//
var tlh = gsap.timeline()

tlh.from("#water #waterdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//red PAGE//
var tli = gsap.timeline()

tli.from("#red #reddrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//blue PAGE//
var tlj = gsap.timeline()

tlj.from("#blue #bluedrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//rosa PAGE//
var tlk = gsap.timeline()

tlk.from("#rosa #rosadrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//black PAGE//
var tll = gsap.timeline()

tll.from("#black #blackdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//sun PAGE//
var tlm = gsap.timeline()

tlm.from("#sun #sundrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})



// mb PAGE //
var tln = gsap.timeline()

tln.from("#mb #mbdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




// lm PAGE //
var tlo = gsap.timeline()

tlo.from("#lm #lmdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




// sc PAGE //
var tlp = gsap.timeline()

tlp.from("#sc #scdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




// ic PAGE //
var tlq = gsap.timeline()

tlq.from("#ic #icdrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




// cl PAGE //
var tlr = gsap.timeline()

tlr.from("#cl #cldrink img",{
    opacity:0,
    scale:0.1,
    rotate:50,
    delay:1
})




//Footer page//
var tld = gsap.timeline({
  scrollTrigger:{
    trigger: "footer",
    scroller: "body",
    start: "top 80%",
    end: "top 60%",
    scrub: 2
  }
})

tld.from("footer h1",{
    opacity:0,
    y:-50,
    scale:0
})

tld.from("footer #links",{
    opacity:0,
    stagger:1,
    scrub:2
})

tld.from("footer h2",{
    opacity:0,
    y:-50,
    scale:0
})

tld.from("footer #social",{
    opacity:0,
    stagger:1,
    scrub:2
})

tld.from("footer #copyright",{
    opacity:0,
    scale:0
})




// About page //
var tle  = gsap.timeline()

tle.from("#about #top img",{
    opacity:0,
    scale:0.1,
    duration:0.5
})

tle.from("#about #top h1",{
    opacity:0,
})




// Contact page //
var tlf = gsap.timeline()

tlf.from("#contact2 h1",{
    opacity:0,
    scale:0,
    duration:1
})

tlf.from("#contact2 p",{
    opacity:0,
    scale:0,
    duration:0.5
})

var tlf = gsap.timeline({
    scrollTrigger:{
        trigger:"#contact3",
        scroller:"body",
        start:"top 70%",
        end:"top 10%",
        scrub:2
    }
})

tlf.from("#contact3 .option",{
    opacity:0,
    x:-100
})

tlf.from("#contact3 .phone",{
    opacity:0,
    x:100
})




// Privacy & cookies page //
var tlg = gsap.timeline()

tlg.from("#privacy .banner",{
    opacity:0,
    scale:0 
})

tlg.from("#privacy #policy h1",{
    opacity:0,
    y:-100
})

tlg.from("#cookies .banner",{
    opacity:0,
    scale:0
},"-=0.8")

tlg.from("#cookies #policy h1",{
    opacity:0,
    y:-100
},"-=0.8")

gsap.registerPlugin(TextPlugin);

const para = document.querySelector("#typeText");

gsap.to(para, {
    text: para.dataset.text,
    duration: 2,
    delay:0.9,
    ease: "none"
})
.to(para, {
    opacity: 1,
    filter: "blur(0px)",
    textShadow: "0 0 12px rgba(255,255,255,0.9)",
    duration: 1.5,
    ease: "expo.out"
}, 0);