<template>
  <div class="background">
    <div class="box">
      <h3>Welcome to Chato Meeting</h3>
      <p>Getting Started is easy, Enter details given below.</p>

      <form>
        <input
          type="text"
          class="field"
          id="fname"
          name="fname"
          placeholder="Enter your name"
          v-model="userName"
        />
        <div class="mid">
          <img @click="hidevideo()" class="ic" src="/video-plus.png" />
          <img
            v-if="mic === true"
            @click="mic = false"
            class="ic"
            src="mic.png"
          />
          <img
            v-if="mic === false"
            @click="mic = true"
            class="ic"
            src="mic-close.png"
          />
          <img @click="showvideo()" class="ic" src="video.png" />
        </div>
         <router-link class="but" :to="'meeting?meetingID=1241241241&name='+userName">
         <button class="but">
          Login Now<img class="icon-login" src="/vecor.png" />
         </button>
        </router-link> 
      </form>
    </div>
    <div class="fotter">
      <h5 class="text">45599696969</h5>

      <img class="icon" src="/copy.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "SIdeBar",
  data() {
    return {
      mesg: "video",
      mic: true,
      ismic: false,
      userName: ''
    };
  },
  props: {
    msg: String,
  },

  methods: {
    showvideo() {
      this.$emit("showhide", false);
    },
    hidevideo() {
      this.$emit("showhide", true);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ic {
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.icon {
  width: auto;
  height: 19px;
  float: right;
  cursor: pointer;
}
.mic {
  display: none;
}
.text {
  float: left;
}
.icon-login {
  width: auto;
  height: 16px;
  margin: 0px 0px -4px 7px !important;
  cursor: pointer;
}

h3 {
  padding: 20px;
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;

  color: #0b2a42;
}
h5 {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: left;
  color: #3d3d40;
}
.mid {
  gap: 18px;
  display: flex;
  width: 55%;
  /* height: 56px; */
  background: #ffffff;
  box-shadow: 0px 4px 34px rgb(0 0 0 / 25%);
  border-radius: 140px;
  margin: auto !important;
  justify-content: center;
  padding: 8px 10px;
}

.but {
  justify-content: center;
  align-items: center;
  margin-top: 20px !important;
  gap: 4px;
  margin-bottom: 40px !important;
  width: 90%;
  height: 54px;
  color: white;
  background: #000000;
  border-radius: 5px;
  cursor: pointer;
}

.field {
  padding: 12px 21px;
  gap: 10px;
  /* height: 74px; */
  background: #fcfcfc;
  border: 1px solid #e5e5e5;
  border-radius: 10px;
  margin-top: 20px !important;
  width: 80%;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px !important;
  color: #3d3d40;
}
p {
  font-family: "Circular Std";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;

  color: #656565;
}
.background {
  background-image: url("@/assets/134-01 1.png");

  padding-right: 5%;
  padding-left: 5%;
}
.box {
  background: #ffffff;
  box-shadow: 0px 4px 44px rgba(217, 217, 217, 0.25);
  border-radius: 13px;

  margin-top: 43% !important;
}
.fotter {
  padding: 15px 20px;
  left: 43px;
  margin-bottom: 10% !important;
  margin-top: 20% !important;
  height: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 44px rgba(217, 217, 217, 0.25);
  border-radius: 13px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
