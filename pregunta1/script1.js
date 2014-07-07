var width = 1000,
    height = 410;
var svg = d3.select("body").append("svg")
    .attr("width", width+300)
    .attr("height", height+200);

// Arrows markers

svg.append("defs")
    .append("marker")
    .attr("id", "markerEnd")
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 6)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M0,-5L10,0L0,5')
    .attr('fill', '#000');

svg.append("defs")
    .append("marker")
    .attr("id", "markerStart")
    .attr('viewBox', '0 -5 10 10')
    .attr('refX', 4)
    .attr('markerWidth', 3)
    .attr('markerHeight', 3)
    .attr('orient', 'auto')
    .append('svg:path')
    .attr('d', 'M10,-5L0,0L10,5')
    .attr('fill', '#000');

// Create Henk Bodrogi
var Henk_Bodrogi = svg
    .append("rect")
    .attr("class", "bold")
    .attr("x", 4*width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 4*width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Henk")
    .append("tspan")
    .attr("x", 4*width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Bodrogi");


//Create Carmine Osvaldo
var Carmine_Osvaldo = svg
    .append("rect")
    .attr("x", 5*width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 5*width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Carmine")
    .append("tspan")
    .attr("x", 5*width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Osvaldo");


// Create Line Henk_Bodrogi to Carmine_Osvaldo
svg.append("line")
    .attr("x1",4*width/8+100)
    .attr("y1",height/4+20)
    .attr("x2",5*width/8)
    .attr("y2",height/4+20);

//Create Jeroen Karel
var Jeroen_Karel = svg
    .append("rect")
    .attr("x", 3*width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 3*width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Jeroen")
    .append("tspan")
    .attr("x", 3*width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Karel");

// Create Line Henk_Bodrogi to Jeroen_Karel
svg.append("line")
    .attr("x1",3*width/8+100)
    .attr("y1",height/4+20)
    .attr("x2",4*width/8)
    .attr("y2",height/4+20);

//Create Jeroen Karel
var Valentine_Mies = svg
    .append("rect")
    .attr("x", 2*width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 2*width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Valentine")
    .append("tspan")
    .attr("x", 2*width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Mies");

// Create Line Valentine Mies to Jeroen_Karel
svg.append("line")
    .attr("x1",2*width/8+100)
    .attr("y1",height/4+20)
    .attr("x2",3*width/8)
    .attr("y2",height/4+20);

//Create Jeroen Karel
var Ale_Hanne = svg
    .append("rect")
    .attr("x", width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Ale")
    .append("tspan")
    .attr("x", width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Hann");

// Create Line Valentine Mies to Ale_Hanne
svg.append("line")
    .attr("x1",width/8+100)
    .attr("y1",height/4+20)
    .attr("x2",2*width/8)
    .attr("y2",height/4+20);

//Create Joreto_Katell
var Joreto_Katell = svg
    .append("rect")
    .attr("x", 6*width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 6*width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Joreto")
    .append("tspan")
    .attr("x", 6*width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Katell");

// Create Line Carmine_Osvaldo to Joreto_Katell
svg.append("line")
    .attr("x1",5*width/8+100)
    .attr("y1",height/4+20)
    .attr("x2",6*width/8)
    .attr("y2",height/4+20);

//Create Joreto_Katell
var Yanick_Cato = svg
    .append("rect")
    .attr("x", 7*width/8)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 7*width/8 )
    .attr("y", height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Yanick")
    .append("tspan")
    .attr("x", 7*width/8 )
    .attr("y", height/4+15)
    .attr("dy", "20px")
    .attr("dx", "45px")
    .text("Cato");

// Create Line Yanick_Cato to Joreto_Katell
svg.append("line")
    .attr("x1",6*width/8+100)
    .attr("y1",height/4+20)
    .attr("x2",7*width/8)
    .attr("y2",height/4+20);


//Create Elain_Karel
var Elain_Karel = svg
    .append("rect")
    .attr("class", "bold")
    .attr("x", 4*width/8)
    .attr("y", 2*height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 4*width/8 )
    .attr("y", 2*height/4)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Elain")
    .append("tspan")
    .attr("x", 4*width/8 )
    .attr("y", 2*height/4+15)
    .attr("dy", "20px")
    .attr("dx", "50px")
    .text("Karel");


// Create Line Henk Bodrogi to Elain_Karel
svg.append("line")
    .attr("x1",4*width/8+50)
    .attr("y1",height/4+40)
    .attr("x2",4*width/8+50)
    .attr("y2",2*height/4-2)
    .attr("marker-end","url(#markerEnd)");

//Create Silvia_Marek and Mandor_Vann
var Silvia_Marek = svg
    .append("rect")
    .attr("x", 3*width/8)
    .attr("y", 3*height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("visibility", "hidden");

var Mandor_Vann = svg
    .append("rect")
    .attr("x", 5*width/8)
    .attr("y", 3*height/4)
    .attr("width", 100)
    .attr("height", 45)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("visibility", "hidden");

// Create text

var textplace= svg
    .append("rect")
    //.style("stroke", "none");
    .style("stroke", "#514C55")
    .style("stroke-width", "3");

textplace
    .attr("x", width/8)
    .attr("y", 4*height/4)
    .attr("width", 7*width/8)
    .attr("height", height/4+100)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("visibility", "hidden");


var texttitle = svg.append("foreignObject")
    .attr("x", width/8+10)
    .attr("y", 4*height/4+10)
    .attr("width", 7*width/8-10)
    .attr("height", height/4+90)
    ;

// Add Data
Henk_Bodrogi.on("click", function() {
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Jeroen_Karel.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Henk_Bodrogi.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("bodrogi.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px; color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});

Carmine_Osvaldo.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Jeroen_Karel.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("osvaldo.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px; color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});

Elain_Karel.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Jeroen_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Silvia_Marek.transition()
        .style("fill", "red");
    Elain_Karel.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("eKarel.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();

    Silvia_Marek.transition()
        .style("visibility", "visible");

    Mandor_Vann.transition()
        .style("visibility", "visible");

    svg.append("line")
        .attr("class", "invisible futureleadership")
        .attr("x1", width/8 )
        .attr("y1", 2.75*height/4)
        .attr("x2", width )
        .attr("y2", 2.75*height/4);

    svg.append("text")
        .attr("class", "invisible futureleadership")
        .style("stroke", "none")
        .attr("x", width/8 )
        .attr("y", 2.75*height/4)
        .attr("dy", "20px")
        .attr("dx", "20px")
        .text("Future Leadership of POK");

    svg.append("text")
        .attr("class", "invisible")
        .attr("x", 3*width/8 )
        .attr("y", 3*height/4)
        .attr("dy", "20px")
        .attr("dx", "50px")
        .style("text-anchor", "middle")
        .text("Silvia")
        .append("tspan")
        .attr("x", 3*width/8 )
        .attr("y", 3*height/4+15)
        .attr("dy", "20px")
        .attr("dx", "50px")
        .text("Marek");

    svg.append("g")
        .append("path")
        .attr("class", "link invisible")
        .attr("stroke-dasharray", "10,10")
        .attr("marker-end","url(#markerEnd)")
        .attr("d", function() {
            var dx = (4*width/8+50) - (3*width/8+100),
                dy =  (2*height/4+40)- (3*height/4+20),
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" +
                (4*width/8+50) + "," +
                (2*height/4+40)+
                "A" +
                dr + "," + dr + " 0 0,1 " +
                (3*width/8+100) + "," +
                (3*height/4+20)
                ;
        });

    svg.append("text")
        .attr("class", "invisible")
        .attr("x", 5*width/8 )
        .attr("y", 3*height/4)
        .attr("dy", "20px")
        .attr("dx", "50px")
        .style("text-anchor", "middle")
        .text("Mandor")
        .append("tspan")
        .attr("x", 5*width/8 )
        .attr("y", 3*height/4+15)
        .attr("dy", "20px")
        .attr("dx", "50px")
        .text("Vann");

    svg.append("g")
        .append("path")
        .attr("class", "link invisible")
        .attr("marker-start","url(#markerStart)")
        .attr("stroke-dasharray", "10,10")
        .attr("d", function() {
            var dx = (4*width/8+50) - (5*width/8),
                dy =  (2*height/4+40)- (3*height/4+20),
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" +
                (5*width/8)+ "," +
                (3*height/4+20)+
                "A" +
                dr + "," + dr + " 0 0,1 " +
                (4*width/8+50) + "," +
                (2*height/4+40)
                ;
        });


    d3.event.stopPropagation();
});

Jeroen_Karel.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Jeroen_Karel.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("jKarel.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});

Mandor_Vann.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Silvia_Marek.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Mandor_Vann.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("vann.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    d3.event.stopPropagation();
});

Silvia_Marek.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Mandor_Vann.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Silvia_Marek.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("marek.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    d3.event.stopPropagation();
});

Valentine_Mies.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("mies.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});

Ale_Hanne.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("hanne.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});

Joreto_Katell.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Jeroen_Karel.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("katell.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});

Yanick_Cato.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "#29493B");
    Elain_Karel.transition()
        .style("fill", "#29493B");
    Carmine_Osvaldo.transition()
        .style("fill", "#29493B");
    Jeroen_Karel.transition()
        .style("fill", "#29493B");
    Valentine_Mies.transition()
        .style("fill", "#29493B");
    Ale_Hanne.transition()
        .style("fill", "#29493B");
    Joreto_Katell.transition()
        .style("fill", "#29493B");
    Yanick_Cato.transition()
        .style("fill", "#965F00");

    textplace.style("visibility", "visible");
    textplace.transition().style("fill", "#965F00");
    d3.text("cato.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: '+(7*width/8-10)+'px;  color:#ECE9E0; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("visibility", "hidden");
    Mandor_Vann.style("visibility", "hidden");
    d3.event.stopPropagation();
});
