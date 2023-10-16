<script setup></script>

<template>
  <div class="footer">
    <div class="footerLogo">
      <img
        src="../../public/icon/dog-footerprint-icon.svg"
        class="icon"
        alt="footerLogo"
        title="footerLogo"
      />
      <h1>吉娃娃世界</h1>
    </div>

    <form>
      <h3>聯絡我們</h3>
      <label>姓名</label>
      <input type="text" />
      <label>信箱</label>
      <input type="email" />
      <button type="button">送出</button>
    </form>

    <div class="support">
      <p>Support</p>
      <div class="supportIcon">
        <a href="https://fontawesome.com/" target="_blank">
          <img
            src="../../public/icon/font-awesome-icon.svg"
            class="icon"
            alt="fontawesome-icon"
            title="fontawesome-icon"
          />
        </a>
        <a href="https://www.npmjs.com/" target="_blank">
          <img
            src="../../public/icon/npm-icon.svg"
            class="icon"
            alt="npm-icon"
            title="npm-icon"
          />
        </a>
        <a href="https://www.pexels.com/zh-tw/" target="_blank">
          <img
            src="../../public/icon/pexels-icon.svg"
            class="icon"
            alt="pexels-icon"
            title="pexels-icon"
          />
        </a>
        <a href="https://www.pexels.com/zh-tw/" target="_blank">
          <img
            src="../../public/icon/pexels-icon.svg"
            class="icon"
            alt="pexels-icon"
            title="pexels-icon"
          />
        </a>
        <a href="https://www.pexels.com/zh-tw/" target="_blank">
          <img
            src="../../public/icon/pexels-icon.svg"
            class="icon"
            alt="pexels-icon"
            title="pexels-icon"
          />
        </a>
        <a href="https://www.pexels.com/zh-tw/" target="_blank">
          <img
            src="../../public/icon/pexels-icon.svg"
            class="icon"
            alt="pexels-icon"
            title="pexels-icon"
          />
        </a>
      </div>
    </div>

    <span>Copyright 2023 ian | web design</span>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  justify-content: space-between;
  padding: 0 20vw 0 2vw;
  border-top: 2px solid #232323;
  position: relative;

  .footerLogo {
    display: flex;

    margin-top: 1rem;
    h1 {
      align-self: flex-start;
      margin-top: 1rem;
    }
  }

  form {
    // border: 2px solid #777;
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 1rem 0;
    h3 {
      font-size: 1.5rem;
      text-align: center;
      margin-bottom: 1rem;
    }
    label {
      font-size: 1.5rem;
    }
    input {
      width: 12rem;
      height: 2rem;
      font-size: 1.5rem;
      border: none;
      border-bottom: 2px solid #343434;
    }

    button {
      align-self: center;
      width: 6rem;
      height: 2rem;
      font-size: 1.5rem;
      border: 2px solid #232323;
      border-radius: 8px;
      transition: all 0.3s ease-in;

      &:hover {
        background-color: #232323;
        color: white;
      }
    }
  }

  .support {
    height: 40vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 1rem;
    p {
      align-self: center;
      font-size: 1.5rem;
    }
    .supportIcon {
      height: 35vh;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: space-between;
      a {
        .icon {
          transition: all 0.5s ease;
          margin-right: 2rem;
          z-index: 5;

          &:hover {
            transform: scale(1.2);
          }
        }
      }
    }
  }

  span {
    position: absolute;
    bottom: 2%;
    right: 2%;
    z-index: 1;
  }
}
</style>
