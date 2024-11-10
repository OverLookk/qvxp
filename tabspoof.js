// Google Drive style settings
const driveTitle = "Home - Google Drive";
const driveFavicon = "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

// Save the original title and favicon
const originalTitle = document.title;
let originalFavicon = document.querySelector("link[rel~='icon']");

// If there's no favicon, create one
if (!originalFavicon) {
    originalFavicon = document.createElement("link");
    originalFavicon.rel = "icon";
    document.head.appendChild(originalFavicon);
}
const originalFaviconHref = originalFavicon.href;

// Function to change the title and favicon
function spoofTab() {
    document.title = driveTitle;
    originalFavicon.href = driveFavicon;
}

// Function to revert to the original title and favicon
function revertTab() {
    document.title = originalTitle;
    originalFavicon.href = originalFaviconHref;
}

// Add event listeners for visibility change
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        // Page is inactive: switch to Google Drive title and favicon
        spoofTab();
    } else {
        // Page is active again: revert to original title and favicon
        revertTab();
    }
});

// Additional check to ensure title changes after the document is fully loaded
window.addEventListener("load", () => {
    // Set a short timeout to ensure the title change occurs
    setTimeout(() => {
        if (document.hidden) {
            spoofTab();
        }
    }, 100);
});
