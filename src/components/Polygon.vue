<script>
  import { Polygon } from 'leaflet';

  export default {
    name: 'Polygon_',
    render(h) { return; },
    props: {
      'latlngs': Array,
      'color': {
        type: String,
        default: 'blue'
      },
      'weight': {
        type: Number,
        default: 3
      },
      'fillColor': String
    },
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }
    },
    watch: {
      latlngs(nextLatLngs) {
        const map = this.$store.state.map.map;
        map.removeLayer(this.$leafletElement);
        const leafletElement = this.$leafletElement = this.createLeafletElement();
        if (map) {
          leafletElement.addTo(map);
        }
      }
    },
    methods: {
      createLeafletElement() {
        const { latlngs, ...options } = this.$props;
        return new Polygon(latlngs, options);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };

</script>
