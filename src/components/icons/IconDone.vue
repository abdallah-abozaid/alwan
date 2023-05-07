<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
    <g id="Group_55306" data-name="Group 55306" transform="translate(-397.492 -606.492)">
      <g
        id="Ellipse_286"
        data-name="Ellipse 286"
        transform="translate(397.492 606.492)"
        fill="#fff"
        stroke="#0f6"
        stroke-width="0.5"
      >
        <circle cx="10" cy="10" r="10" stroke="none" />
        <circle cx="10" cy="10" r="9.75" fill="none" />
      </g>
      <path
        id="Shape"
        d="M3.741,8.052.161,4.472a.551.551,0,0,1,0-.779L.94,2.915a.551.551,0,0,1,.779,0L4.13,5.326,9.295.161a.551.551,0,0,1,.779,0l.779.779a.551.551,0,0,1,0,.779L4.52,8.052a.551.551,0,0,1-.779,0Z"
        transform="translate(401.985 612.386)"
        :fill="color"
      />
    </g>
  </svg>
</template>
<script>
export default {
  props: ['color']
}
</script>
