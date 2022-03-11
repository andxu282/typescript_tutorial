<template>
  <div id="app">
    <h1>My TS App</h1>
    <p><input type="text" v-model="inputText" /></p>
    <CharCount :params="charCountParams"></CharCount> <!-- ADD -->
    <p><button @click="reset()">Reset</button></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CharCount, { CharCountParams } from './components/CharCount.vue';

interface State {
  inputText: string
}

export default defineComponent({
  name: 'App',
  components: { CharCount },
  data: (): State => {
    return { inputText: '' }
  },
  methods: {
    reset(){
      this.inputText = ''
    }
  },
  computed: {
    charCountParams(): CharCountParams {
      return {
        inputText: this.inputText,
        label: 'Count',
      }
    }
  }
});
</script>