// Utility functions

/**
 * Format date consistently for both server and client
 * Avoids hydration mismatches
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  
  return `${month} ${day}, ${year}`;
}

/**
 * Get API base URL - handles both server and client side
 */
export function getBaseUrl(): string {
  // Client side
  if (typeof window !== 'undefined') {
    return '';
  }
  
  // Server side - use environment variable or fallback
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  
  return 'http://localhost:3000';
}
