
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_AnimatedCoffeeCup}","mouseover",function(sym,e){});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'CoffeeCup'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7000,function(sym,e){sym.playReverse();});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.play();});
//Edge binding end
})("CoffeeCup");
//Edge symbol end:'CoffeeCup'

//=========================================================

//Edge symbol: 'AnimatedCofee'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",30000,function(sym,e){sym.play(0);});
//Edge binding end
})("AnimatedCofee");
//Edge symbol end:'AnimatedCofee'

//=========================================================

//Edge symbol: 'CoffeeCup-sym'
(function(symbolName){})("CoffeeCup-sym");
//Edge symbol end:'CoffeeCup-sym'
})(jQuery,AdobeEdge,"CoffeeClass");
