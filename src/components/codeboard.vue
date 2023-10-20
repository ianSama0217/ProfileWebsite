<script setup>
const props = defineProps({
  codeNote: {
    type: Object,
    default: () => ({}),
  },
});
</script>

<template>
  <div class="codeBox" v-for="item in codeNote">
    <h3 class="title">{{ item.title }}</h3>
    <Vue3Prism class="Vue3Prism" :source="item.source"></Vue3Prism>
    <p class="content">
      {{ item.content }}
    </p>
    <p class="hint">{{ item.hint }}</p>
    <hr />
    <br />
  </div>
</template>

<style scoped lang="scss">
.codeBox {
  margin: 1rem 0;
  display: flex;
  flex-direction: column;

  .title {
    font-size: 2rem;
    align-self: center;
  }

  .Vue3Prism {
    min-width: 50vw;
  }

  .content {
    font-size: 1.2rem;
  }
  .hint {
    font-size: 1.2rem;
    color: red;
    margin: 1rem 0;
  }
}
</style>
