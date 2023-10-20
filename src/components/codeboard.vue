<script setup>
const props = defineProps({
  codeNoteTitle: {
    type: String,
    default: "",
  },
  codeSource: {
    type: String,
    default: "",
  },
  codeNoteContent: {
    type: String,
    default: "",
  },
  //比較重要的筆記內容(可有可無)
  codeNoteHint: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <div class="codeBox">
    <h3 class="title">{{ props.codeNoteTitle }}</h3>
    <Vue3Prism class="Vue3Prism" :source="props.codeSource"></Vue3Prism>
    <p class="content">{{ props.codeNoteContent }}</p>
    <p class="hint">{{ props.codeNoteHint }}</p>
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
