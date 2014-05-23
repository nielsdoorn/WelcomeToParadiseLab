# Welcome To Paradise

Om deze LAB te maken gaan we steeds stapje voor stapje door de HTML en de CSS heen. 

## Stap 1
In de map start staat onze uitgangspositie. Deze bestaat uit een HTML bestand, `index.html`, een map css met daarin `style.css` en een map images met daarin een aantal plaatjes.

a) open `index.html` in je editor.

b) copy-paste de volgende code in de BODY van de HTML:
```
<div id="container">
  <div id="header"> Welcome to Paradise </div>
  <div id="menu"> 
  </div>
  <div id="content">
  </div>
</div>
```

## Stap 2

De CSS structuur maken en inhoud in de HTML plaatsen.

a) copy paste de volgende structuur in `style.css`

```
div#container {
}

header {
}

nav {
}

article {
}
```

b) de container een breedte geven en centreren, vervang `div#container` met de volgende regels in de CSS:

```
div#container {
	width:850px;
	margin: 0 auto;
}
```

c) voeg content toe aan de div met het id content in de HTML:

```
<p>Habeo dicit abhorreant no mel. Eam mazim virtute utroque an, choro dicunt suscipit an mea. At pro exerci moderatius dissentiet, viris docendi neglegentur eum cu. Ei vis aeterno nominavi reformidans, tempor aeterno nominavi ad eum. </p>
<p> Et vim dico assum, in elaboraret mediocritatem usu, at vis labitur vocibus appareat. Fastidii honestatis dissentiunt id sit. Rebum graece nam eu, erant tempor id nam. In graeci putant vel, usu malorum imperdiet in, ad sint suscipiantur ius. Quot illum lorem his in, sit te minim perfecto. Probatus dissentias nam ne, vim id ignota consulatu. </p>
<p> Ea vim argumentum definitiones. Perfecto iudicabit an mel, vidit rebum qui no. Phaedrum tacimates mnesarchum id nec, recusabo disputationi cu duo, ius te prima euismod intellegam. Et tempor delicata convenire sed. Eu qui dolor voluptatibus. Ei sint nostrud placerat est. </p>
<p> Congue verear inciderint ne vix. Cum labore ceteros in, timeam referrentur ex vel. Duo doctus reprimique et, vim in nonumes partiendo. Quas aliquid fuisset vim ne, in quo brute periculis, ex qui augue vulputate voluptaria. Ei nec iusto epicuri. Ex vocibus voluptatum pro, legendos cotidieque an qui. </p>
<p> Sea rebum repudiandae id. Case veniam rationibus ea vis, te animal tritani pri. Est veniam nemore efficiendi no. Essent praesent sea ne, pro facilis assueverit ea. At eos quodsi facilisis temporibus, illum primis nam ad. </p>
<p> Minimum eleifend no nam, noster omittantur vituperatoribus in eos. Sed an duis officiis maiestatis, has et viderer ceteros accusata, vero definiebas no qui. Posse accusamus te qui, noster facilis cotidieque sit ad. Elit habeo impedit ad pro. </p>
<p> Per in putent aliquid. No mei hinc vituperata delicatissimi. Mea admodum argumentum ei. Altera probatus cu eum, ferri soluta intellegebat mei cu. Quot veri consul ad has, has quot vero graeco ut, eu est nostrum dignissim. </p>
<p> Eum no fugit aeque, falli eleifend nam at. Duo nulla putent admodum cu, elit iusto blandit his ei. Ullum labitur reprimique est ei. Cetero phaedrum id nec, eum quis nibh in. </p>
<p> Ne habeo expetendis intellegam mel. Ius ei nihil splendide, est diceret appareat lucilius no, in cum veniam pericula torquatos. Sea ea epicurei consequat conceptam, sint velit paulo quo et. Eu duis dicat diceret mel. Mundi delicata definitionem pro no, ea cum legere iuvaret principes. </p>
<p> His propriae delectus luptatum ea, et modo soleat deterruisset vix. At diceret tractatos vim. Fabellas interpretaris in sit, pri homero melius reprimique in. Vix ne incorrupte reprehendunt, eu prompta appellantur est. Cu qui corpora recusabo neglegentur, est ridens mollis adipiscing ex, ad exerci accommodare consectetuer eos. Quis epicurei phaedrum ex his, nec ad deserunt conceptam. </p>
```

## Stap 3

Een achtergrondplaatje voor de body

a) voeg de volgende code toe aan je CSS (bovenaan):

```
html, body {
	height: 100%;
	width: 100%;
	padding: 0;
	margin: 0;
}

body {
	background-image: url('../images/wolken_breed.png');
	background-repeat:no-repeat;
	background-attachment:fixed;
}
```

