particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 20,
      "density": {
        "enable": true,
        "value_area": 600
      }
    },

    "color": {
      "value": ["#FF0000", "#0000FF"],
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "A2A2A2"
      },
      "polygon": {
        "nb_sides": 6
      },
    },
    "opacity": {
      "value": 0.4,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1.5,
        "opacity_min": 0.5,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1,
        "size_min": 3,
        "size_max": 3,
        "sync": true
      }
    },

    "line_linked": {
      "enable": true,
      "distance": 850,
      "color": "#A2A2A2",
      "opacity": 0.5,
      "width": .25
    },

    "move": {
      "enable": true,
      "speed": 1.413648243462092,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 320.6824121731046,
        "rotateY": 481.0236182596568
      }
    }
  },

  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },

      "onclick": {
        "enable": false,
        "mode": "push"
      },

      "resize": false
    },

    "modes": {
      "grab": {
        "distance": 500,
        "line_linked": {
          "opacity": .5
        }
      },

      "bubble": {
        "distance": 500,
        "size": 40,
        "duration": 2,
        "opacity": .5,
        "speed": 1
      },

      "repulse": {
        "distance": 1,
        "duration": 0.4
      },

      "push": {
        "particles_nb": 10
      },

      "remove": {
        "particles_nb": 50
      }
    }
  },

  "retina_detect": false
});
