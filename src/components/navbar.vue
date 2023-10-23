<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="navbarGrid">
    <img
      src="../../public/icon/dog-icon.svg"
      class="homeIcon"
      alt="HomeIcon"
      title="HomeIcon"
    />
    <div class="navbarRouterLinks">
      <RouterLink to="/" class="link">個人簡介</RouterLink>
      <RouterLink to="/note" class="link">Vue課堂筆記</RouterLink>
      <RouterLink to="/project" class="link">作品集</RouterLink>
    </div>
    <div class="navbarSocialIcon">
      <a href="https://github.com/ianSama0217" target="_blank"
        ><img
          src="../../public/icon/github-icon.svg"
          class="icon"
          alt="githubLinkIcon"
          title="githubLinkIcon"
      /></a>
      <a href="https://discord.com/" target="_blank"
        ><img
          src="../../public/icon/discord-icon.svg"
          class="icon"
          alt="HomeIcon"
          title="HomeIcon"
      /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navbarGrid {
  border-bottom: 2px solid #323232;
  display: flex;
  justify-content: space-between;
  .homeIcon {
    height: 5vw;
    width: 5vw;
    margin-left: 1rem;
  }
  .navbarRouterLinks {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .link {
      text-decoration: none;
      font-size: 2rem;
    }
  }
  .navbarSocialIcon {
    width: 15%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    a {
      .icon {
        height: 4vw;
        width: 4vw;
        transition: all 0.5s ease;

        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
}
</style>