b) toevoegen van een gradient, vervang de body in de CSS:
```
body {
	background-image: url('../images/wolken_breed.png'),  -webkit-gradient(linear, center bottom, center top, from(#0A790D), color-stop(25%, #45AFEA), to(#45AFEA));
	background-repeat:no-repeat;
	background-attachment:fixed;
}
```
## Stap 4

Div'jes ronde hoeken geven

a) copy-paste de volgende code in de CSS:
```
header, nav, article {
	border-radius: 20px;
	padding: 10px;
	margin: 10px;
}
```
b) voeg de volgende regel toe in de CSS aan header, menu en content:
```
background: rgba(235, 234, 228, 0.6);
```
*Je bent nu bij CHECKPOINT 1, als dingen niet goed werken, kopieer dan de bestanden uit de map "2 checkpoint 1".*


## Stap 5

Het menu.

a) voeg toe aan de HTML in de menu div:
```
<ul>
  	<li><a href="index.html">Home</a></li>
    <li><a href="info.html">Info</a></li>
    <li><a href="contact.html">Contact</a></li>
</ul>
```

b) vervang in de CSS:
```
div#menu {
	background: rgba(235, 234, 228, 0.6);
	height: 47px;
	padding: 0;
}
```
c) voeg toe onder `div#menu`:
````
div#menu ul {
	list-style: none;
	padding: 0;
	margin: 0;
}

div#menu li {
	display: inline-block;
	margin-left: 10px;
	padding: 10px;
	border-radius: 10px;
}

div#menu a {
	text-decoration:none;
	color:#800;
}

div#menu li:hover {
	background-color:#45AFEA;
}
```
d) aangeven welk item geselecteerd is, voeg de volgende code toe aan de CSS:
```
div#menu li.selected {
	background-color: white;
}
```
e) en voegen we een class toe aan het geselecteerde element in het menu in de HTML:

in de `index.html` is dat (het gaat om het `class="selected"` gedeelte):
```
<li class="selected"><a href="index.html">Home</a></li>
```
*Je bent nu bij CHECKPOINT 2, als dingen niet goed werken, kopieer dan de bestanden uit de map "3 checkpoint 2".*


## Stap 6

Mooiere lettertypes!

a) Voeg toe in de HEAD van de HTML:
```
<link href='http://fonts.googleapis.com/css?family=Miltonian' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Rammetto+One' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Lancelot' rel='stylesheet' type='text/css'>
```

b) voeg toe aan`header` in de CSS:

```
font-family: 'Miltonian', cursive;
font-size:48pt;
text-align:center;
color:#800;
```

c) voeg toe aan `nav a` (let op! niet `nav`, maar `nav a`) in de CSS:
```
font-family: 'Rammetto One', cursive;
```
d) voeg toe aan div#content in de CSS:
```
font-family: 'Lancelot', cursive;
font-size:18pt;
```
## Stap 7

Afbeelding toevoegen!

a) plaats halverwege de content (Lorum Ipsem) een image tag toe aan de HTML:
```
<img src="images/paradise.jpeg" />
```
b) de image style, voeg toe aan de CSS:
```
img {
	float: left;
	margin-right: 10px;
	margin-top: 10px;
	margin-bottom: 10px;
	border-radius: 10px;
}
```

## Stap 8

De vervolgpagina's maken.

a) Kopieer `index.html` naar `contact.html` en `info.html`. Dit kan in de windows verkenner of vanuit Dreamweaver met opslaan als.

b) Pas in de twee nieuwe bestanden het geselecteerde menu item aan:

in beide bestanden:
```
<li><a href="index.html">Home</a></li>
```
in `info.html`:
```
<li class="selected"><a href="info.html">Info</a></li>
```
in `contact.html`:
```
<li class="selected"><a href="contact.html">Contact</a></li>
```
## Stap 9

De achtergrond animeren met CSS!

a) voeg deze animatie toe aan de CSS bovenaan:
```
@-webkit-keyframes clouds {
        0%   { background-position: -1500px 0px; }
        100% { background-position: 1500px 0px; }
}
```
b) en voeg toe aan de body selector in de CSS:
```
-webkit-animation-name: clouds;
-webkit-animation-iteration-count: infinite;
-webkit-animation-timing-function: linear;
-webkit-animation-duration: 300s;
```
## Stap 10

Achtergrond transities animeren

a) voeg helemaal bovenaan de volgende code toe aan de CSS:
```
* {
	transition: background-color 1s ease-in-out;
}
```


testje
