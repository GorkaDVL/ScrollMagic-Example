


var tl = new TimelineMax({onUpdate:updatePercentage}); // on veut que l'animation ne soit pas basée sur la durée, mais sur le fait de scroller 
var tl2 = new TimelineMax();   // on veut l'animation soit basée sur la durée, pas sur le fait de scroller

const controller = new ScrollMagic.Controller();  // On crée notre controleur


// Propriétés initiales des éléments qui vont être animés
// 1) Animations basée sur la progression du scroll  
tl.from('blockquote', .5, {x:200, opacity: 0});
tl.from('span', 1, { width: 0}, "=-.5");
tl.from('#office', 1, {x:-200, opacity: 0,ease: Power4.easeInOut}, "=-1");
tl.from('#building', 1, {x:200, opacity: 0, ease: Power4.easeInOut}, "=-.7");

// 2) Animations basée sur la durée
tl2.from(".box", 1, {opacity: 0, scale: 0});
tl2.to(".box", .5, {left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)'})


//On crée la scène, les élements scrutés via le scroll
const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky",     // On définit le trigger, ici l'élement ayant la classe .sticky
            triggerHook: "onLeave",     // on change le point de contact vers le haut du viewport
            duration: "100%"             // durée de l'animation (ici par défaut)
})
  .setPin(".sticky")         // La fonction setPin() opère conjointement à duration. Cette fonction fixe un élément sur le viewport pour la durée duration de la scène. L'effet est similaire à position: sticky; en CSS
  .setTween(tl)              // On précise que ça ne concerne que les éléments contenus dans la variable tl
		.addTo(controller);   // on ajoute la variable au controlleur

const scene2 = new ScrollMagic.Scene({  // on crée la scène 2
  triggerElement: "blockquote"      // on définit l'élément ayant pour classe .blockquote comme trigger
})
  .setTween(tl2)                    // on précise que ça ne concerne que les élements contenus dans la variable tl2
		.addTo(controller);         // on l'ajoute au controleur


function updatePercentage() {
  //percent.innerHTML = (tl.progress() *100 ).toFixed();
  tl.progress();
  console.log(tl.progress());
}