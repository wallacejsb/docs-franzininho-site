(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{124:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return u}));var i=t(3),o=t(7),n=(t(0),t(141)),r=["components"],s={id:"circuitpython-entradas-saidas-digitais",title:"Entradas e Sa\xeddas Digitais",slug:"/franzininho-wifi/exemplos-circuitpython/entradas-saidas-digitais",description:"Este exemplo exibe como trabalhar com as entradas e sa\xeddas digitais na Franzininho WiFi",author:"Diana Santos"},c={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-entradas-saidas-digitais",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-entradas-saidas-digitais",isDocsHomePage:!1,title:"Entradas e Sa\xeddas Digitais",description:"Este exemplo exibe como trabalhar com as entradas e sa\xeddas digitais na Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/entrada-saidas-digitais.md",slug:"/franzininho-wifi/exemplos-circuitpython/entradas-saidas-digitais",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/entradas-saidas-digitais",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/entrada-saidas-digitais.md",version:"current",sidebar:"docs",previous:{title:"Hello World!",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/hello-world"},next:{title:"Entrada Anal\xf3gica",permalink:"/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/entradas-analogicas"}},l=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],d={toc:l};function u(e){var a=e.components,s=Object(o.a)(e,r);return Object(n.b)("wrapper",Object(i.a)({},d,s,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Agora que j\xe1 entendemos a estrutura b\xe1sica de um programa no CircuitoPython, exploraremos os pinos de I/O como entrada e sa\xedda digital. Este exemplo exibe como ler um bot\xe3o (entrada digital) e acionar um LED (sa\xedda digital). Quando o bot\xe3o for pressionado o estado do LED dever\xe1 ser invertido. Assim, ao final teremos um bot\xe3o Liga/Desliga para controlar o LED."),Object(n.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"1 Placa Franzininho WiFi com CircuitPython;"),Object(n.b)("li",{parentName:"ul"},"1 Protoboard;"),Object(n.b)("li",{parentName:"ul"},"1 LED vermelho de 3 mm;"),Object(n.b)("li",{parentName:"ul"},"1 Resistor 330 \u03a9;"),Object(n.b)("li",{parentName:"ul"},"1 Bot\xe3o;"),Object(n.b)("li",{parentName:"ul"},"Jumpers.")),Object(n.b)("h2",{id:"circuito"},"Circuito"),Object(n.b)("p",null,"Fa\xe7a a seguinte montagem:"),Object(n.b)("p",null,Object(n.b)("img",{alt:"Circuito Entrada e Saida digital",src:t(334).default})),Object(n.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(n.b)("p",null,"Digite o c\xf3digo abaixo no arquivo code.py que est\xe1 dentro do diret\xf3rio CIRCUITPY e salve o arquivo:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"# Entradas e Sa\xeddas digitais - Bot\xe3o Liga/Desliga\nimport time\nimport board\nfrom digitalio import DigitalInOut, Direction, Pull\n\n# Configura o pino do bot\xe3o\nbtn = DigitalInOut(board.IO6)       # mapea para pino 6 \nbtn.direction = Direction.INPUT     # configura como entrada\nbtn.pull = Pull.UP                  # habilita pull-up interno\n\n\n# Configura o pino do led\nled = DigitalInOut(board.IO4)       # mapea para pino 4 \nled.direction = Direction.OUTPUT    # configura como sa\xedda\n\n# loop infinito\nwhile True:\n    if btn.value ==0:               # Se bot\xe3o pressionado                \n        led.value=not led.value     # inverte estado do LED\n        while btn.value==0:         # Aguarda bot\xe3o ser solto\n            time.sleep(0.01)        # delay de 10 ms\n")),Object(n.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),Object(n.b)("p",null,"Para acessar os pinos da placa precisamos importar o m\xf3dulo board:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"import board\n")),Object(n.b)("p",null,"Como precisaremos de intervalos de temporiza\xe7\xe3o importamos o m\xf3dulo time:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"import time\n")),Object(n.b)("p",null,"Trabalharemos como entradas e sa\xeddas digitais nesse exemplo. Para isso, precisamos importar os seguintes m\xf3dulos em digitalio:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"from digitalio import DigitalInOut, Direction\n")),Object(n.b)("p",null,"O bot\xe3o deve ser configurado como uma entrada digital no pino 6. Al\xe9m disso, como n\xe3o usamos resistor de pull-up externo devemos configurar o pull-up interno:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"# Configura o pino do bot\xe3o\nbtn = DigitalInOut(board.IO6)       # mapea para pino 6 \nbtn.direction = Direction.INPUT     # configura como entrada\nbtn.pull = Pull.UP                  # habilita pull-up interno\n")),Object(n.b)("p",null,"O LED foi configurado como uma sa\xedda digital no pino 4, da mesma forma que fizemos no exemplo anterior:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"# Configura o pino do led\nled = DigitalInOut(board.IO4)       # mapea para pino 4 \nled.direction = Direction.OUTPUT    # configura como sa\xedda\n")),Object(n.b)("p",null,"No loop infinito testamos o valor do pio do bot\xe3o, caso esteja em novel 0 significa que o usu\xe1rio apertou. Assim toda vez que o bot\xe3o \xe9 pressionado o valor do LED \xe9 invertido. Para evitar que o sejam realizadas diversas opera\xe7\xf5es \xe9 aguardado que o usu\xe1rio solte o bot\xe3o antes de ler o bot\xe3o novamente. Essa espera \xe9 feita com um loop\nwhile:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"# loop infinito\nwhile True:\n    if btn.value ==0:               # Se bot\xe3o pressionado                \n        led.value=not led.value     # inverte estado do LED\n        while btn.value==0:         # Aguarda bot\xe3o ser solto\n            time.sleep(0.01)        # delay de 10 ms\n")),Object(n.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(n.b)("p",null,"Neste exemplo, fizemos uma aplica\xe7\xe3o simples para leitura de uma entrada digital(bot\xe3o) e acionamento de uma sa\xedda digital(LED). Esse exemplo servir\xe1 de base para quando voc\xea precisar trabalhar com entradas e sa\xeddas digitais em seus projetos. A configura\xe7\xe3o \xe9 sempre a mesma."),Object(n.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Desafio")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Inclua mais um bot\xe3o e mais um LED no circuito com funcionamento igual ao que fizemos."))),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Autor"),Object(n.b)("th",{parentName:"tr",align:null},"Diana Santos"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Autor"),Object(n.b)("td",{parentName:"tr",align:null},Object(n.b)("a",{parentName:"td",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Data:"),Object(n.b)("td",{parentName:"tr",align:null},"16/09/201")))))}u.isMDXComponent=!0},141:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return b}));var i=t(0),o=t.n(i);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,i,o=function(e,a){if(null==e)return{};var t,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)t=n[i],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),d=function(e){var a=o.a.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},u=function(e){var a=d(e.components);return o.a.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},m=o.a.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,r=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=i,b=u["".concat(r,".").concat(m)]||u[m]||p[m]||n;return t?o.a.createElement(b,s(s({ref:a},l),{},{components:t})):o.a.createElement(b,s({ref:a},l))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,r=new Array(n);r[0]=m;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var l=2;l<n;l++)r[l]=t[l];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},334:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/00-circuito-366206a6cd9002f9e3db12f576d74713.png"}}]);