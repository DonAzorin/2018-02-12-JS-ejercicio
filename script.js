function palindromo(form) {
  var Original = form.verif.value;
  var Original = Original.toLowerCase().replace(/ /g, '');
  var Original = Original.replace(/á/g, 'a').replace(/é/g, 'e').replace(/í/g, 'i').replace(/ó/g, 'o').replace(/ú/g, 'u');
  var Original = Original.replace(/[^a-zA-Z 0-9.]+/g, '');
  var Revisar = Original.split("");
  var Inverso = Revisar.reverse().join().replace(/,/g, '');
  console.log(Original);
  console.log(Inverso);
  if (Original === Inverso) {
    document.getElementById('result').innerHTML = 'Genial, es un palíndromo :D'
    console.log('Genial, es un palíndromo :D');
    } else {
    document.getElementById('result').innerHTML = 'Lo siento, no es un palíndromo :c'
    console.log('Lo siento, no es un palíndromo :c');
    }
}

function piramide (form) {
  var niveles = form.niveles.value;
  console.log(niveles);
  var pisos = "";
	var ladrillo = "";

  for (var i = 1; i <= niveles; i++) {
    pisos = ' '.repeat(niveles - i)
    ladrillo = ladrillo + '*';
    console.log (pisos + ladrillo + ladrillo);
    var div = document.querySelector('.pyramid-div');
    var pre = document.createElement('pre');
    div.appendChild(pre);
    pre.innerHTML = pisos + ladrillo + ladrillo;
  }
}

function niveles(form) {
  var lv = form.level.value
  console.log(lv);

  if (lv <= 3) {
    document.getElementById('imglv').src = "http://www.sherv.net/cm/emoticons/rage/okay-guy-meme-smiley-emoticon.png";
    document.getElementById('lvtxt').innerHTML = 'Eres un bebé todavía...';
  } else if (lv <=5) {
    document.getElementById('imglv').src = "https://cdn.vectorstock.com/i/thumb-large/37/58/why-guy-meme-face-for-any-design-isolated-vector-10943758.jpg";
    document.getElementById('lvtxt').innerHTML = 'Eres una deshonra para ti, tu familia y tu vaca';
  } else if (lv <= 7) {
    document.getElementById('imglv').src = "http://www.sherv.net/cm/emoticons/rage/fuck-that-bitch-troll-rage-smiley-emoticon.png";
    document.getElementById('lvtxt').innerHTML = 'Eres un suertudo';
  } else if (lv <= 8) {
    document.getElementById('imglv').src = "http://www.sherv.net/cm/emoticons/memes/not-bad-meme-smiley-emoticon.png";
    document.getElementById('lvtxt').innerHTML = 'Eres del montón';
  } else if (lv <= 9) {
    document.getElementById('imglv').src = "http://www.sherv.net/cm/emoticons/memes/fuck-yeah-meme-smiley-emoticon.png";
    document.getElementById('lvtxt').innerHTML = 'Eres de los mejores del montón';
  } else {
    document.getElementById('imglv').src = "http://www.sherv.net/cm/emoticons/rage/freddie-mercury-rage-smiley-emoticon.png";
    document.getElementById('lvtxt').innerHTML = '¡Eres EL Sr. Dr. Prof. Dn. Mega Pro!';
  }
}

function fibonacci(form){
  var num = form.numero.value
  console.log(num);

  var num1 = 0
  var num2 = 1
  var printFibo = []

  for (var i = 0; i < num; i++) {
    var secfi = num1;
    num1 = num2;
    num2 = secfi + num2
    printFibo.push (' ' + secfi);
    console.log(secfi);
    }
  document.getElementById('printFibo').innerHTML = printFibo;
}

// function ordenar_lista (form){
//   var desordenado = form.digitos.value
//   console.log(desordenado);
//
//   var desordenado = desordenado.split(" ");
//
//   console.log(desordenado);
// }
