const html = `
    <style>
        * {
            box-sizing: border-box;
        }
        
        .slider {
            display: flex;
        }
        
        img {
            max-width: 100%;
            display: none;
        }
        
        .active {
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
    <div class="slider">
      <img src="img/img1.jpg">
      <img class="active" src="img/img2.jpg">
      <img src="img/img3.jpg">
      <img src="img/img4.jpg">
    </div>
`;

export function getTemplate() {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}
