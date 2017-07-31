new Vue ({
    el: '#app',
    data: {
        health: 100
    }, 
    methods: {
        punch: function() {
            this.health -= 10
        },

        restart: function() {
            this.health = 100
        }
    },
    computed: {
        isZeroHealth: function() {
            return (this.health <= 0) ? true: false;
        }, 

        bagState: function() {
            return (this.health <= 0) ? "burst" : "healthy";
        },

        healthState: function() {
            if (this.health <= 100 && this.health > 60) {
                return "green-color"
            } else if (this.health <= 60 && this.health >= 30) {
                return "orange-color"
            } else {
                return "red-color"
            }
        }
    }
})