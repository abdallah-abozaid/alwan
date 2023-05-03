<template>
  <div class="switch2">
    <label for="switch">
      {{ themeDark ? 'مضيئ' : 'ليلي' }}
    </label>
    <div>
      <input type="checkbox" id="switch" :checked="themeDark" @change="themeHandler" />
      <label for="switch">
        <div id="star"></div>
        <div id="moon"></div>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      themeDark: false
    }
  },
  methods: {
    themeHandler() {
      this.themeDark = !this.themeDark
    }
  }
}
</script>

<style scoped>
.switch2 {
  display: flex;
  align-items: center;
}
.switch2 > label {
  font-size: 1.3rem;
  margin-left: 0.6rem;
  cursor: pointer;
}
.switch2 > div {
  width: 3.3rem;
  height: 1.9rem;
}
.switch2 > div #switch {
  opacity: 0;
}
.switch2 > div label {
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  left: 0;
  width: 3.3rem;
  height: 1.9rem;
  margin: 0;
  background-color: #a7a7a7;
  border-radius: 56px;
  transform: translateY(-50%);
  cursor: pointer;
  transition: 0.3s ease background-color;
  overflow: hidden;
}

.switch2 > div #star {
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  transition: 0.3s ease top, 0.3s ease left, 0.3s ease transform, 0.3s ease background-color;
  z-index: 1;
  top: 1px;
  left: 12px;
  transform: scale(0.3);
  background-color: yellow;
}

.switch2 > div #moon {
  position: absolute;
  bottom: 3px;
  left: 3px;
  width: 25px;
  height: 25px;
  background-color: #fff;
  border-radius: 50%;
  transition: 0.3s ease bottom;
}

.switch2 > div #moon:before {
  content: '';
  position: absolute;
  top: -12px;
  right: -17px;
  width: 33px;
  height: 33px;
  background-color: #a7a7a7;
  border-radius: 50%;
  transition: 0.3s ease background-color;
}

.switch2 > div #switch:checked + label {
  background-color: #0094f6;
}

.switch2 > div #switch:checked + label #star {
  background-color: #fafd0f;
  top: 6px;
  left: 30px;
  transform: scale(1);
}

.switch2 > div #switch:checked + label #moon {
  bottom: -52px;
}

.switch2 > div #switch:checked + label #moon:before {
  background-color: #0094f6;
}

/* responsive for labtop screens */
@media (max-width: 1550px) {
  .switch2 > label {
    font-size: 1.1rem;
    margin-left: 0.4rem;
  }
  .switch2 > div {
    width: 2.7rem;
    height: 1.55rem;
  }

  .switch2 > div label {
    width: 2.7rem;
    height: 1.55rem;
  }

  .switch2 > div #star {
    width: 15px;
    height: 15px;
    top: 0px;
    left: 9px;
  }

  .switch2 > div #moon {
    bottom: 3px;
    left: 3px;
    width: 20px;
    height: 20px;
    transition: 0.3s ease bottom;
  }

  .switch2 > div #moon:before {
    width: 31px;
    height: 31px;
  }

  .switch2 > div #switch:checked + label #star {
    top: 5.5px;
    left: 25px;
  }
}
</style>
