var w = 1000,
    h = 300;


var svg = d3.select("body").insert("svg:svg")
    .attr("width", w)
    .attr("height", h+100);

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
    .attr('fill', '#f1a620');

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
    .attr('fill', '#f1a620');

svg.append("line")
    .attr("x1",50)
    .attr("y1",h-40)
    .attr("x2",w-10)
    .attr("y2",h-40)
    .attr("marker-end","url(#markerEnd)");

svg.append("text")
    .attr("x", w-50)
    .attr("y", h-25)
    .attr('class', 'textline')
    .style("text-anchor", "middle")
    .text("time");

svg.append("text")
    .attr("x", -150)
    .attr("y", h-270)
    .attr('class', 'textline')
    .style("text-anchor", "middle")
    .attr('transform', 'rotate(-90 0,0)')
    .text("Structure of the leadership of POK");

svg.append("line")
    .attr("x1",50)
    .attr("y1",h-38)
    .attr("x2",50)
    .attr("y2",50);


svg.append("line")
    .attr("x1",w/10)
    .attr("y1",h-45)
    .attr("x2",w/10)
    .attr("y2",h-35);

svg.append("text")
    .attr("x", w/10)
    .attr("y", h-20)
    .style("text-anchor", "middle")
    .text("1997");

svg.append("foreignObject")
    .attr("x", w/10)
    .attr("y", h-10)
    .attr("width", 80)
    .attr("height", 100)
    .html('<div class="text" style="width: 80px; color:black; font: 12px sans-serif;">' +
        'Increasing concern about health problems in Eladis</div>');

svg.append("line")
    .attr("x1",2*w/10)
    .attr("y1",h-45)
    .attr("x2",2*w/10)
    .attr("y2",h-35);

svg.append("text")
    .attr("x", 2*w/10)
    .attr("y", h-20)
    .style("text-anchor", "middle")
    .text("1997");

svg.append("foreignObject")
    .attr("x", 2*w/10)
    .attr("y", h-10)
    .attr("width", 80)
    .attr("height", 100)
    .html('<div class="text" style="width: 80px; color:black; font: 12px sans-serif;">' +
        'Formation of POK.<br/> Henk Bodrogi is the leader</div>');

svg.append("line")
    .attr("x1",3*w/10)
    .attr("y1",h-45)
    .attr("x2",3*w/10)
    .attr("y2",h-35);

svg.append("text")
    .attr("x", 3*w/10)
    .attr("y", h-20)
    .style("text-anchor", "middle")
    .text("1997");

svg.append("foreignObject")
    .attr("x", 3*w/10)
    .attr("y", h-10)
    .attr("width", 80)
    .attr("height", 100)
    .html('<div class="text" style="width: 80px; color:black; font: 12px sans-serif;">' +
        'Juliana Vann dies</div>');

svg.append("line")
    .attr("x1",5*w/10)
    .attr("y1",h-45)
    .attr("x2",5*w/10)
    .attr("y2",h-35);

svg.append("text")
    .attr("x", 5*w/10)
    .attr("y", h-20)
    .style("text-anchor", "middle")
    .text("2001");

svg.append("foreignObject")
    .attr("x", 5*w/10)
    .attr("y", h-10)
    .attr("width", 80)
    .attr("height", 100)
    .html('<div class="text" style="width: 80px; color:black; font: 12px sans-serif;">' +
        'Elian Karel assumes leadership of POK</div>');

svg.append("line")
    .attr("x1",7*w/10)
    .attr("y1",h-45)
    .attr("x2",7*w/10)
    .attr("y2",h-35);

svg.append("text")
    .attr("x", 7*w/10)
    .attr("y", h-20)
    .style("text-anchor", "middle")
    .text("2009");

svg.append("foreignObject")
    .attr("x", 7*w/10)
    .attr("y", h-10)
    .attr("width", 80)
    .attr("height", 100)
    .html('<div class="text" style="width: 80px; color:black; font: 12px sans-serif;">' +
        'Elian Karel is murdered</div>');

svg.append("line")
    .attr("x1",8*w/10)
    .attr("y1",h-45)
    .attr("x2",8*w/10)
    .attr("y2",h-35);

svg.append("text")
    .attr("x", 8*w/10)
    .attr("y", h-20)
    .style("text-anchor", "middle")
    .text("Future");

svg.append("foreignObject")
    .attr("x", 8*w/10)
    .attr("y", h-10)
    .attr("width", 80)
    .attr("height", 100)
    .html('<div class="text" style="width: 80px; color:black; font: 12px sans-serif;">' +
        'Leadership of POK</div>');

var circles =[
    {class:"circle1", x:80, y:90, r:10},
    {class:"circle1", x:125, y:100, r:10},
    {class:"circle1", x:100, y:75, r:10},
    {class:"circle1", x:90, y:120, r:10},
    {class:"circle1", x:115, y:125, r:10},
    {class:"circle2", x:100, y:100, r:10}
];

svg.selectAll("circle1")
    .data(circles)
    .enter().append("svg:circle")
    .attr("class", function(d) { return d.class })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .on("click", function(d) { });

var circles2 =[
    {class:"circle2", x:250, y:100, r:15},
    {class:"circle1", x:220, y:100, r:10},
    {class:"circle1", x:195, y:100, r:10},
    {class:"circle1", x:170, y:100, r:10},
    {class:"circle1", x:280, y:100, r:10},
    {class:"circle1", x:305, y:100, r:10},
    {class:"circle1", x:330, y:100, r:10}
];

svg.selectAll("circle2")
    .data(circles2)
    .enter().append("svg:circle")
    .attr("class", function(d) { return d.class })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .on("click", function(d) { });

var circles3 =[
    {class:"circle2", x:500, y:100, r:15},
    {class:"circle1", x:470, y:100, r:10},
    {class:"circle1", x:445, y:100, r:10},
    {class:"circle1", x:420, y:100, r:10},
    {class:"circle1", x:530, y:100, r:10},
    {class:"circle1", x:555, y:100, r:10},
    {class:"circle1", x:580, y:100, r:10},
    {class:"circle3", x:500, y:155, r:15}
];

svg.selectAll("circle3")
    .data(circles3)
    .enter().append("svg:circle")
    .attr("class", function(d) { return d.class })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .on("click", function(d) { });

svg.append("line")
    .attr("x1",500)
    .attr("y1",115)
    .attr("x2",500)
    .attr("y2",135)
    .attr("marker-end","url(#markerEnd)");

var circles3 =[
    {class:"circle4", x:700, y:150, r:15},
    {class:"circle1", x:770, y:130, r:10},
    {class:"circle1", x:770, y:170, r:10}
];

svg.selectAll("circle3")
    .data(circles3)
    .enter().append("svg:circle")
    .attr("class", function(d) { return d.class })
    .attr("cx", function(d) { return d.x; })
    .attr("cy", function(d) { return d.y; })
    .attr("r", function(d) { return d.r; })
    .on("click", function(d) { });

svg.append("line")
    .attr("x1",715)
    .attr("y1",150)
    .attr("x2",755)
    .attr("y2",130)
    .attr("stroke-dasharray", "10,10")
    .attr("marker-end","url(#markerEnd)");

svg.append("line")
    .attr("x1",715)
    .attr("y1",150)
    .attr("x2",755)
    .attr("y2",170)
    .attr("stroke-dasharray", "10,10")
    .attr("marker-end","url(#markerEnd)");