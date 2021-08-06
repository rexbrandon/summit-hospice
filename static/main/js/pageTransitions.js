<script src="https://cdn.jsdelivr.net/npm/barba.js@1.0.0/dist/barba.min.js"></script>

function pageTransition() {

    let tl = gsap.timeline();

    // opening and closing the transition div
    tl.to('ul.transition li', {duration: 1, scaleY: 1, transformOrgin: "bottom left", stagger: .25})
    // this animation shows the second page
    tl.to('ul.transition li', {duration: .35, scaleY: 0, transformOrgin: "bottom left", stagger: .15, delay: .1})
}
/*
function contentAnimation() {
    // can put any page animations in here
    // using GSAP
}
*/
// sets waitout time
function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });
}

barba.init({

    // works asynchronously 
    sync: true,

    // putting transitions into an object
    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        }
        /*
        async enter(data) {
            contentAnimation();
        }, 

        async once(data) {
            contentAnimation();
        }
        */
    }]
})