window.onload = function() {
    lax.init()

    // Add a driver that we use to control our animations
    lax.addDriver('scrollY', function() {
        return window.scrollY
    })

    // Add animation bindings to elements
    lax.addElements('.service__img', {
        scrollY: {
            translateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['elWidth', 0, 'elWidth']
            ],
            // opacity: [
            //     [0, 100],
            //     [1, 0]
            // ]
        }
    })

    lax.addElements('.logos__img', {
        scrollY: {
            rotateX: [
                ["elInY", "elCenterY", "elOutY"],
                ['pageWidth', 0, 'pageWidth']
            ]
        }
    })
}