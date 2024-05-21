document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector('#video1 video');
    
    video.addEventListener('loadeddata', () => {
        console.log('Video data loaded');
        // Check if video is in viewport and play if it is
        const rect = video.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isInViewport) {
            video.play().then(() => {
                console.log('Video started playing');
            }).catch(error => {
                console.error('Error playing video:', error);
            });
        }
    });

    const handleScroll = () => {
        const rect = video.getBoundingClientRect();
        const isInViewport = (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (isInViewport) {
            video.play().then(() => {
                console.log('Video started playing');
            }).catch(error => {
                console.error('Error playing video:', error);
            });
        } else {
            video.pause();
            console.log('Video paused');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check when the page loads
});