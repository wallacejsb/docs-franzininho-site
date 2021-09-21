(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{102:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return c})),o.d(a,"metadata",(function(){return s})),o.d(a,"toc",(function(){return l})),o.d(a,"default",(function(){return m}));var n=o(3),r=o(7),t=(o(0),o(141)),i=["components"],c={id:"buzzer",title:"Instrumento musical com Buzzer",slug:"/franzininho-diy/exemplos-avr-libc/buzzer",description:"Nesse exemplo vamos criar um programa que l\xea uma partitura e toca a m\xfasica escrita atrav\xe9s de um buzzer no Franzininho DIY",authors:"Eduardo Due\xf1as",date:"05/06/2020",some_url:"https://github.com/EduardoDuenas"},s={unversionedId:"FranzininhoDIY/exemplos-avr-libc/buzzer",id:"FranzininhoDIY/exemplos-avr-libc/buzzer",isDocsHomePage:!1,title:"Instrumento musical com Buzzer",description:"Nesse exemplo vamos criar um programa que l\xea uma partitura e toca a m\xfasica escrita atrav\xe9s de um buzzer no Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/buzzer.md",slug:"/franzininho-diy/exemplos-avr-libc/buzzer",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/buzzer",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/buzzer.md",version:"current",sidebar:"docs",previous:{title:"Contador de pulsos externos",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/contadores"},next:{title:"TODO",permalink:"/docs-franzininho-site/en/docs/franzininho-diy/exemplos-avr-libc/todo"}},l=[{value:"<strong>Recursos necess\xe1rios</strong>",id:"recursos-necess\xe1rios",children:[]},{value:"<strong>Fazendo m\xfasica com o Buzzer</strong>",id:"fazendo-m\xfasica-com-o-buzzer",children:[{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",children:[]},{value:"<strong>Montagem</strong>",id:"montagem",children:[]},{value:"<strong>Compila\xe7\xe3o e upload</strong>",id:"compila\xe7\xe3o-e-upload",children:[]},{value:"<strong>Resultado</strong>",id:"resultado",children:[]}]},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",children:[]},{value:"Gloss\xe1rio",id:"gloss\xe1rio",children:[]}],u={toc:l};function m(e){var a=e.components,c=Object(r.a)(e,i);return Object(t.b)("wrapper",Object(n.a)({},u,c,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Nesse exemplo vamos criar um programa que l\xea uma partitura e toca a m\xfasica escrita atrav\xe9s de um buzzer na Franzininho DIY. Vamos aprender como se usar um buzzer passivo para gerar cada nota musical com ajuda do timer0."),Object(t.b)("p",null,"Boa pr\xe1tica!"),Object(t.b)("h2",{id:"recursos-necess\xe1rios"},Object(t.b)("strong",{parentName:"h2"},"Recursos necess\xe1rios")),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Franzininho DIY (com Micronucleos)"),Object(t.b)("li",{parentName:"ul"},"1 buzzer passivo 5v"),Object(t.b)("li",{parentName:"ul"},"4 jumpers macho-f\xeamea"),Object(t.b)("li",{parentName:"ul"},"1 jumper macho-macho")),Object(t.b)("h2",{id:"fazendo-m\xfasica-com-o-buzzer"},Object(t.b)("strong",{parentName:"h2"},"Fazendo m\xfasica com o Buzzer")),Object(t.b)("p",null,"Nesse exemplo vamos atrav\xe9s de uma ",Object(t.b)("em",{parentName:"p"},"lookup table")," vamos ensinar quais as frequ\xeancias de cada nota, e com o uso do timer vamos variar a entrada no buzzer na frequ\xeancia da nota que queremos. Com a ajuda de outra tabela, vamos dar para o Franzininho a sequ\xeancia das notas que queremos que ele toque, podendo assim, tocar a m\xfasica que quisermos."),Object(t.b)("p",null,"O buzzer passivo funciona como um pequeno alto falante, enquanto tivermos a tens\xe3o nominal na entrada positiva e o terra na entrada negativa o im\xe3 dentro dele vai para frente. Por outro lado, quando tivermos terra em ambas ele volta para a posi\xe7\xe3o inicial. Se variarmos entre esses dois estados na frequ\xeancia de uma nota musical geraremos uma onda sonora com o tom dela."),Object(t.b)("p",null,"As notas musicais ocidentais em uma escala maior s\xe3o ",Object(t.b)("em",{parentName:"p"},"Do Do# Re Re# Mi Fa Fa# Sol Sol# L\xe1 L\xe1# Si")," voltando para ",Object(t.b)("em",{parentName:"p"},"Do")," depois. Cada nota est\xe1 a uma dist\xe2ncia de meio tom da outra e a 6 tons de sua pr\xf3xima oitava, que \xe9 a mesma nota por\xe9m mais fina."),Object(t.b)("p",null,"Olhando pela frequ\xeancia temos que partindo de ",Object(t.b)("em",{parentName:"p"},"L\xe1")," da terceira oitava, 440Hz, cada ",Object(t.b)("em",{parentName:"p"},"L\xe1")," uma oitava acima tem o dobro da frequ\xeancia e cada oitava a baixo tem metade da frequ\xeancia. J\xe1 para subir cada semitom, basta multiplicar por 2^(1/12), ou para x semitons, 2^(x/12)."),Object(t.b)("h3",{id:"c\xf3digo"},Object(t.b)("strong",{parentName:"h3"},"C\xf3digo")),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-c"},'/***********************************************\n * @file main.c\n * @author Eduardo Due\xf1as / Daniel Quadros\n * @brief Exemplo tocar musicas usando buzzer\n * @version 1.0\n * @date 21/04/2021\n *\n * \xfaltima modifica\xe7\xe3o: 15/05/2021\n **********************************************/\n#include <avr/io.h>\n#include <avr/interrupt.h>\n\n#define F_CPU 16500000L\n\n#define setBit(valor,bit)      (valor |= (1 << bit))\n#define clearBit(valor,bit)    (valor &= ~(1 << bit))\n#define toogleBit(valor,bit)   (valor ^= (1 << bit))\n#define testBit(valor,bit)     (valor & (1 << bit))\n\n\n#define NumNotas 32\n#define CONT(freq) ((F_CPU*10L)/(256L*freq))\n\nenum notas {Pausa, Do, DoS, Re, ReS, Mi, Fa, FaS, Sol, SolS, La, LaS, Si, DoM, DoSM, ReM};\nlong f[16] = {\n    255L, (long)CONT(5232L), (long)CONT(5543L), (long)CONT(5873L), (long)CONT(6222L), (long)CONT(6592L), (long)CONT(6984L),\n    (long)CONT(7400L), (long)CONT(7840L), (long)CONT(8306L), (long)CONT(8800L), (long)CONT(9323L), (long)CONT(9877L),\n    (long)CONT(10465L), (long)CONT(11087L), (long)CONT(11746L)\n};\n\n// {0xFF,123, 116, 110, 104, 98, 92, 87, 82, 78, 73, 69, 65, 62, 58, 54}\n// Lookup table com os valores de cada nota a ser colocado na flag do timer\n\nchar Partitura[NumNotas] = {\n    Re, Mi, Mi, Re, Sol, FaS, FaS, FaS, Re, Mi, Mi, Re, La, Sol, Sol, Sol,\n    Re, ReM, ReM, Si, Sol, FaS, FaS, Mi, DoM, Si, Si, Sol, La, Sol, Sol, Sol\n};                                       // Partitura da m\xfasica\nvolatile char cont = 0;                  // Local da partitura\nvolatile long aux = 0;\n\n// Tratamento de interrup\xe7\xe3o\nISR (TIM0_COMPB_vect) {                  // Vetor de compara\xe7\xe3o B\n  if (aux <= 0xff) {                     // Se aux menor que 8bits\n    OCR0B = (TCNT0 + aux) & (0xff);      // Mandar aux para o contador\n    aux = f[Partitura[cont]];            // Reinicia o aux\n    toogleBit(PORTB, PB1);               // Inverter o buzzer\n  }\n  else {                                 // Se n\xe3o\n    OCR0B = TCNT0;                       // Mandar o tempoatual para o contador, o mesmo que esperar um overflow\n    aux -= 0xff;                         // Subitrair 8bits do aux\n  }\n}\n\n// Fun\xe7\xe3o main\nint main() {\n  enum notas nota;\n  setBit(DDRB, PB1);                     // Configura o PortB1 como sa\xedda, pino do buzzer\n\n  // Configura\xe7\xe3o do timer\n  TCCR0A = 0x00;                         // Configura pino de comparara\xe7\xe3o desconectado\n  TCCR0B = 0x04;                         // Configura o prescaler como 256\n  setBit(TIMSK, OCIE0B);                 // Habilita a interrup\xe7\xe3o por compara\xe7\xe3o de COMPB\n  sei();                                 // Habilita interrup\xe7\xf5es globais\n  aux = f[Partitura[cont]];              // Inicia o contador de COMPB\n\n  if (aux <= 0xff) {\n    OCR0B = (TCNT0 + aux) & (0xff);\n    aux = f[Partitura[cont]];\n    toogleBit(PORTB, PB1);\n  }\n  else {\n    OCR0B = TCNT0;\n    aux -= 0xff;\n  }\n\n  // Loop infinito\n  for (;;) {\n    long i;\n    for (i = 0; i < 1000000L; i++) {\n      asm ("nop");\n      cont++;                            // Avan\xe7a na partitura\n      if (cont >= NumNotas)cont = 0;     // Toca de novo\n  }\n}\n')),Object(t.b)("h3",{id:"montagem"},Object(t.b)("strong",{parentName:"h3"},"Montagem")),Object(t.b)("p",null,Object(t.b)("img",{alt:"circuito buzzer",src:o(292).default})),Object(t.b)("p",null,"Dependendo do buzzer \xe9 necess\xe1rio conectar os jumpers diretamente nos pinos do buzzer ao inv\xe9s de coloc\xe1-lo na protoboard."),Object(t.b)("h3",{id:"compila\xe7\xe3o-e-upload"},Object(t.b)("strong",{parentName:"h3"},"Compila\xe7\xe3o e upload")),Object(t.b)("p",null,"Para compilar o programa, acesse a pasta do exemplo e d\xea o comando ",Object(t.b)("inlineCode",{parentName:"p"},"make"),":"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-bash"},"exemplos-avr-libc/exemplos/buzzer$ make\n")),Object(t.b)("p",null,"Como j\xe1 temos o makerfile configurado na pasta, ser\xe1 feita compila\xe7\xe3o e deve aparecer a seguinte mensagem:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-bash"},"../../micronucleus/2.0a4/launcher  -cdigispark --timeout 60 -Uflash:w:main.hex:i\nRunning Digispark Uploader...\nPlug in device now... (will timeout in 60 seconds)\n> Please plug in the device (will time out in 60 seconds) ...\n")),Object(t.b)("p",null,"Conecte a placa em uma entrada USB ou, caso a Franzininho j\xe1 esteja conectada, aperte o bot\xe3o de reset para iniciar o upload."),Object(t.b)("h3",{id:"resultado"},Object(t.b)("strong",{parentName:"h3"},"Resultado")),Object(t.b)("p",null,"O buzzer deve tocar Parab\xe9ns para voc\xea e deve continuar em loop at\xe9 a placa ser desligada."),Object(t.b)("p",null,Object(t.b)("a",{parentName:"p",href:"https://wokwi.com/arduino/projects/302834828095521293"},"Simule esse exemplo no WokWi")),Object(t.b)("h2",{id:"conclus\xe3o"},Object(t.b)("strong",{parentName:"h2"},"Conclus\xe3o")),Object(t.b)("p",null,"O buzzer passivo \xe9 um componente muito vers\xe1til com o qual podemos, n\xe3o s\xf3, tocar m\xfasicas como tamb\xe9m gerar diversos tipos de efeitos sonoros, tudo que precisamos \xe9 entender como gerar o som que queremos. Al\xe9m disso vimos como podemos usar interrup\xe7\xf5es de timer para fun\xe7\xf5es que precisam de Real Time, ou seja, que precisam de precis\xe3o de tempo."),Object(t.b)("h2",{id:"gloss\xe1rio"},"Gloss\xe1rio"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"Setar: colocar um novo valor em um registrador. Para um bit \xe9 convencionado setar, mud\xe1-lo para valor 1, e clear (limpar), mud\xe1-lo para valor 0"),Object(t.b)("li",{parentName:"ul"},"Resetar: reiniciar"),Object(t.b)("li",{parentName:"ul"},"Timer: circuito eletr\xf4nico dedicado a contagem de tempo"),Object(t.b)("li",{parentName:"ul"},"Lookup table: tabela de consulta, no contexto de programa\xe7\xe3o \xe9 um vetor com informa\xe7\xf5es necess\xe1rias para o programa.")),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",{parentName:"tr",align:null},"Autor"),Object(t.b)("th",{parentName:"tr",align:null},Object(t.b)("a",{parentName:"th",href:"https://github.com/EduardoDuenas"},"Eduardo Due\xf1as")))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",{parentName:"tr",align:null},"Data:"),Object(t.b)("td",{parentName:"tr",align:null},"05/06/2020")))))}m.isMDXComponent=!0},141:function(e,a,o){"use strict";o.d(a,"a",(function(){return m})),o.d(a,"b",(function(){return b}));var n=o(0),r=o.n(n);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=r.a.createContext({}),u=function(e){var a=r.a.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},m=function(e){var a=u(e.components);return r.a.createElement(l.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=u(o),p=n,b=m["".concat(i,".").concat(p)]||m[p]||d[p]||t;return o?r.a.createElement(b,c(c({ref:a},l),{},{components:o})):r.a.createElement(b,c({ref:a},l))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<t;l++)i[l]=o[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},292:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/Exemplo_Buzzer_Circuito-a4e81be25a4bb91d65d45043dffc52ac.png"}}]);