// Download configuration
export const DOWNLOAD_CONFIG = {
  // APK download URL - Using Google Drive with direct download bypass
  // Option 1: Google Drive direct download (bypasses warning page)
  APK_URL:
    "https://drive.google.com/u/0/uc?id=1y66QxFuL8Z7cvIeP4lEqL_14QGsFOG3o&export=download&confirm=t",

  // Alternative hosting options (recommended for production):
  // Option 2: GitHub Releases (free, reliable, but requires manual upload)
  // APK_URL: "https://github.com/abdelbari-messah/moussem-moulay-abdellah/releases/download/v1.0.0/moussem-app.apk",

  // Option 3: Firebase Hosting (free tier available)
  // APK_URL: "https://your-project.web.app/downloads/moussem-app.apk",

  // Option 4: AWS S3 (pay per usage)
  // APK_URL: "https://your-bucket.s3.amazonaws.com/moussem-app.apk",

  // Option 5: Netlify (free tier available)
  // APK_URL: "https://your-site.netlify.app/downloads/moussem-app.apk",

  APK_FILENAME: "Moussem-Moulay-Abdellah-App-2025.apk",
  APK_SIZE_MB: 173, // Updated to actual file size
};
