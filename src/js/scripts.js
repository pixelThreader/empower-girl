$(document).ready(function () {
    $('.container').fadeIn('slow');

    // GSAP Animations
    gsap.from("header h1", { duration: 1, y: -50, opacity: 0, ease: "bounce" });
    gsap.from("nav ul li", {
        duration: 1,
        y: -30,
        opacity: 0,
        stagger: 0.1,
        ease: "power1.out",
        delay: 0.5
    });
    gsap.from(".blog-post", {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: "power1.out",
        delay: 1
    });

    // Animate images when scrolled into view
    gsap.utils.toArray(".blog-post img").forEach((img, i) => {
        gsap.fromTo(img, { y: 20, opacity: 0 }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: img,
                start: "top 80%", // Adjust as needed
                end: "bottom 60%",
                toggleActions: "play none none none",
            },
            duration: 1,
            ease: "power1.out",
            delay: i * 0.1 // Stagger animations
        });
    });

    // Animate other content paragraphs and headings
    gsap.utils.toArray(".post-content p, .post-content h2, .post-content ol, .post-content li, button").forEach((elem, i) => {
        gsap.fromTo(elem, { y: 20, opacity: 0 }, {
            y: 0,
            opacity: 1,
            scrollTrigger: {
                trigger: elem,
                start: "top 90%", // Adjust as needed
                end: "bottom 60%",
                toggleActions: "play none none none",
            },
            duration: 1,
            ease: "power1.out",
            delay: i * 0.01 // Stagger animations
        });
    });
});
