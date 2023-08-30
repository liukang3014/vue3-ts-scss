<template>
  <div class="Friends">
    <h1>Friends</h1>
    <div v-for=" item in arr" :key="item">{{ item }}</div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { Point } from "@/utils/type";
@Options({
  components: {
    HelloWorld
  }
})
export default class Friends extends Vue {
  $store: any;
  TypeObj = {
    a: "121321",
    b: "4654545"
  }
  get arr() {
    return this.$store.state.arr;
  }
  created(): void {
    // this.vuexclick();
    this.vuetype(this.TypeObj)
  }

  vuexclick() {
    this.$store.commit("updateArr", ["a", "b"]);
  }
  vuetype(data: Point) {
    console.log(data);
  }
}
</script>

  