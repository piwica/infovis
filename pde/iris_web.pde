 var lines;
 var clase1= "setosa";
 var clase2= "versicolor";
 var clase3= "virginica";
 var width_gap=70;
 var height_gap=20;


 void setup() {
   size(500+width_gap, 400+height_gap);
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
    line(width_gap,0,width_gap,height-height_gap);
    line(width_gap,height-height_gap,width-100,height-height_gap);
    textSize(11);
   //Dibujar ejes
    for (int a = 0; a < width-150; a+=50){
        text(nfc(a/40, 1), a+50, height-10);
    }
    for (int a = 50; a < height-50; a+=50){
            text(nfc(a/40, 1), 50, 400-a);
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
            ellipse(line[x]*40+width_gap, 400-line[y]*40-height_gap, 8, 8);
        }

    //Dibujar Leyenda
    fill(228,26,28);
    stroke(228,26,28);
    ellipse(width-100, height/2, 8, 8);
    fill(0);
    text(clase1, width-90,height/2);
    fill(55,126,184);
    stroke(55,126,184);
    ellipse(width-100, height/2+10, 8, 8);
    fill(0);
    text(clase2, width-90,height/2+10);
    fill(77,175,74);
    stroke(77,175,74);
    ellipse(width-100, height/2+20, 8, 8);
    fill(0);
    text(clase3, width-90,height/2+20);
    stroke(0);
    fill(0);
    
 } 

