var diameter = 600,
    radius = diameter / 2,
    innerRadius = radius - 120;

var cluster = d3.layout.cluster()
    .size([360, innerRadius])
    .sort(null)
    .value(function(d) { return d.size; });

var bundle = d3.layout.bundle();


var line = d3.svg.line.radial()
    .interpolate("bundle")
    .tension(.85)
    .radius(function(d) { return d.y; })
    .angle(function(d) { return d.x / 180 * Math.PI; });

var svg1 = d3.select("#chart").append("svg")
    .attr("width", diameter+600)
    .attr("height", diameter);

var svg = svg1.append("g")
    .attr("transform", "translate(" + radius + "," + radius + ")");

var link = svg.append("g").selectAll(".link"),
    node = svg.append("g").selectAll(".node");

svg1
    .append("rect")
    .attr("class", "Information")
    .attr("x", diameter)
    .attr("y", diameter/2)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("Information Technology");

svg1
    .append("rect")
    .attr("class", "POK")
    .attr("x", diameter)
    .attr("y", diameter/2+20)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2+20)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("POK");

svg1
    .append("rect")
    .attr("class", "Administration")
    .attr("x", diameter)
    .attr("y", diameter/2+40)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2+40)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("Administration");

svg1
    .append("rect")
    .attr("class", "Facilities")
    .attr("x", diameter)
    .attr("y", diameter/2+60)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2+60)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("Facilities");

svg1
    .append("rect")
    .attr("class", "Security")
    .attr("x", diameter)
    .attr("y", diameter/2+80)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2+80)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("Security");

svg1
    .append("rect")
    .attr("class", "Engineering")
    .attr("x", diameter)
    .attr("y", diameter/2+100)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2+100)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("Engineering");
svg1
    .append("rect")
    .attr("class", "Executive")
    .attr("x", diameter)
    .attr("y", diameter/2+120)
    .attr("width", 10)
    .attr("height", 10);
svg1.append("text")
    .attr("x", diameter )
    .attr("y", diameter/2+120)
    .attr("dy", "10px")
    .attr("dx", "20px")
    .text("Executive");

//The table
svg1.append("rect")
    .attr("class", "table")
    .attr("x", diameter)
    .attr("y", 100)
    .attr("width", 500 )
    .attr("height", diameter/4);

svg1.append("line")
    .attr("class", "table")
    .attr("x1", diameter)
    .attr("y1", 120)
    .attr("x2", diameter+500)
    .attr("y2", 120);

svg1.append("line")
    .attr("class", "table")
    .attr("x1", diameter+200)
    .attr("y1", 100)
    .attr("x2", diameter+200)
    .attr("y2", 100+diameter/4);

svg1.append("line")
    .attr("class", "table")
    .attr("x1", diameter+400)
    .attr("y1", 100)
    .attr("x2", diameter+400)
    .attr("y2", 100+diameter/4);

svg1.append("text")
    .attr("x", diameter )
    .attr("y", 100)
    .attr("dy", "13px")
    .attr("dx", "20px")
    .text("To");
svg1.append("text")
    .attr("x", diameter+200 )
    .attr("y", 100)
    .attr("dy", "13px")
    .attr("dx", "20px")
    .text("Subject");
svg1.append("text")
    .attr("x", diameter+400 )
    .attr("y", 100)
    .attr("dy", "13px")
    .attr("dx", "20px")
    .text("Replies");


d3.json("data.json", function(classes) {
    var nodes = cluster.nodes(packageHierarchy(classes));
    var links = packageImports(nodes);


    link = link
        .data(bundle(links))
        .enter().append("path")
        .each(function(d) { d.source = d[0], d.target = d[d.length - 1]; })
        .attr("class", "link")
        .attr("d", line);



    node = node
        .data(nodes.filter(function(n) { return !n.children; }))
        .enter().append("text")
        .attr("class", function(d) { return "node " +d.parent.key })
        .attr("dx", function(d) { return d.x < 180 ? 8 : -8; })
        .attr("dy", ".31em")
        .attr("transform", function(d) { return "rotate(" + (d.x - 90) + ")translate(" + d.y + ")" + (d.x < 180 ? "" : "rotate(180)"); })
        .style("text-anchor", function(d) { return d.x < 180 ? "start" : "end"; })
        .text(function(d) { return d.key; })
        .on("mouseover", mouseovered)
        .on("mouseout", mouseouted);
//});

    function mouseovered(d) {
        node
            .each(function(n) { n.target = n.source = false; });

        link
            .classed("link--target", function(l) { if (l.target === d) return l.source.source = true; })
            .classed("link--source", function(l) { if (l.source === d) return l.target.target = true; })
            .filter(function(l) { return l.target === d || l.source === d; })
            .each(function() { this.parentNode.appendChild(this); });

        node
            .classed("node--target", function(n) { return n.target; })
            .classed("node--source", function(n) { return n.source; });

        fillthetable(d);
    }

    function fillthetable(d){
        d.mails.each(function(n){
            console.log(n);
        });

    }

    function mouseouted(d) {
        link
            .classed("link--target", false)
            .classed("link--source", false);

        node
            .classed("node--target", false)
            .classed("node--source", false);
    }

    d3.select(self.frameElement).style("height", diameter + "px");

// Lazily construct the package hierarchy from class names.
    function packageHierarchy(classes) {
        var map = {};

        function find(name, data) {
            var node = map[name], i;
            if (!node) {
                node = map[name] = data || {name: name, children: []};
                if (name.length) {
                    node.parent = find(name.substring(0, i = name.lastIndexOf(".")));
                    node.parent.children.push(node);
                    node.key = name.substring(i + 1);
                }
            }
            return node;
        }

        classes.forEach(function(d) {
            find(d.name, d);
        });

        return map[""];
    }

// Return a list of imports for the given array of nodes.
    function packageImports(nodes) {
        var map = {},
            imports = [];

        // Compute a map from name to node.
        nodes.forEach(function(d) {
            map[d.name] = d;
        });


        // For each import, construct a link from the source to target node.
        nodes.forEach(function(d) {
            if (d.imports) d.imports.forEach(function(i) {
                imports.push({source: map[d.name], target: map[i.name]});
            });
        });

        return imports;
    }
})