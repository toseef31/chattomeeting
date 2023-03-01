<template>
  <div
    class="grid-container"
    style="display: flex; margin-top: 0px; overflow-y: hidden"
  >
    <div class="sidebar">
      <SideBar @showhide="showhidedata($event)"></SideBar>
    </div>
    <div style="width: 70%; margin: 0px; padding: 0px" v-if="data == true">
      <HelloWorld />
    </div>
    <div
      style="
        width: 70%;
        margin-top: 0px;
        background-color: #0b2a42;
        padding: 0px;
      "
      v-if="data == false"
    >
      <PausedCamera />
    </div>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import SideBar from "@/components/SideBar.vue";
import PausedCamera from "@/components/PausedCamera.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    SideBar,
    PausedCamera,
  },
  data() {
    return {
      data: true,
    };
  },
  methods: {
    showhidedata(data) {
      this.data = data;
      if (this.data == true) {
        this.available = true;

        console.log(this.data);
      } else if (this.data == false) {
        this.available = false;

        this.data = data;
        console.log(this.data);
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.sidebar {
  width: 30%;
  margin: 0px;
  padding: 0px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("@/assets/134-01 1.png");
}
* {
  margin: 0 !important;
}
.data {
  display: none;
}

.available {
  transition: visibility 0s, opacity 0.15s linear;
  display: block;
  transition: display 30000s;
}
</style>
