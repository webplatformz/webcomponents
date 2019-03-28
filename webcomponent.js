import { getTemplate } from './template';

class ImageSlider extends HTMLElement {
  static get observedAttributes() {
    return ['active-index'];
  }

  constructor() {
    super();

    let clonedTemplate = getTemplate().content.cloneNode(true);
    this.attachShadow({ mode: 'open' }).appendChild(clonedTemplate);

    document.body.addEventListener('keydown', event => this.onKeyPress(event));
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.updateActiveElement(this.getSlotElements(), Number(newValue));
  }

  onKeyPress(event) {
    if (event.keyCode == '37') {
      this.showPreviousItem();
    } else if (event.keyCode == '39') {
      this.showNextItem();
    }
  }

  showPreviousItem() {
    const images = this.getSlotElements();
    let activeIndex = images.findIndex(image => image.classList.contains('active'));
    if (activeIndex === 0) {
      activeIndex = images.length - 1;
    } else {
      activeIndex = activeIndex - 1;
    }
    this.updateActiveElement(images, activeIndex);
  }

  showNextItem() {
    const images = this.getSlotElements();
    let activeIndex = images.findIndex(image => image.classList.contains('active'));
    if (activeIndex === images.length - 1) {
      activeIndex = 0;
    } else {
      activeIndex = activeIndex + 1;
    }
    this.updateActiveElement(images, activeIndex);
  }

  updateActiveElement(images, activeIndex) {
    images.forEach((image, index) => {
      if (index === activeIndex) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
      }
    });
    this.dispatchEvent(new CustomEvent('active-image', {
      bubbles: true,
      detail: activeIndex,
    }))
  }

  getSlotElements() {
    return Array.from(this.shadowRoot.querySelector('slot').assignedElements());
  }
}

customElements.define('image-slider', ImageSlider);

document.querySelector('image-slider').addEventListener('active-image', event => console.log(event.detail));