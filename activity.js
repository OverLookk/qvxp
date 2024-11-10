// Store the current title and favicon of the page
const originalTitle = document.title;
const faviconElement = document.querySelector("link[rel~='icon']");
const originalFavicon = faviconElement ? faviconElement.href : "";

// Google Drive style settings
const driveTitle = "Home - Google Drive";
const driveFavicon = "https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png";

// Function to switch title and favicon
function switchToDrive() {
    document.title = driveTitle;
    if (faviconElement) faviconElement.href = driveFavicon;
}

function switchToOriginal() {
    document.title = originalTitle;
    if (faviconElement) faviconElement.href = originalFavicon;
}

// Listen for page visibility change
document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
        switchToDrive();
    } else {
        switchToOriginal();
    }
});
