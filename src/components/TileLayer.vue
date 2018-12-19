<script>
  import { tileLayer as TileLayer } from 'leaflet';
  export default {
    name: 'TileLayer',
    props: ['url'],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }
    },
    destroyed() {
      const map = this.$store.state.map.map;
      map.removeLayer(this.$leafletElement);
    },
    render(h) { return; },
    methods: {
      createLeafletElement() {
        const { ...options } = this.$props;
        return new TileLayer(options.url);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>
