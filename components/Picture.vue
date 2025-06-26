<script setup lang="ts">
const emit = defineEmits("next");

const toggleOpen = () => {
  emit("next");
};

</script>

<template>
  <div>
    <div id="camera">
      <div class="strip"></div>
      <div class="lens"></div>
      <div class="led"></div>
      <div class="btn" @click="toggleOpen"></div>
    </div>
    <div class="shadow"></div>
  </div>
</template>

<style scoped>
#camera,
#panel {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 300px;
  height: 300px;
  margin: -150px;
  background: #eaeaea;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50px;
  overflow: hidden;
  transition: all 0.5s ease-in-out;
}

#camera {
  z-index: 2;
}

.btn {
  position: absolute;
  top: 22px;
  right: 35px;
  width: 40px;
  height: 30px;
  background-color: #2e3e4f;
  border-radius: 15px;
  box-shadow: 0px 3px 0px rgba(0, 0, 0, 0.4);
  transition: all 0.2s ease-in-out;
  animation: btn 0.5s 5;
}

.btn:hover {
  cursor: pointer;
  margin-top: 2px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
}

.shadow {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 240px;
  height: 20px;
  margin: 170px -120px 0px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
}

.strip {
  height: 120px;
  background-color: #54b59a;
  border-top: 10px solid #479a83;
  border-bottom: 10px solid #479a83;
  margin: 80px 0px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.4);
}

.lens {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 144px;
  height: 144px;
  margin: -79px;
  border: 18px solid #b44b37;
  border-radius: 50%;
  background-color: #111;
  box-shadow: 0px 5px 0px rgba(0, 0, 0, 0.4);
}

.lens:before {
  content: "";
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 27px;
  border: 20px solid rgb(60, 60, 60);
  border-radius: 50%;
  background: rgb(34, 34, 34);
}

.lens:after {
  content: "";
  position: absolute;
  width: 8px;
  height: 8px;
  margin: 42px;
  border-radius: 50%;
  background: rgb(131, 131, 131);
}

.led {
  position: absolute;
  left: 35px;
  top: 30px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: rgb(255, 136, 115);
  box-shadow: inset 0px 1px 0px rgba(0, 0, 0, 0.1);
  animation: led 0.8s infinite;
}

.pic {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 150px;
  margin: -120px -75px;
  border: 5px solid #ccc;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);
}

.lnk {
  position: relative;
  top: 220px;
  font: 22px "News Cycle", sans-serif;
  color: #777;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
}

.lnk:hover {
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
}

/* Keyframes */
@keyframes led {
  from {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
}

@keyframes btn {
  from {
    margin-top: 0px;
  }

  to {
    margin-top: 2px;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.4);
  }
}
</style>
