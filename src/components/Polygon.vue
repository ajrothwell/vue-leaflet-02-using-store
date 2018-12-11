<script>
  import { Polygon } from 'leaflet';

  export default {
    name: 'Polygon_',
    props: [
      'latlngs',
      'color',
      'weight',
      'fillColor',
    ],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }
    },
    // destroyed() {
    //   this.$leafletElement._map.removeLayer(this.$leafletElement);
    // },
    render(h) {
      return;
    },
    watch: {
      latlngs(nextLatLngs) {
        this.$leafletElement._map.removeLayer(this.$leafletElement);
        const leafletElement = this.$leafletElement = this.createLeafletElement();
        const map = this.$store.state.map.map;
        if (map) {
          leafletElement.addTo(map);
        }
      }
    },
    methods: {
      createLeafletElement() {
        const newPolygon = new Polygon(this.$props.latlngs, {
          color: this.$props.color,
          weight: this.$props.weight,
          fillColor: this.$props.fillColor,
      });
        return newPolygon;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };

</script>
