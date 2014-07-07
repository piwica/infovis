chart("data.csv", "green", "red");

var datearray = [];
var colorrangePositive = [];
var colorrangeNegative = [];
var maxValues = [];


function chart(csvpath, colorPositive, colorNegative) {

    if (colorPositive == "blue") {
        colorrangePositive = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"];
    }
    else if (colorPositive == "green") {
        colorrangePositive = ["#004529", "#238443", "#78c679", "#7bccc4", "#41b6c4", "c7e9b4"];
    }
    else if (colorPositive == "pink") {
        colorrangePositive = ["#980043", "#DD1C77", "#DF65B0", "#C994C7", "#D4B9DA", "#F1EEF6"];
    }
    else if (colorPositive == "orange") {
        colorrangePositive = ["#B30000", "#E34A33", "#FC8D59", "#FDBB84", "#FDD49E", "#FEF0D9"];
    }

    if (colorNegative == "blue") {
        colorrangeNegative = ["#045A8D", "#2B8CBE", "#74A9CF", "#A6BDDB", "#D0D1E6", "#F1EEF6"];
    }
    else if (colorNegative == "green") {
        colorrangeNegative = ["#006d2c", "#2ca25f", "#66c2a4", "#99d8c9", "#ccece6", "#edf8fb"];
    }
    else if (colorNegative == "pink") {
        colorrangeNegative = ["#980043", "#DD1C77", "#DF65B0", "#C994C7", "#D4B9DA", "#F1EEF6"];
    }
    else if (colorNegative == "orange") {
        colorrangeNegative = ["#B30000", "#E34A33", "#FC8D59", "#FDBB84", "#FDD49E", "#FEF0D9"];
    }
    else if (colorNegative == "red") {
        colorrangeNegative = ["#7f0000", "#d7301f", "#980043", "#fd8d3c", "#993404", "#fb6a4a", "#ce1256"];
    }

    strokecolorPositive = colorrangePositive[0];
    strokecolorNegative = colorrangeNegative[0];

    var format = d3.time.format("%Y");

    var margin = {top: 20, right: 40, bottom: 30, left: 30};
    var width = 1000 - margin.left - margin.right;
    var height = 400 - margin.top - margin.bottom;

    var tooltip = d3.select("body")
        .append("div")
        .attr("class", "remove")
        .style("position", "absolute")
        .style("z-index", "20")
        .style("visibility", "hidden")
        .style("top", "30px")
        .style("left", "55px");

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height-10, 0]);

    var zPositive = d3.scale.ordinal()
        .range(colorrangePositive);

    var zNegative = d3.scale.ordinal()
        .range(colorrangeNegative);


    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(d3.time.years);

    var yAxis = d3.svg.axis()
        .scale(y);

    var yAxisr = d3.svg.axis()
        .scale(y);

    var stack = d3.layout.stack()
        .offset("silhouette")
        .values(function(d) { return d.values; })
        .x(function(d) { return d.date; })
        .y(function(d) { return d.value; });

    var nest = d3.nest()
        .key(function(d) { return d.key; });

    var area = d3.svg.area()
        .interpolate("cardinal")
        .x(function(d) { return x(d.date); })
        .y0(function(d) { return y(d.y0); })
        .y1(function(d) { return y(d.y0 + d.y); });

    var svg = d3.select(".chart").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var graph = d3.csv(csvpath, function(data) {
        data.forEach(function(d) {
            d.date = format.parse(d.date);
            d.value = +d.value;
        });

        var layers = stack(nest.entries(data));

        x.domain(d3.extent(data, function(d) { return d.date; }));
        y.domain([0, d3.max(data, function(d) { return d.y0 + d.y; })]);

        svg.selectAll(".layer")
            .data(layers)
            .enter().append("path")
            .attr("class", "layer")
            .attr("d", function(d) {
                return area(d.values); })
            .style("fill", function(d, i) {
                d.color=d.values[0].type==="positive"?zPositive(i): zNegative(i);
                return d.color;});


        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        svg.append("g")
            .attr("class", "y axis")
            .attr("transform", "translate(" + width + ", 0)")
            .call(yAxis.orient("right"));

        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis.orient("left"));

        svg.selectAll(".layer")
            .attr("opacity", 1)
            .on("mouseover", function(d, i) {
                svg.selectAll(".layer").transition()
                    .duration(250)
                    .attr("opacity", function(d, j) {
                        return j != i ? 0.6 : 1;
                    })})

            .on("mousemove", function(d, i) {
                mousex = d3.mouse(this);
                mousex = mousex[0];
                mousey =  d3.mouse(this);
                mousey = mousey[1];
                var invertedx = x.invert(mousex);
                invertedx = invertedx.getYear();
                var selected = (d.values);
                for (var k = 0; k < selected.length; k++) {
                    datearray[k] = selected[k].date
                    datearray[k] = datearray[k].getYear();
                }

                mousedate = datearray.indexOf(invertedx);
                pro = d.values[mousedate].value;
                d3.select(this)
                    .classed("hover", true)
                    .attr("stroke",function(d, i) {
                        return d.values[0].type==="positive"?strokecolorPositive: strokecolorNegative})
                    .attr("stroke-width", "0.5px"),
                    tooltip
                        .style("left", (mousex+50) + "px" )
                        .style("top", (mousey+50) + "px" )
                        .html( "<div style=' color:white;text-align:center; width:80px; height:15px; background-color:"+ d.color+"'><p style='color:white; '>" + d.key + ":" + pro + "</p></div>" )
                       .style("visibility", "visible");

            })
            .on("mouseout", function(d, i) {
                svg.selectAll(".layer")
                    .transition()
                    .duration(250)
                    .attr("opacity", "1");
                d3.select(this)
                    .classed("hover", false)
                    .attr("stroke-width", "0px"), tooltip.html( "<p style='color:white;'>" + d.key + "<br>" + pro + "</p>" ).style("visibility", "hidden");
            })

        var vertical = d3.select(".chart")
            .append("div")
            .attr("class", "remove")
            .style("position", "absolute")
            .style("z-index", "19")
            .style("width", "1px")
            .style("height", "380px")
            .style("top", "10px")
            .style("bottom", "30px")
            .style("left", "0px")
            .style("background", "#fff");

        d3.select(".chart")
            .on("mousemove", function(){
                mousex = d3.mouse(this);
                mousex = mousex[0] + 5;
                vertical.style("left", mousex + "px" )})
            .on("mouseover", function(){
                mousex = d3.mouse(this);
                mousex = mousex[0] + 5;
                vertical.style("left", mousex + "px")});
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 640)
            .attr("y", 295)
            .style("text-anchor", "middle")
            .text("activist");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 645)
            .attr("y", 255)
            .style("text-anchor", "middle")
            .text("arrest");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 645)
            .attr("y", 215)
            .style("text-anchor", "middle")
            .text("contamin");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 900)
            .attr("y", 200)
            .style("text-anchor", "middle")
            .text("crimin");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 645)
            .attr("y", 198)
            .style("text-anchor", "middle")
            .text("death");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 800)
            .attr("y", 185)
            .style("text-anchor", "middle")
            .text("forc");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 640)
            .attr("y", 155)
            .style("text-anchor", "middle")
            .text("health");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 810)
            .attr("y", 145)
            .style("text-anchor", "middle")
            .text("peac");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 640)
            .attr("y", 95)
            .style("text-anchor", "middle")
            .text("protest");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 730)
            .attr("y", 157)
            .style("text-anchor", "middle")
            .text("violen");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 813)
            .attr("y", 97)
            .style("text-anchor", "middle")
            .text("threat");
        svg.append("text")
            .attr("class", "labels")
            .attr("x", 900)
            .attr("y", 155)
            .style("text-anchor", "middle")
            .text("terrorist");
    });
}
