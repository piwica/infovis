
d3.csv("datagt2.csv", function(error, links) {

    var nodes = {};

// Compute the distinct nodes from the links.
    links.forEach(function(link) {
        link.source = nodes[link.source] ||
            (nodes[link.source] = {name: link.source});
        link.target = nodes[link.target] ||
            (nodes[link.target] = {name: link.target});
        link.value = +link.value;
    });
    var width = 1500,
        height = 900;

    var svg = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height);

    var force = d3.layout.force()
        .nodes(d3.values(nodes))
        .links(links)
        .size([width, height])
        .linkDistance(220)
        .charge(-300)
        .on("tick", tick)
        .start();



// add the links and the arrows
    var path = svg.append("svg:g").selectAll("path")
        .data(force.links())
        .enter().append("svg:path")
        .attr("class", "link")
        .style("stroke", function(d) { if (d.width<0.7)
            return "#CCCCCC";
        else if (d.width>=0.7 && d.width<0.85 )
            return "#8B8B8B";
        else
            return "#000000"});

// define the nodes
    var node = svg.selectAll(".node")
        .data(force.nodes())
        .enter().append("g")
        .attr("class", "node")
        .on("click", nodeClick)
        .call(force.drag);

// add the nodes
    node.append("circle")
        .attr("r", 5);

// add the text
    node.append("text")
        .attr("x", 12)
        .attr("dy", ".35em")
        .text(function(d) { return d.name; });

    resize();
    d3.select(window).on("resize", resize);

// add the curvy lines
    function tick() {
        path.attr("d", function(d) {
            var dx = d.target.x - d.source.x,
                dy = d.target.y - d.source.y,
                dr = Math.sqrt(dx * dx + dy * dy);
            return "M" +
                d.source.x + "," +
                d.source.y + "A" +
                dr + "," + dr + " 0 0,1 " +
                d.target.x + "," +
                d.target.y;
        });

        node
            .attr("transform", function(d) {
                return "translate(" + d.x + "," + d.y + ")"; });
        node.each(collide(0.5)); //Added
    }

    function resize() {
        width = window.innerWidth, height = window.innerHeight;
        svg.attr("width", width).attr("height", height);
        force.size([width, height]).resume();
    }

    var padding = 1, // separation between circles
        radius=8;
    function collide(alpha) {
        var quadtree = d3.geom.quadtree(force.nodes());
        return function(d) {
            var rb = 2*radius + padding,
                nx1 = d.x - rb,
                nx2 = d.x + rb,
                ny1 = d.y - rb,
                ny2 = d.y + rb;
            quadtree.visit(function(quad, x1, y1, x2, y2) {
                if (quad.point && (quad.point !== d)) {
                    var x = d.x - quad.point.x,
                        y = d.y - quad.point.y,
                        l = Math.sqrt(x * x + y * y);
                    if (l < rb) {
                        l = (l - rb) / l * alpha;
                        d.x -= x *= l;
                        d.y -= y *= l;
                        quad.point.x += x;
                        quad.point.y += y;
                    }
                }
                return x1 > nx2 || x2 < nx1 || y1 > ny2 || y2 < ny1;
            });
        };
    }

    //Toggle stores whether the highlighting is on
    var toggle = 0;

//Create an array logging what is connected to what
    var linkedByIndex = {};
    for (i = 0; i < force.nodes().length; i++) {
        linkedByIndex[i + "," + i] = 1;
    };
    force.links().forEach(function (d) {
        linkedByIndex[d.source.index + "," + d.target.index] = 1;
    });

//This function looks up whether a pair are neighbours
    function neighboring(a, b) {
        return linkedByIndex[a.index + "," + b.index];
    }

    function nodeClick() {
        if (toggle == 0) {
            //Reduce the opacity of all but the neighbouring nodes
            d = d3.select(this).node().__data__;
            node.style("opacity", function (o) {
                return neighboring(d, o) | neighboring(o, d) ? 1 : 0.1;
            });

            path.style("opacity", function (o) {
                return d.index==o.source.index | d.index==o.target.index ? 1 : 0.1;
            });

            //Reduce the op

            toggle = 1;
        } else {
            //Put them back to opacity=1
            node.style("opacity", 1);
            path.style("opacity", 1);
            toggle = 0;
        }

    }

});