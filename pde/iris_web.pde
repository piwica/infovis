 String[] lines;
 var clase1= "Iris-setosa";
 var clase2= "Iris-versicolor";
 var clase3= "Iris-virginica";



 void setup() {
   size(520, 410);
   lines = loadStrings("pde/iris_dataset.txt");
   titles = lines[0].split(",");
   var x = document.getElementById("ejeX");
   var y= document.getElementById("ejeY");
   for (int a = 0; a < titles.length -1 ; a++) {
       var optionX = document.createElement("option");
       var optionY = document.createElement("option");
       optionX.text = titles[a];
       optionX.value = a;
       optionY.text = titles[a];
       optionY.value = a;
       x.add(optionX);
       y.add(optionY);
     }
    noLoop();
 }

 void draw() {
    var x = document.getElementById("ejeX").value;
    var y = document.getElementById("ejeY").value;
    background(255);
    stroke(0);
    fill(0);
    line(20,0,20,height-10);
    line(20,height-10,width-100,height-10);
    textSize(11);
    //Dibujar ejes
    for (int a = 0; a < width-150; a+=50){
        text(nfc(a/40, 1), a, height);
    }
    for (int a = 50; a < height-50; a+=50){
            text(nfc(a/40, 1), 0, 400-a);
    }
    //Dibujar Puntos
    for (int a=1; a < lines.length; a++){
        var line = lines[a].split(",");
        if (line[4]===clase1){
            fill(228,26,28);
            stroke(228,26,28);
        }
        else if (line[4]===clase2){
             fill(55,126,184);
             stroke(55,126,184);
        }
        else if (line[4]===clase3){
             fill(77,175,74);
             stroke(77,175,74);
        }
        ellipse(line[x]*40+20, 400-line[y]*40-10, 8, 8);
    }
    //Dibujar Leyenda
    fill(228,26,28);
    stroke(228,26,28);
    ellipse(420, 200, 8, 8);
    fill(0);
    text(clase1, 430,200);
    fill(55,126,184);
    stroke(55,126,184);
    ellipse(420, 220, 8, 8);
    fill(0);
    text(clase2, 430,220);
    fill(77,175,74);
    stroke(77,175,74);
    ellipse(420, 240, 8, 8);
    fill(0);
    text(clase3, 430,240);
 }

