(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{136:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return s})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return p}));var t=a(3),r=a(7),o=(a(0),a(141)),i=["components"],c={id:"entradas-analogicas",title:"Entradas Anal\xf3gicas",slug:"/franzininho-diy/entradas-analogicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY"},s={unversionedId:"FranzininhoDIY/exemplos-arduino/entradas-analogicas",id:"FranzininhoDIY/exemplos-arduino/entradas-analogicas",isDocsHomePage:!1,title:"Entradas Anal\xf3gicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/entradas-analogicas.md",slug:"/franzininho-diy/entradas-analogicas",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/entradas-analogicas",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/entradas-analogicas.md",version:"current",sidebar:"docs",previous:{title:"Entradas e Sa\xeddas Digitais",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/entradas-saidas-digitais"},next:{title:"Sa\xeddas PWM",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/saidas-pwm"}},l=[{value:"Fun\xe7\xe3o",id:"fun\xe7\xe3o",children:[{value:"Sintaxe",id:"sintaxe",children:[]},{value:"Par\xe2metros",id:"par\xe2metros",children:[]},{value:"Retorno",id:"retorno",children:[]}]},{value:"Exemplo",id:"exemplo",children:[{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",children:[]}]}],d={toc:l};function p(e){var n=e.components,c=Object(r.a)(e,i);return Object(o.b)("wrapper",Object(t.a)({},d,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Na Franzininho DIY alguns pinos que podem ser usados como entradas anal\xf3gicas:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Pinagem Franzininho DIY",src:a(156).default})),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"Devido as limita\xe7\xf5es de hardware da Franzininho DIY recomendamos apenas o uso da Entrada A1 para sinais anal\xf3gicos.\nAs demais entradas (A0,A2,A3) devem ser usadas com cautela e analisando o circuito para ver o circuito presente no pino n\xe3o atrapalhar\xe1 no sinal anal\xf3gico."))),Object(o.b)("h2",{id:"fun\xe7\xe3o"},"Fun\xe7\xe3o"),Object(o.b)("p",null,"Para a leitura de um sinal anal\xf3gico no pino que possui essa fun\xe7\xe3o, n\xe3o \xe9 necess\xe1rio configurar o pino como entrada anal\xf3gica. Isso \xe9 feito na fun\xe7\xe3o de leitura:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"int analogRead(pino)")),Object(o.b)("p",null,"L\xea o valor presente em um pino configurado como entrada anal\xf3gica. Internamente o Arduino possui um conversor A/D de 10 bits. Dessa forma o valor retornado por esta fun\xe7\xe3o estar\xe1 na faixa de 0 a 1023 conforme o valor presente no pino."),Object(o.b)("h3",{id:"sintaxe"},"Sintaxe"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"analogRead(pino);")),Object(o.b)("h3",{id:"par\xe2metros"},"Par\xe2metros"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"pino:")," n\xfamero do pino configurado como entrada anal\xf3gica ","(","0,1,2,3 na Franzininho",")"),Object(o.b)("h3",{id:"retorno"},"Retorno"),Object(o.b)("p",null,"int ","(","0 a 1023",")"),Object(o.b)("h2",{id:"exemplo"},"Exemplo"),Object(o.b)("p",null,"Vamos ler o valor de um potenci\xf4metro ligado ao pino P2","(","A1",")"," e acionar o LED quando a leitura atingir um valor definido:"),Object(o.b)("p",null,Object(o.b)("img",{alt:"Circuito",src:a(371).default})),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-cpp"},"const byte LED = 1; //pino do LED\nconst byte POT = A1; //pino do Potenci\xf4metro\n\nvoid setup() {\n  pinMode(LED,OUTPUT);\n}\n\nvoid loop() {\n\n  int valor = analogRead(POT); // l\xea o valor do potenci\xf4metro\n\n  if(valor> 511){              //se valor maior que 511\n    digitalWrite(LED,HIGH);    //liga LED\n  }else{                       //se n\xe3o\n    digitalWrite(LED,LOW);     //apaga LED\n  }\n}\n")),Object(o.b)("h3",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),Object(o.b)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310739786993238592?view=diagram"}))}p.isMDXComponent=!0},141:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return b}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var n=r.a.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):c(c({},n),e)),a},p=function(e){var n=d(e.components);return r.a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),m=t,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return a?r.a.createElement(b,c(c({ref:n},l),{},{components:a})):r.a.createElement(b,c({ref:n},l))}));function b(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},156:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/pinagem-V2-7047a8d5930175670acc131497791fcc.png"},371:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/circuito-a6a0591bc42320cbe29b14bd9332f3c2.png"}}]);