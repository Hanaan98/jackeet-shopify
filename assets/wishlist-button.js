import { Component } from '@theme/component';
import { toggleWishlist, isInWishlist } from '@theme/wishlist';

/**
 * Wishlist button component for product cards
 */
export class WishlistButton extends Component {
  connectedCallback() {
    super.connectedCallback();
    
    this.addEventListener('click', this.handleClick);
    this.updateState();
    
    // Listen for wishlist updates
    window.addEventListener('wishlist:updated', () => this.updateState());
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('click', this.handleClick);
  }

  /**
   * Handle click on wishlist button
   * @param {Event} event
   */
  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    
    const productId = parseInt(this.dataset.productId || '0');
    if (!productId) return;
    
    const isAdded = toggleWishlist(productId);
    
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
    this.classList.toggle('is-wishlisted', isWishlisted);
    this.setAttribute('aria-label', isWishlisted ? 'Remove from wishlist' : 'Add to wishlist');
  }
}

if (!customElements.get('wishlist-button')) {
  customElements.define('wishlist-button', WishlistButton);
}
