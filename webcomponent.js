import { getTemplate } from './template';

class ImageSlider extends HTMLElement {
  constructor() {
    super();

    let clonedTemplate = getTemplate().content.cloneNode(true);
    this.attachShadow({ mode: 'open' }).appendChild(clonedTemplate);
  }
}

customElements.define('image-slider', ImageSlider);
