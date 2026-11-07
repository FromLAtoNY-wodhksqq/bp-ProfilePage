/* Keep Universal/Owl Carousel and add a persistent playback control. */
(function ($) {
    'use strict';

    $(function () {
        var $slider = $('#home-slides');
        var carousel = $slider.data('owlCarousel');
        var $button = $('#home-carousel-toggle');
        if (!carousel || !$button.length) return;

        var interval = carousel.options.autoPlay || 5000;
        var paused = carousel.options.autoPlay === false;
        var motion = window.matchMedia('(prefers-reduced-motion: reduce)');

        function setPaused(value) {
            paused = value;
            // autoPlay=false also prevents hover/resize from restarting playback.
            carousel.options.autoPlay = paused ? false : interval;
            if (paused) carousel.stop();
            else carousel.play();
            $button.text(paused ? '자동 재생 시작' : '자동 재생 멈춤');
        }

        setPaused(paused || motion.matches);
        $button.parent().prop('hidden', false);
        $button.on('click', function () {
            setPaused(!paused);
        });

        // A new reduce-motion preference pauses; playback resumes only by choice.
        function onMotionChange(event) {
            if (event.matches) setPaused(true);
        }
        if (motion.addEventListener) motion.addEventListener('change', onMotionChange);
        else if (motion.addListener) motion.addListener(onMotionChange);
    });
}(jQuery));
