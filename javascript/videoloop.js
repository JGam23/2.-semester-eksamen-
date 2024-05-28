document.addEventListener("DOMContentLoaded", () => {
    const videos = [document.querySelector('#video1 video')];

    const handleScroll = () => {
        videos.forEach(video => {
            const rect = video.getBoundingClientRect();
            const isInViewport = (
                rect.top >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
            );

            if (isInViewport) {
                video.play();
            } else {
                video.pause();
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});