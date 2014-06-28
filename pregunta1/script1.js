var width = 600,
    height = 400;
var svg = d3.select("body").append("svg")
    .attr("width", width+300)
    .attr("height", height+100);

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
    .attr("x", width/6)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 40)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", width/6 )
    .attr("y", height/4)
    .attr("dy", "25px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Henk Bodrogi");


//Create Carmine Osvaldo
var Carmine_Osvaldo = svg
    .append("rect")
    .attr("x", 4*width/6)
    .attr("y", height/4)
    .attr("width", 100)
    .attr("height", 40)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 4*width/6 )
    .attr("y", height/4)
    .attr("dy", "25px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Carmine Osvaldo");


// Create Line Henk_Bodrogi to Carmine_Osvaldo
svg.append("line")
    .attr("x1",width/6+100)
    .attr("y1",height/4+20)
    .attr("x2",4*width/6-3)
    .attr("y2",height/4+20)
    .attr("marker-end","url(#markerEnd)")
    .attr("marker-start","url(#markerStart)");

//Create Jeroen Karel
var Jeroen_Karel = svg
    .append("rect")
    .attr("x", 2.5*width/6)
    .attr("y", 2*height/4)
    .attr("width", 100)
    .attr("height", 40)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 2.5*width/6 )
    .attr("y", 2*height/4)
    .attr("dy", "25px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Jeroen Karel");

// Create Line Henk_Bodrogi to Jeroen_Karel
svg.append("g")
    .append("path")
    .attr("class", "link")
    .attr("marker-start","url(#markerStart)")
    .attr("d", function() {
        var dx = (width/6+50) - (2.5*width/6),
            dy =  (height/4+40)- (2*height/4+20),
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" +
            (2.5*width/6) + "," +
            (2*height/4+20)+ "A" +
            dr + "," + dr + " 0 0,1 " +
            (width/6+50) + "," +
            (height/4+40)
            ;
    });

// Create Line Carmine_Osvaldo to Jeroen_Karel
svg.append("g")
    .append("path")
    .attr("class", "link")
    .attr("marker-end","url(#markerEnd)")
    .attr("d", function() {
        var dx = (4*width/6+50) - (2.5*width/6+102),
            dy =  (height/4+40)- (2*height/4+20),
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" +
            (4*width/6+50) + "," +
            (height/4+40)+
             "A" +
            dr + "," + dr + " 0 0,1 " +
            (2.5*width/6+102) + "," +
            (2*height/4+20)
            ;
    });

//Create Elain_Karel
var Elain_Karel = svg
    .append("rect")
    .attr("x", 2.5*width/6)
    .attr("y", 3*height/4)
    .attr("width", 100)
    .attr("height", 40)
    .attr("rx", 10)
    .attr("ry", 10);

svg.append("text")
    .attr("x", 2.5*width/6 )
    .attr("y", 3*height/4)
    .attr("dy", "25px")
    .attr("dx", "50px")
    .style("text-anchor", "middle")
    .text("Elain Karel");

// Create Line Henk_Bodrogi to Elain_Karel
svg.append("g")
    .append("path")
    .attr("class", "link")
    .attr("marker-start","url(#markerStart)")
    .attr("d", function() {
        var dx = (width/6+50) - (2.5*width/6),
            dy =  (height/4+40)- (3*height/4+20),
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" +
            (2.5*width/6) + "," +
            (3*height/4+20)+ "A" +
            dr + "," + dr + " 0 0,1 " +
            (width/6+50) + "," +
            (height/4+40)
            ;
    });

// Create Line Carmine_Osvaldo to Elain_Karel
svg.append("g")
    .append("path")
    .attr("class", "link")
    .attr("marker-end","url(#markerEnd)")
    .attr("d", function() {
        var dx = (4*width/6+50) - (2.5*width/6+102),
            dy =  (height/4+40)- (3*height/4+20),
            dr = Math.sqrt(dx * dx + dy * dy);
        return "M" +
            (4*width/6+50) + "," +
            (height/4+40)+
            "A" +
            dr + "," + dr + " 0 0,1 " +
            (2.5*width/6+102) + "," +
            (3*height/4+20)
            ;
    });


// Create Line Jeroen_Karel to Elain_Karel
svg.append("line")
    .attr("x1",2.5*width/6+50)
    .attr("y1",2*height/4+40)
    .attr("x2",2.5*width/6+50)
    .attr("y2",3*height/4-2)
    .attr("marker-end","url(#markerEnd)");

//Create Silvia_Marek and Mandor_Vann
var Silvia_Marek = svg
    .append("rect")
    .attr("x", width/6)
    .attr("y", 4*height/4)
    .attr("width", 100)
    .attr("height", 40)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("fill", "white");

var Mandor_Vann = svg
    .append("rect")
    .attr("x", 4*width/6)
    .attr("y", 4*height/4)
    .attr("width", 100)
    .attr("height", 40)
    .attr("rx", 10)
    .attr("ry", 10)
    .style("fill", "white");

// Create text

var textplace= svg
    .append("rect");

textplace.style("fill", "white")
    .attr("x", width)
    .attr("y", height/4)
    .attr("width", 300)
    .attr("height", 3*height/4)
    .attr("rx", 10)
    .attr("ry", 10);


var texttitle = svg.append("foreignObject")
    .attr("x", width+10)
    .attr("y", height/4+10)
    .attr("width", 290)
    .attr("height", 3*height/4)
    ;

