const html = `
    <style>
        * {
            box-sizing: border-box;
        }
        
        .slider {
            display: flex;
        }
        
        ::slotted(img) {
            max-width: 100%;
            display: none;
        }
        
        ::slotted(img.active) {
            display: block;
            animation: fadeImg 0.8s;
        }
        
        @keyframes fadeImg {
            from {
                opacity: 0;
            }
            
            to {
                opacity: 1;
            }
        }
    </style>
    <slot class="slider" name="images"></slot>
`;

export function getTemplate() {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}
