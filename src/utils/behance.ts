/**
 * Extracts the Behance project ID from a standard gallery URL.
 * Example URL: https://www.behance.net/gallery/201965907/Agua-Fria-Coffee
 * Returns: "201965907"
 */
export function extractBehanceProjectId(url: string | undefined): string | null {
    if (!url) return null;
    
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname.includes('behance.net') && urlObj.pathname.startsWith('/gallery/')) {
            const parts = urlObj.pathname.split('/');
            // parts[0] is "", parts[1] is "gallery", parts[2] is the ID
            if (parts.length > 2 && /^\d+$/.test(parts[2])) {
                return parts[2];
            }
        }
    } catch (e) {
        return null;
    }
    
    return null;
}
