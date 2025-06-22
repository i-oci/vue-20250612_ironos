import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapApp',

  setup() {
    // Реактивные переменные для хранения координат метки
    let x = ref(0)
    let y = ref(0)

    return {
      x,y
    }
  },

  template: `
    <div class="map" @click="x=$event.offsetX;y=$event.offsetY">
      <img class="map-image" src="./map.png" alt="Map" draggable="false" />
      <span class="pin" :style="{left: x + 'px',top: y + 'px'}">📍</span>
    </div>
  `,
})


