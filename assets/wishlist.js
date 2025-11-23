/**
 * Wishlist functionality using localStorage
 * Works without user login - browser and user specific
 */

const WISHLIST_KEY = 'shopify_wishlist';

/**
 * Get all wishlist items from localStorage
 * @returns {number[]} Array of product IDs
 */
export function getWishlist() {
  try {
    const wishlist = localStorage.getItem(WISHLIST_KEY);
    return wishlist ? JSON.parse(wishlist) : [];
  } catch (error) {
    console.error('Error reading wishlist:', error);
    return [];
  }
}

/**
 * Save wishlist to localStorage
 * @param {number[]} wishlist - Array of product IDs
 */
function saveWishlist(wishlist) {
  try {
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    // Dispatch custom event so other parts of the app can react
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: { wishlist } }));
  } catch (error) {
    console.error('Error saving wishlist:', error);
  }
}

/**
 * Add product to wishlist
 * @param {number} productId - Product ID to add
 * @returns {boolean} Success status
 */
export function addToWishlist(productId) {
  const wishlist = getWishlist();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    saveWishlist(wishlist);
    return true;
  }
  return false;
}

/**
 * Remove product from wishlist
 * @param {number} productId - Product ID to remove
 * @returns {boolean} Success status
 */
export function removeFromWishlist(productId) {
  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    return true;
  }
  return false;
}

/**
 * Toggle product in wishlist
 * @param {number} productId - Product ID to toggle
 * @returns {boolean} True if added, false if removed
 */
export function toggleWishlist(productId) {
  const wishlist = getWishlist();
  if (wishlist.includes(productId)) {
    removeFromWishlist(productId);
    return false;
  } else {
    addToWishlist(productId);
    return true;
  }
}

/**
 * Check if product is in wishlist
 * @param {number} productId - Product ID to check
 * @returns {boolean} True if in wishlist
 */
export function isInWishlist(productId) {
  return getWishlist().includes(productId);
}

/**
 * Get wishlist count
 * @returns {number} Number of items in wishlist
 */
export function getWishlistCount() {
  return getWishlist().length;
}

/**
 * Clear entire wishlist
 */
export function clearWishlist() {
  saveWishlist([]);
}

// Initialize wishlist heart icons when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initWishlistHearts);
} else {
  initWishlistHearts();
}

/**
 * Initialize wishlist heart icons on product cards
 */
function initWishlistHearts() {
  updateAllHearts();
  
  // Listen for dynamic content updates (e.g., infinite scroll, filters)
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === 1) {
          const element = /** @type {Element} */ (node);
          if (element.classList?.contains('product-card') || element.querySelector?.('.product-card')) {
            updateAllHearts();
          }
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

/**
 * Update all heart icons to reflect current wishlist state
 */
export function updateAllHearts() {
  const hearts = document.querySelectorAll('[data-wishlist-toggle]');
  const wishlist = getWishlist();
  
  hearts.forEach((heart) => {
    const element = /** @type {HTMLElement} */ (heart);
    const productId = parseInt(element.dataset.productId || '0');
    const isWishlisted = wishlist.includes(productId);
    
    element.classList.toggle('is-wishlisted', isWishlisted);
    element.setAttribute('aria-label', isWishlisted ? 'Remove from wishlist' : 'Add to wishlist');
  });
}

// Listen for wishlist updates
window.addEventListener('wishlist:updated', () => {
  updateAllHearts();
});
