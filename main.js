document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(Draggable);
  
    // Create a Draggable instance for the SVG path with ID "redNote"
    Draggable.create("#redNote", {
      type: "x,y", // Allow dragging in both x and y directions
    });
  });