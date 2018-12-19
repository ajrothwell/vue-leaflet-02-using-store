<script>
  import { CircleMarker }  from 'leaflet';
  export default {
    name: 'CircleMarker',
    props: ['latlng', 'radius', 'fillColor', 'color', 'weight', 'opacity', 'fillOpacity'],
    render(h) { return; },
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }
    },
    destroyed() {
      const map = this.$parent.$leafletElement;
      this.$leafletElement.removeFrom(map);
    },
    methods: {
      createLeafletElement() {
        const { latlng, ...options } = this.$props;
        return new CircleMarker(latlng, options);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };
</script>
