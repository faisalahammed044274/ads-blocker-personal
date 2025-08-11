// Detect and skip YouTube video ads
function skipYouTubeAds() {
  const skipButton = document.querySelector('.ytp-ad-skip-button');
  if (skipButton) {
    skipButton.click();
    console.log('Ad skipped!');
  }
  
  // Remove any overlay ad elements
  const adOverlays = document.querySelectorAll('.ad-showing');
  adOverlays.forEach(ad => ad.remove());
}

// Function to block pre-roll and mid-roll ads
function blockAdsOnPage() {
  // Run every 1 second to check if an ad is playing
  setInterval(skipYouTubeAds, 1000);
}

// Only run if we're on a video page
if (window.location.href.includes("youtube.com/watch")) {
  blockAdsOnPage();
}
