function pageTransition() {
    let tl = gsap.timeline();

    // opening and closing the transition div
    tl.to('.transition', { duration: 1, scaleY: 1, transformOrgin: "bottom left"})
    tl.to('.transition', {duration: .5, scaleY: 0, transformOrgin: "bottom left", delay: .1})
}
/*
function contentAnimation() {
    // can put any page animations in here
    // using GSAP
}
*/
// sets waitout time
function delay(n) {
    // || is a logical operator for or && would be and
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    })
}

barba.init({

    sync: true,

    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },
        /*
        FUNCTION FOR ANIMATING PAGE CONTENT
        enter and once in the hooks portion of barba docs
        async enter(data) {
            contentAnimation();
        },

        async once(data) {
            contentAnimation();
        }
        */
    }]
})