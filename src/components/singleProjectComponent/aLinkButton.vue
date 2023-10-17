<script setup>
const props = defineProps({
  webURL: {
    type: String,
    default: "",
  },
  githubURL: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="linkBox">
    <a :href="props.webURL" class="alink" target="_blank">
      <img
        src="../../../public/icon/netlify-icon.svg"
        alt="netlify-icon"
        class="icon"
      />
      <p class="linkText">前往網站</p>
    </a>
    <a :href="props.githubURL" class="alink" target="_blank">
      <img
        src="../../../public/icon/github-icon.svg"
        alt="github-icon"
        class="icon"
      />
      <p class="linkText">GitHub</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
.linkBox {
  width: 60vw;
  display: flex;
  justify-content: space-around;
  .alink {
    border: 2px solid #232323;
    display: flex;
    text-decoration: none;
    padding: 0 0.5rem;
    border-radius: 8px;
    transition: all 0.5s ease;

    &:hover {
      transform: scale(1.2);
    }
    .icon {
      margin-right: 0.5rem;
    }
    .linkText {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
}
</style>
