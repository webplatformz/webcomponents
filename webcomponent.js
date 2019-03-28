import { getTemplate } from './template';

class ImageSlider extends HTMLElement {
  constructor() {
    super();

    let clonedTemplate = getTemplate().content.cloneNode(true);
    this.attachShadow({ mode: 'open' }).appendChild(clonedTemplate);

    document.body.addEventListener('keydown', event => this.onKeyPress(event));
  }

  onKeyPress(event) {
      if (event.keyCode == '37') {
        this.showPreviousItem();
      } else if (event.keyCode == '39') {
        this.showNextItem();
      }
  }

  showPreviousItem() {
    const images = Array.from(this.shadowRoot.querySelectorAll('.slider img'));
    let activeIndex = images.findIndex(image => image.classList.contains('active'));
    if (activeIndex === 0) {
      activeIndex = images.length - 1;
    } else {
      activeIndex = activeIndex - 1;
    }
    this.updateActiveElement(images, activeIndex);
  }

  showNextItem() {
    const images = Array.from(this.shadowRoot.querySelectorAll('.slider img'));
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
  }
}

customElements.define('image-slider', ImageSlider);
