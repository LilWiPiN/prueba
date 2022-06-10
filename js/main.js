'use string'

var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var button = document.querySelector('.button');         //THE BUTTON TO ANSWER
var input = document.querySelector('.text');            //THE INPUT TEXT
var answer = document.querySelector('.answer');         //THE TEXT WHERE SHOW THE ANSWER
var question = document.querySelector('.question');     //THE TEXT WHERE SHOW THE QUESTION


//CANVAS DIMENSIONS
var cWidth = canvas.width;
var cHeight = canvas.height;

//THE CIRCLE RADIO
var radio = 278;

//QUIESTIONS
var questions = [
    {
      letter: "A",
      question: "Conducto por donde va la sangre desde el corazón a las demás partes del cuerpo.",
      answer: "Arteria"
    },
    {
      letter: "B",
      question: "En los barcos, especie de armario que está fijo en la cubierta y situado muy cerca del timón donde se pone la brújula.",
      answer: "Bitácora"
    },
    {
      letter: "C",
      question: "Persona que sirve a otras de guía y les va enseñando y explicando lugares y cosas interesantes.",
      answer: "Cicerone"
    },
    {
      letter: "D",
      question: "Actividad que realiza un país para mantener buenas relaciones con el resto de países.",
      answer: "Diplomacia"
    },
    {
      letter: "E",
      question: "Cada uno de los dos momentos del año en que, por estar el Sol sobre el ecuador, los días y las noches duran lo mismo en toda la Tierra.",
      answer: "Equinoccio"
    },
    {
      letter: "F",
      question: "Ciencia que estudia las funciones de los órganos de los seres vivos.",
      answer: "Fisiología"
    },
    {
      letter: "G",
      question: "Cada una de las épocas, hace miles de años, en las que hacía mucho más frío que en la actualidad y gran parte de la Tierra estaba cubierta por hielo.",
      answer: "Glaciación"
    },
    {
      letter: "H",
      question: "Planta de flores amarillas que se usa como condimento, por el sabor de sus frutos parecido al del anís, y también en medicina porque ayuda a hacer la digestión.",
      answer: "Hinojo"
    },
    {
      letter: "I",
      question: "Capacidad para inventar cosas o para pensar y hablar con gracia.",
      answer: "Ingenio"
    },
    {
      letter: "J",
      question: "Mineral muy duro, de color verde o blanquecino, que se emplea en joyería y para hacer objetos de adorno.",
      answer: "Jade"
    },
    {
      letter: "K",
      question: "Piloto japonés que se lanzaba en su avión contra un barco u otro objetivo enemigo para destruirlo, aunque muriera al hacerlo.",
      answer: "Kamikaze"
    },
    {
      letter: "L",
      question: "Frase que expresa la forma en que debe actuar una persona.",
      answer: "Lema"
    },
    {
      letter: "M",
      question: "Prenda rígida o almidonada, a veces con aros, que antiguamente llevaban las mujeres bajo la falda para darle vuelo.",
      answer: "Miriñaque"
    },
    {
      letter: "N",
      question: "En las leyendas mitológicas, diosa con forma de muchacha que vivía en los bosques, las fuentes o los ríos.",
      answer: "Ninfa"
    },
    {
      letter: "Ñ",
      question: "Ave parecida al avestruz, pero más pequeña y con tres dedos en cada pie.",
      answer: "Ñandú"
    },
    {
      letter: "O",
      question: "Palabra que imita el sonido que hace un animal o una cosa.",
      answer: "Onomatopeya"
    },
    {
      letter: "P",
      question: "Edificio que es parte de un conjunto, de otro edificio más grande, o que está muy cerca de él.",
      answer: "Pabellón"
    },
    {
      letter: "Q",
      question: "Cosa que, sin ser real, alguien la imagina como posible o verdadera.",
      answer: "Quimera"
    },
    {
      letter: "R",
      question: "Pez marino que tiene una especie de ventosa en la cabeza con la que se fija a otros peces más grandes.",
      answer: "Rémora"
    },
    {
      letter: "S",
      question: "Traje negro y largo parecido a una túnica que llevan algunos curas y religiosos.",
      answer: "Sotana"
    },
    {
      letter: "T",
      question: "Escrito o declaración de palabra en el que alguien dice lo que quiere que se haga después de su muerte, sobre todo con su dinero o sus pertenencias.",
      answer: "Testamento"
    },
    {
      letter: "U",
      question: "Conjunto de casas y edificios que suelen ser parecidos y donde hay tiendas, parques y otros espacios que necesitan las personas que allí viven.",
      answer: "Urbanización"
    },
    {
      letter: "V",
      question: "Pájaro de color casi siempre negro o pardo que tiene el pico delgado, las alas muy largas y la cola en forma de horquilla. Vuela muy rápido.",
      answer: "Vencejo"
    },
    {
      letter: "W",
      question: "Licor con mucho alcohol que se hace al fermentar la cebada o algunos otros cereales.",
      answer: "Whisky"
    },
    {
      letter: "X",
      question: "Manera de hacer grabados sobre madera, dejando vacías las partes que deben quedar blancas en el dibujo.",
      answer: "Xilografía"
    },
    {
      letter: "Y",
      question: "Mamífero de gran tamaño parecido a un toro, pero con el cuero cubierto de un abundante pelo que lo protege del frío.",
      answer: "Yak"
    },
    {
      letter: "Z",
      question: "Banda más o menos ancha, cubierta de otro material o pintada, que hay en la parte baja de las paredes de una habitación.",
      answer: "Zócalo"
    }
]

//IN WHAT QUESTION WE ARE
var questionIndex = -1;

