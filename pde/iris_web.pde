 var lines;
 var clase1= "setosa";
 var clase2= "versicolor";
 var clase3= "virginica";



 void setup() {
   size(570, 410);
   String str[] = loadStrings("pde/iris.json");
   var allstr="";
   for (int i = 0 ; i < str.length; i++) {
     allstr+=str[i];
   }
   lines = jQuery.parseJSON(allstr);
   var x = document.getElementById("ejeX");
   var y= document.getElementById("ejeY");
   var titles={"sepalLength", "sepalWidth", "petalLength", "petalWidth"};
   for (int a = 0; a < titles.length ; a++) {
       var optionX = document.createElement("option");
       var optionY = document.createElement("option");
       optionX.text = titles[a];
       optionX.value = titles[a];
       optionY.text = titles[a];
       optionY.value = titles[a];
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
    line(70,0,20,height-10);
    line(70,height-10,width-100,height-10);
    textSize(11);
    text(x, width/2-100,height);
    rotate(-PI/2);               // Rotate by theta
    text(y, 0,height/2);
    //Dibujar ejes
    for (int a = 0; a < width-150; a+=50){
        text(nfc(a/40, 1), a, height);
    }
    for (int a = 50; a < height-50; a+=50){
            text(nfc(a/40, 1), 0, 400-a);
    }
    //Dibujar Puntos
        for (int a=1; a < lines.length; a++){
            var line = lines[a];
            if (line["species"]===clase1){
                fill(228,26,28);
                stroke(228,26,28);
            }
            else if (line["species"]===clase2){
                 fill(55,126,184);
                 stroke(55,126,184);
            }
            else if (line["species"]===clase3){
                 fill(77,175,74);
                 stroke(77,175,74);
            }
            ellipse(line[x]*40+70, 400-line[y]*40-10, 8, 8);
        }

    //Dibujar Leyenda
    fill(228,26,28);
    stroke(228,26,28);
    ellipse(420, 250, 8, 8);
    fill(0);
    text(clase1, 480,200);
    fill(55,126,184);
    stroke(55,126,184);
    ellipse(420, 270, 8, 8);
    fill(0);
    text(clase2, 480,220);
    fill(77,175,74);
    stroke(77,175,74);
    ellipse(420, 290, 8, 8);
    fill(0);
    text(clase3, 480,240);
 }

