elements.hello_world = {
    color: "#ff0000",
    behavior: behaviors.WALL,
    category: "land",
    state: "solid",
    tick: function(pixel) {
        // Make it heat up and flash randomly
        pixel.temp += 1;

        if (Math.random() < 0.1) {
            pixel.color = "#"+Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
        }
    },
};
