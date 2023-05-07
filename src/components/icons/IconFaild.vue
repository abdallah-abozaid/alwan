<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="20"
    height="20"
    viewBox="0 0 20 20"
  >
    <defs>
      <clipPath id="clip-path">
        <path
          id="Icon"
          d="M8.6.2A.664.664,0,0,0,7.66.2L4.4,3.457,1.136.2A.665.665,0,0,0,.2,1.136L3.457,4.4.2,7.66a.665.665,0,0,0,.941.941L4.4,5.338,7.66,8.6A.665.665,0,1,0,8.6,7.66L5.338,4.4,8.6,1.136A.669.669,0,0,0,8.6.2Z"
          transform="translate(0 0)"
          fill="#f01a24"
        />
      </clipPath>
    </defs>
    <g id="Group_55396" data-name="Group 55396" transform="translate(-1217 -379)">
      <g
        id="Ellipse_286"
        data-name="Ellipse 286"
        transform="translate(1217 379)"
        fill="none"
        :stroke="color"
        stroke-width="0.5"
      >
        <circle cx="10" cy="10" r="10" stroke="none" />
        <circle cx="10" cy="10" r="9.75" fill="none" />
      </g>
      <g id="Group_58" data-name="Group 58" transform="translate(1223 385)">
        <path
          id="Icon-2"
          data-name="Icon"
          d="M8.6.2A.664.664,0,0,0,7.66.2L4.4,3.457,1.136.2A.665.665,0,0,0,.2,1.136L3.457,4.4.2,7.66a.665.665,0,0,0,.941.941L4.4,5.338,7.66,8.6A.665.665,0,1,0,8.6,7.66L5.338,4.4,8.6,1.136A.669.669,0,0,0,8.6.2Z"
          transform="translate(0 0)"
          :fill="color"
        />
      </g>
    </g>
  </svg>
</template>
<script>
export default {
  props: ['color']
}
</script>
