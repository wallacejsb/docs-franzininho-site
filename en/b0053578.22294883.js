(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{103:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return b}));var n=t(3),o=t(7),r=(t(0),t(123)),i={id:"bootloader",title:"Bootloader",slug:"/franzininho-diy/bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY"},c={unversionedId:"FranzininhoDIY/bootloader",id:"FranzininhoDIY/bootloader",isDocsHomePage:!1,title:"Bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY",source:"@site/docs/FranzininhoDIY/bootloader.md",slug:"/franzininho-diy/bootloader",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/bootloader",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/master/docs/FranzininhoDIY/bootloader.md",version:"current",sidebar:"docs",previous:{title:"Pinagem",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/pinagem"},next:{title:"Instala\xe7\xe3o de drivers e configura\xe7\xe3o da USB",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/drivers-micronucleus"}},s=[{value:"Materiais Necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"Gravando o FranzBoot no Arduino UNO",id:"gravando-o-franzboot-no-arduino-uno",children:[]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Gravar muitos chips",id:"gravar-muitos-chips",children:[]}],d={toc:s};function b(e){var a=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,i,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Para que a placa Franzininho possa ser gravada atrav\xe9s da USB \xe9 necess\xe1rio gravar o bootloader. O bootloader \xe9 um pequeno programa que roda toda vez que a placa \xe9 iniciada e verifica se tem um comando de atualiza\xe7\xe3o de firmware. Caso tenha esse comando, ele recebe o bin\xe1rio atrav\xe9s da USB (no caso da Franzininho DIY) e grava na mem\xf3ria flash."),Object(r.b)("p",null,"Na Franzininho DIY usamos o ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/micronucleus/micronucleus/blob/master/Devices_with_Micronucleus.md"}),"Micronucleus")," que \xe9 um bootloader pequeno e bem flex\xedvel desenvolvido para a fam\xedlia ATtiny usando o projeto ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.obdev.at/products/vusb/index.html"}),"VUSB")," como base."),Object(r.b)("p",null,"A seguir vamos exibir como voc\xea pode gravar o ATtiny85 para usar o Micronucleus."),Object(r.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais Necess\xe1rios"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Arduino UNO ou similar"),Object(r.b)("li",{parentName:"ul"},"Fios ","(","Jumpers",")"),Object(r.b)("li",{parentName:"ul"},"Protoboard")),Object(r.b)("h2",{id:"circuito"},"Circuito"),Object(r.b)("p",null,"Voc\xea precisar\xe1 montar o seguinte circuito:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito para Grava\xe7\xe3o",src:t(228).default})),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"Fa\xe7a uma dupla checagem antes de ligar o Arduino Uno no computador.")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}))),Object(r.b)("p",null,"Com o circuito Montado, vamos para a grava\xe7\xe3o do bootloader."),Object(r.b)("h2",{id:"gravando-o-franzboot-no-arduino-uno"},"Gravando o FranzBoot no Arduino UNO"),Object(r.b)("p",null,"Para facilitar a grava\xe7\xe3o do bootloader vamos usar o ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Franzininho/FranzBoot"}),"FranzBoot"),", um programa para grava\xe7\xe3o do bootloader micronucleus para Franzininho DIY usando Arduino UNO."),Object(r.b)("p",null,"Baixe o projeto no seu computador: ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Franzininho/FranzBoot/archive/refs/heads/main.zip"}),"Download"),"."),Object(r.b)("p",null,"Descompacte a pasta e abra o arquivo FranzBoot.ino"),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Se ainda n\xe3o tem a IDE Arduino no seu computador, baixe-a no site do ",Object(r.b)("a",Object(n.a)({parentName:"h5"},{href:"https://www.arduino.cc/en/software"}),"Arduino")," ")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}))),Object(r.b)("p",null,"Ser\xe1 aberta a IDE do Arduino:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito para Grava\xe7\xe3o",src:t(229).default})),Object(r.b)("p",null,"Antes de gravar na placa precisamos configurar a IDE para a placa Arduino UNO. Em Paca selecione Arduino UNO e em porta a porta Serial criada para o seu Arduino UNO:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito para Grava\xe7\xe3o",src:t(230).default})),Object(r.b)("p",null,"Pronto, agora pressione Upload(Careegar) e aguarde a grava\xe7\xe3o no Arduino UNO:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito para Grava\xe7\xe3o",src:t(231).default})),Object(r.b)("p",null,"Agora abra o terminal serial:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito para Grava\xe7\xe3o",src:t(232).default})),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"Verifique se a velocidade est\xe1 configurada em 9600. ")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}))),Object(r.b)("p",null,"Agora digite e G e pressione enviar. Ap\xf3s a grava\xe7\xe3o deve ser apresentada a seguinte mensagem no terminal:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Circuito para Grava\xe7\xe3o",src:t(233).default})),Object(r.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"ERRO")),Object(r.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"Se receber uma mensagem de erro, verifique as conex\xf5es el\xe9tricas e envie novamente o comando G."))),Object(r.b)("p",null,"Pronto, o ATtiny85 est\xe1 pronto para ser encaixado na sua Franzininho DIY. Retire-o com cuidado da matriz de contatos e encaixe-o corretamente na Franzininho DIY, conforme imagem abaixo"),Object(r.b)("p",null,Object(r.b)("img",{alt:"Placa Franzininho DIY",src:t(152).default})),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("p",null,"Agora que j\xe1 tem a sua placa Franzininho DIY preparada voc\xea pode partir para a programa\xe7\xe3o."),Object(r.b)("h2",{id:"gravar-muitos-chips"},"Gravar muitos chips"),Object(r.b)("p",null,"Caso voc\xea necessite gravar muitos chips voc\xea pode gravar ser usar o PC. Verifique a ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Franzininho/FranzBoot#readme"}),"documenta\xe7\xe3o do FranzBoot")," para mais detalhes."))}b.isMDXComponent=!0},123:function(e,a,t){"use strict";t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return m}));var n=t(0),o=t.n(n);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=o.a.createContext({}),b=function(e){var a=o.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},l=function(e){var a=b(e.components);return o.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},p=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=b(t),p=n,m=l["".concat(i,".").concat(p)]||l[p]||u[p]||r;return t?o.a.createElement(m,c(c({ref:a},d),{},{components:t})):o.a.createElement(m,c({ref:a},d))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var d=2;d<r;d++)i[d]=t[d];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},152:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/placa-franzininho-diy-d8459c4e0e0d4c724d1c4d619ffc0350.png"},228:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/circuito-58c7cff2dc28fe98b6f923e076cdb2d4.png"},229:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/IDE-Arduino-cabe65705eb2af6ca4940b4dada79e45.png"},230:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/IDE-Arduino-Configuracao-dde65494e76bfd5fe726b61692f4707c.png"},231:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/IDE-Arduino-Upload-802877937fd66a36829d4c86bf1097c3.png"},232:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/IDE-Arduino-Terminal-serial-248aa58aa3f811c7df29648366143242.png"},233:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/IDE-Arduino-Gravando-a69ad020e2520590375ce6a7c601429f.png"}}]);