// Add Data
Henk_Bodrogi.on("click", function() {
    Carmine_Osvaldo.transition()
        .style("fill", "steelblue");
    Jeroen_Karel.transition()
        .style("fill", "steelblue");
    Elain_Karel.transition()
        .style("fill", "steelblue");
    Henk_Bodrogi.transition()
        .style("fill", "#23415A");

    textplace.transition().style("fill", "#23415A");
    d3.text("bodrogi.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: 290px; color:white; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("fill", "white");
    Mandor_Vann.style("fill", "white");
    d3.event.stopPropagation();
});

Carmine_Osvaldo.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "steelblue");
    Jeroen_Karel.transition()
        .style("fill", "steelblue");
    Elain_Karel.transition()
        .style("fill", "steelblue");
    Carmine_Osvaldo.transition()
        .style("fill", "#23415A");

    textplace.transition().style("fill", "#23415A");
    d3.text("osvaldo.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: 290px; color:white; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("fill", "white");
    Mandor_Vann.style("fill", "white");
    d3.event.stopPropagation();
});

Elain_Karel.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "steelblue");
    Jeroen_Karel.transition()
        .style("fill", "steelblue");
    Carmine_Osvaldo.transition()
        .style("fill", "steelblue");
    Elain_Karel.transition()
        .style("fill", "#23415A");

    textplace.transition().style("fill", "#23415A");
    d3.text("eKarel.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: 290px; color:white; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();

    Silvia_Marek.transition()
        .style("fill", "steelblue");

    Mandor_Vann.transition()
        .style("fill", "steelblue");

    svg.append("line")
        .attr("class", "invisible futureleadership")
        .attr("x1", 0 )
        .attr("y1", 3.75*height/4)
        .attr("x2", width )
        .attr("y2", 3.75*height/4);

    svg.append("text")
        .attr("class", "invisible futureleadership")
        .style("stroke", "none")
        .attr("x", 0 )
        .attr("y", 3.75*height/4)
        .attr("dy", "20px")
        .attr("dx", "20px")
        .text("Future Leadership");

    svg.append("text")
        .attr("class", "invisible")
        .attr("x", width/6 )
        .attr("y", 4*height/4)
        .attr("dy", "25px")
        .attr("dx", "50px")
        .style("text-anchor", "middle")
        .text("Silvia Marek");

    svg.append("g")
        .append("path")
        .attr("class", "link invisible")
        .attr("marker-end","url(#markerEnd)")
        .attr("d", function() {
            var dx = (2.5*width/6+50) - (width/6+100),
                dy =  (3*height/4+40)- (4*height/4+20),
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" +
                (2.5*width/6+50) + "," +
                (3*height/4+40)+
                "A" +
                dr + "," + dr + " 0 0,1 " +
                (width/6+100) + "," +
                (4*height/4+20)
                ;
        });

    svg.append("text")
        .attr("class", "invisible")
        .attr("x", 4*width/6 )
        .attr("y", 4*height/4)
        .attr("dy", "25px")
        .attr("dx", "50px")
        .style("text-anchor", "middle")
        .text("Mandor Vann");

    svg.append("g")
        .append("path")
        .attr("class", "link invisible")
        .attr("marker-start","url(#markerStart)")
        .attr("stroke-dasharray", "10,10")
        .attr("d", function() {
            var dx = (2.5*width/6+50) - (4*width/6),
                dy =  (3*height/4+40)- (4*height/4+20),
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" +
                (4*width/6) + "," +
                (4*height/4+20)+
                "A" +
                dr + "," + dr + " 0 0,1 " +
                (2.5*width/6+50) + "," +
                (3*height/4+40)
                ;
        });


    d3.event.stopPropagation();
});

Jeroen_Karel.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "steelblue");
    Elain_Karel.transition()
        .style("fill", "steelblue");
    Carmine_Osvaldo.transition()
        .style("fill", "steelblue");
    Jeroen_Karel.transition()
        .style("fill", "#23415A");

    textplace.transition().style("fill", "#23415A");
    d3.text("jKarel.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: 290px; color:white; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    svg.selectAll(".invisible").data([]).exit().remove();
    Silvia_Marek.style("fill", "white");
    Mandor_Vann.style("fill", "white");
    d3.event.stopPropagation();
});

Mandor_Vann.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "steelblue");
    Elain_Karel.transition()
        .style("fill", "steelblue");
    Carmine_Osvaldo.transition()
        .style("fill", "steelblue");
    Silvia_Marek.transition()
        .style("fill", "steelblue");
    Mandor_Vann.transition()
        .style("fill", "#23415A");

    textplace.transition().style("fill", "#23415A");
    d3.text("vann.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: 290px; color:white; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    d3.event.stopPropagation();
});

Silvia_Marek.on("click", function() {
    Henk_Bodrogi.transition()
        .style("fill", "steelblue");
    Elain_Karel.transition()
        .style("fill", "steelblue");
    Carmine_Osvaldo.transition()
        .style("fill", "steelblue");
    Mandor_Vann.transition()
        .style("fill", "steelblue");
    Silvia_Marek.transition()
        .style("fill", "#23415A");

    textplace.transition().style("fill", "#23415A");
    d3.text("marek.html", function(unparsedData){
        texttitle.html('<div class="text" style="width: 290px; color:white; font: 12px sans-serif;">' +
            unparsedData+ '</div>')
    });
    d3.event.stopPropagation();
});