//CORRECT AND WRONG SCORES
var corrects = 0, wrongs = 0;




/*======================================
  OBJECTS
======================================*/

var letters = [];

function Letter(angle, letter) {

  this.angle = angle;             //IN WHAT ANGLE OF THE CIRCLE IS THE LLETTER
  this.letter = letter;           //THE LETTER TO DRAW
  this.correct = null;            //IF THE QUESTION IS CORRECT
  this.color = '';                //CIRCLE BACKGROUND COLOR
  this.radio = 30;                //THE OBJECT RADIO

  //CALCULATE THE X AND Y
  this.x = Math.cos(this.angle) * radio + cWidth/2;
  this.y = Math.sin(this.angle) * radio + cHeight/2;


  //FUCNTION THAT DRAW THE OBJECT
  this.Draw = function() {

    ctx.lineWidth = 2;

    //CHOOSE THE COLOR
    if (this.correct == true) this.color = '#12c121';
    else if (this.correct == false) this.color = '#ac0303';
    else if (this.correct == null) this.color = '#1d54c8';

    ctx.fillStyle = this.color;
    ctx.strokeStyle = '#000';

    //DRAW THE CIRCLE
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radio, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.fill();

    //DRAW THE LETTER
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 35px Impact';

    const textX = this.x - ctx.measureText(this.letter).width/2;
    const textY = this.y + ctx.measureText(this.letter).actualBoundingBoxAscent/2;

    ctx.fillText(this.letter, textX, textY);

  }

}

//ADD THE LETTERS
for (var i = 0; i < questions.length; i++) {

  const angle = 2*Math.PI / questions.length * i - Math.PI/2;
  letters.push(new Letter(angle, questions[i].letter));

}


/*======================================
    FUNCTIONS
======================================*/

//FUNCTION THAT DRAW THE CANVAS
function Draw() {
  for (var i = 0; i < questions.length; i++) {
    letters[i].Draw();
  }
}

//FUNCTION THAT REMOVES THE STRANGE CHARACTERS AND CAPITAL LETTERS FROM A WORD
function Normalize(text){

  //LE QUITO LOS CARACTERES TIPO ACENTOS O LOS DOS PUNTOS A LAS VOCALES
  let a = text.replace(/[ÁÀÄáàä]/g, "a");
  let e = a.replace(/[ÉÈËéèë]/g, "e");
  let i = e.replace(/[ÍÌÏíìï]/g, "i");
  let o = i.replace(/[ÓÒÖóòö]/g, "o");
  let u = o.replace(/[ÚÙÜúùü]/g, "u");

  //LO PASO TODO A MINUSCULAS
  let resultado = u.toLowerCase();

  return resultado;

}

//CHECK THE ANSWER
function Answer() {

  answerText = input.value;                             //THE ANSWER THE USER SET
  const index = questionIndex % questions.length;       //THE QUESTION WE ARE

  //IF IT'S NO ANSWER
  if (answerText.length <= 0) {
    Pasapalabra();
    return;
  }

  //RESET THE ANSWER ELEMENT CLASSES
  answer.className = 'answer ';

  //IF THE ANSWER IS CORRECT
  if (Normalize(answerText) == Normalize(questions[index].answer)) {
    answer.className += 'good';
    letters[index].correct = true;
    corrects++;
    answer.innerHTML = questions[index].answer;
  }
  //IF NOT
  else {
    answer.className += 'bad';
    letters[index].correct = false;
    wrongs++;
    answer.innerHTML = input.value + '->' + questions[index].answer;
  }

  input.disabled = true;        //DISABLE THE INPUT TEXT
  input.value = '';             //RESET THE INPUT VALUE
  Draw();                       //DRAW CANVAS

}

//PASS THE WORD
function Pasapalabra() {

  //IF THE GAME DOESN'T END
  if (corrects + wrongs < questions.length) {

    questionIndex++;
    const index = questionIndex % questions.length;

    //LOOKING FOR AN UNANSWERED QUESTION
    if (letters[index].correct != null) {
      Pasapalabra();
      return;
    }

    //RESET VALUES
    answer.innerHTML = '';
    question.innerHTML = questions[index].question;
    input.disabled = false;
    input.select();

    //DRAW
    Draw();

  }
  //IF GAME ENDS
  else DrawScore();

}

Pasapalabra();


//DRAW THE SCORE
function DrawScore() {

  const textCorrects = 'Bien: ' + corrects;
  const textWrongs = 'Mal: ' + wrongs;

  ctx.font = '30px Impact';

  //WHET TEXT WIDTH
  const widthCorrects = ctx.measureText(textCorrects).width;
  const widthWrongs = ctx.measureText(textWrongs).width;

  //GET THE X
  const correctsX =  (cWidth - widthCorrects)/2;
  const wrongsX =  (cWidth - widthWrongs)/2;

  //WRITE THE SCORE
  ctx.fillStyle = '#fff';
  ctx.fillText('Bien: ', correctsX, cHeight/2 - 30);
  ctx.fillText('Mal: ', wrongsX, cHeight/2 + 30);

  ctx.fillStyle = '#0f0';
  ctx.fillText(corrects, correctsX + ctx.measureText('Bien: ').width, cHeight/2 - 30);

  ctx.fillStyle = '#f00';
  ctx.fillText(wrongs, wrongsX + ctx.measureText('Mal: ').width, cHeight/2 + 30);

}



/*======================================
  EVENTS
======================================*/
button.addEventListener('click', Answer);
document.addEventListener('keyup', (e) => {
  if (e.keyCode == 13) Answer();
});
