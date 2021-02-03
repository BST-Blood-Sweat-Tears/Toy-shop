const $footer = document.querySelector('.footer');

const footerRender = () => {
  $footer.innerHTML = `
    <div class="github-container">
      <h3 class="a11y-hidden">만든이</h3>
      <a href="https://github.com/ejinaaa" class="github__link" target="_blank">
        <i class="fab fa-github github__icon"></i>
      </a>
      <a href="https://github.com/iamkjw77" class="github__link" target="_blank">
        <i class="fab fa-github github__icon"></i>
      </a>
      <a href="https://github.com/choisuhyeok1255" class="github__link" target="_blank">
        <i class="fab fa-github github__icon"></i>
      </a>
    </div>
    <div class="developer-container">
      <span class="developer__name">Eunjin Kang</span>
      <span class="developer__name">Jiwon Kim</span>
      <span class="developer__name">Suhyeok Choi</span>
    </div>
    <p class="copyright">ⓒ 2021 BST all rights reserved.</p>
  `;
};

export default footerRender;