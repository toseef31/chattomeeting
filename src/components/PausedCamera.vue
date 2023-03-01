<template>
  <div class="background">
    <img class="cam-img" src="camera-stop.png" />
    <h3>No Camera Preview</h3>
    <h4>Your camera is turned off</h4>
  </div>
</template>

<script>
export default {
  name: "SIdeBar",
  data() {
    return {
      mesg: "video",
    };
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cam-img {
  width: 128px;
  height: 128px;
  margin-top: 22% !important;
}
h3 {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  margin-top: -20px !important;
  color: #ffffff;
}
h4 {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  margin-top: 10px !important;
}
</style>
