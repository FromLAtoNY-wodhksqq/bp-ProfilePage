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

        function syncSlideAccessibility() {
            $slider.find('.owl-item').each(function (index) {
                var active = index === carousel.currentItem;
                $(this).attr('aria-hidden', active ? 'false' : 'true').prop('inert', !active);
            });
            $slider.find('.owl-page').each(function (index) {
                var title = $slider.find('.item h1').eq(index).text().trim();
                $(this).attr({
                    role: 'button',
                    tabindex: '0',
                    'aria-label': (index + 1) + '번 슬라이드: ' + title,
                    'aria-controls': 'home-slides',
                    'aria-pressed': $(this).hasClass('active') ? 'true' : 'false'
                });
            });
        }

        // Owl rebuilds pagination after a resize, so restore names and states then too.
        var afterAction = carousel.options.afterAction;
        carousel.options.afterAction = function () {
            if (typeof afterAction === 'function') afterAction.apply(this, arguments);
            syncSlideAccessibility();
        };
        syncSlideAccessibility();
        // Keep a focused slide link visible until the visitor chooses to resume.
        $slider.on('focusin', '.owl-item', function () {
            setPaused(true);
        });
        $slider.on('keydown', '.owl-page', function (event) {
            if (event.key !== 'Enter' && event.key !== ' ' && event.key !== 'Spacebar') return;
            event.preventDefault();
            setPaused(true);
            carousel.goTo($slider.find('.owl-page').index(this));
        });
        $slider.on('mouseup touchend', '.owl-page', function () {
            setPaused(true);
            syncSlideAccessibility();
        });

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
