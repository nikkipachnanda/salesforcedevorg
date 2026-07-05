import { loadStyle } from 'lightning/platformResourceLoader';

// A Set to track which CSS files have already been loaded on the page
const loadedStyles = new Set();

/**
 * Loads a CSS file from a Static Resource only if it hasn't been loaded previously.
 * @param {object} componentInstance - The 'this' context of the calling LWC component.
 * @param {string} styleUrl - The full URL path to the CSS file within the Static Resource.
 * @returns {Promise} A promise that resolves when the style is loaded or if it was already loaded.
 */
const loadStyleOnce = (componentInstance, styleUrl) => {
    // 1. Check if the style has already been loaded
    if (loadedStyles.has(styleUrl)) {
        console.log(`Style already loaded: ${styleUrl}`);
        return Promise.resolve();
    }

    // 2. If not loaded, use the standard loadStyle function
    return loadStyle(componentInstance, styleUrl)
        .then(() => {
            // 3. On success, mark the style as loaded
            loadedStyles.add(styleUrl);
            console.log(`Style loaded successfully: ${styleUrl}`);
        })
        .catch(error => {
            console.error(`Error loading style ${styleUrl}:`, error);
            // Propagate the error up
            throw error;
        });
};

export { loadStyleOnce };