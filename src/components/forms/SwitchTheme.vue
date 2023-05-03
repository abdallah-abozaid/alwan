<template>
  <div class="toggle-switch">
    <label class="input">
      <input type="checkbox" id="switch" />
      <span class="slider"></span>
    </label>
  </div>
</template>

<script setup></script>

<style scoped>
.toggle-switch {
  position: relative;
  width: 3rem;
  height: 1.8rem;
  margin-right: 0.6rem;
}

.toggle-switch label.input {
  position: absolute;
  width: 100%;
  height: 1.8rem;
  background-color: #ccc;
  border-radius: 50px;
  cursor: pointer;
}

.toggle-switch input {
  position: absolute;
  display: none;
}

.toggle-switch .slider {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50px;
  transition: 0.3s;
}

.toggle-switch input:checked ~ .slider {
  background-color: #d8dbe0;
}

.toggle-switch .slider::before {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 23px;
  height: 23px;
  border-radius: 50%;
  box-shadow: inset 8px -1px 0px 0px #fff;
  background-color: #ccc;
  transition: 0.3s;
}

.toggle-switch input:checked ~ .slider::before {
  transform: translateX(20px);
  background-color: #f9fd08;
  box-shadow: none;
}
</style>
