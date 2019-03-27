const html = `
    <style>
        
    </style>
    <div>
        <img src="img/img1.jpg">
        <img src="img/img2.jpg">
        <img src="img/img3.jpg">
        <img src="img/img4.jpg">
    </div>
`;

export function getTemplate() {
  const template = document.createElement('template');
  template.innerHTML = html;
  return template;
}
