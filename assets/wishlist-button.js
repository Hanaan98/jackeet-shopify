import { Component } from './component.js';
import { toggleWishlist, isInWishlist } from './wishlist.js';

/**
 * Wishlist button component for product cards
 */
export class WishlistButton extends Component {
  connectedCallback() {
    super.connectedCallback();
    
    const productId = this.dataset.productId;
    console.log('[WishlistButton] Component connected for product:', productId);
    
    this.addEventListener('click', this.handleClick, true);
    this.addEventListener('mousedown', this.handleMouseDown, true);
    this.addEventListener('touchstart', this.handleTouchStart, { passive: false, capture: true });
    this.updateState();
    
    // Listen for wishlist updates
    window.addEventListener('wishlist:updated', () => this.updateState());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    console.log('[WishlistButton] Component disconnected for product:', this.dataset.productId);
    this.removeEventListener('click', this.handleClick, true);
    this.removeEventListener('mousedown', this.handleMouseDown, true);
    this.removeEventListener('touchstart', this.handleTouchStart, true);
  }

  /**
   * Handle mousedown to prevent any bubbling
   * @param {Event} event
   */
  handleMouseDown = (event) => {
    console.log('[WishlistButton] Mousedown event on product:', this.dataset.productId);
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
  };

  /**
   * Handle touch start to prevent any bubbling
   * @param {Event} event
   */
  handleTouchStart = (event) => {
    console.log('[WishlistButton] Touchstart event on product:', this.dataset.productId);
    event.stopPropagation();
    event.stopImmediatePropagation();
  };

  /**
   * Handle click on wishlist button
   * @param {Event} event
   */
  handleClick = (event) => {
    console.log('[WishlistButton] ========== CLICK DEBUG ==========');
    console.log('[WishlistButton] Element:', this);
    console.log('[WishlistButton] dataset.productId:', this.dataset.productId);
    console.log('[WishlistButton] dataset.productHandle:', this.dataset.productHandle);
    console.log('[WishlistButton] getAttribute productId:', this.getAttribute('data-product-id'));
    console.log('[WishlistButton] getAttribute productHandle:', this.getAttribute('data-product-handle'));
    console.log('[WishlistButton] All dataset:', JSON.stringify(this.dataset));
    console.log('[WishlistButton] ================================');
    
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    const productId = parseInt(this.dataset.productId || '0');
    const productHandle = this.dataset.productHandle || this.getAttribute('data-product-handle') || '';
    
    if (!productId) {
      console.warn('[WishlistButton] No product ID found!');
      return;
    }
    
    if (!productHandle) {
      console.error('[WishlistButton] ❌ No product handle found! This will cause issues on the favourites page.');
      console.error('[WishlistButton] Product ID:', productId);
      console.error('[WishlistButton] Element HTML:', this.outerHTML);
    } else {
      console.log('[WishlistButton] ✅ Handle found:', productHandle);
    }
    
    console.log('[WishlistButton] Calling toggleWishlist with:', { productId, productHandle });
    const isAdded = toggleWishlist(productId, productHandle);
    console.log('[WishlistButton] Toggle result:', isAdded ? 'Added' : 'Removed');
    
    // Add animation class
    this.classList.add('wishlist-button--animating');
    setTimeout(() => {
      this.classList.remove('wishlist-button--animating');
    }, 300);
    
    // Update visual state
    this.updateState();
    
    return false;
  };

  /**
   * Update button visual state based on wishlist status
   */
  updateState() {
    const productId = parseInt(this.dataset.productId || '0');
    if (!productId) return;
    
    const isWishlisted = isInWishlist(productId);
    console.log('[WishlistButton] Updating state for product:', productId, 'isWishlisted:', isWishlisted);
    this.classList.toggle('is-wishlisted', isWishlisted);
    this.setAttribute('aria-label', isWishlisted ? 'Remove from wishlist' : 'Add to wishlist');
  }
}

if (!customElements.get('wishlist-button')) {
  customElements.define('wishlist-button', WishlistButton);
}
