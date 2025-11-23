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
    const parsed = wishlist ? JSON.parse(wishlist) : [];
    console.log('[Wishlist] Get wishlist:', parsed);
    return parsed;
  } catch (error) {
    console.error('[Wishlist] Error reading wishlist:', error);
    return [];
  }
}

/**
 * Save wishlist to localStorage
 * @param {number[]} wishlist - Array of product IDs
 */
function saveWishlist(wishlist) {
  try {
    console.log('[Wishlist] Saving wishlist:', wishlist);
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
    console.log('[Wishlist] Wishlist saved successfully');
    // Dispatch custom event so other parts of the app can react
    window.dispatchEvent(new CustomEvent('wishlist:updated', { detail: { wishlist } }));
    console.log('[Wishlist] Event dispatched: wishlist:updated');
  } catch (error) {
    console.error('[Wishlist] Error saving wishlist:', error);
  }
}

/**
 * Add product to wishlist
 * @param {number} productId - Product ID to add
 * @returns {boolean} Success status
 */
export function addToWishlist(productId) {
  console.log('[Wishlist] Adding product to wishlist:', productId);
  const wishlist = getWishlist();
  if (!wishlist.includes(productId)) {
    wishlist.push(productId);
    saveWishlist(wishlist);
    console.log('[Wishlist] Product added successfully:', productId);
    return true;
  }
  console.log('[Wishlist] Product already in wishlist:', productId);
  return false;
}

/**
 * Remove product from wishlist
 * @param {number} productId - Product ID to remove
 * @returns {boolean} Success status
 */
export function removeFromWishlist(productId) {
  console.log('[Wishlist] Removing product from wishlist:', productId);
  const wishlist = getWishlist();
  const index = wishlist.indexOf(productId);
  if (index > -1) {
    wishlist.splice(index, 1);
    saveWishlist(wishlist);
    console.log('[Wishlist] Product removed successfully:', productId);
    return true;
  }
  console.log('[Wishlist] Product not found in wishlist:', productId);
  return false;
}

/**
 * Toggle product in wishlist
 * @param {number} productId - Product ID to toggle
 * @returns {boolean} True if added, false if removed
 */
export function toggleWishlist(productId) {
  console.log('[Wishlist] Toggling wishlist for product:', productId);
  const wishlist = getWishlist();
  if (wishlist.includes(productId)) {
    console.log('[Wishlist] Product is in wishlist, removing...');
    removeFromWishlist(productId);
    return false;
  } else {
    console.log('[Wishlist] Product not in wishlist, adding...');
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
  console.log(`[Wishlist] Updating ${hearts.length} heart icons`);
  
  hearts.forEach((heart) => {
    const element = /** @type {HTMLElement} */ (heart);
    const productId = parseInt(element.dataset.productId || '0');
    const isWishlisted = wishlist.includes(productId);
    
    element.classList.toggle('is-wishlisted', isWishlisted);
    element.setAttribute('aria-label', isWishlisted ? 'Remove from wishlist' : 'Add to wishlist');
    console.log(`[Wishlist] Updated heart for product ${productId}: ${isWishlisted ? 'wishlisted' : 'not wishlisted'}`);
  });
}

// Listen for wishlist updates
window.addEventListener('wishlist:updated', () => {
  updateAllHearts();
});
