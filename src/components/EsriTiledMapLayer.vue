<script>
  import { tiledMapLayer as TiledMapLayer } from 'esri-leaflet';
  export default {
    name: 'EsriTiledMapLayer',
    props: ['url'],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
      const map = this.$store.state.map.map;
      if (map) {
        leafletElement.addTo(map);
      }
    },
    destroyed() { this.$leafletElement._map.removeLayer(this.$leafletElement); },
    render(h) { return; },
    methods: {
      createLeafletElement() {
        const props = Object.assign({}, this.$props);
        const mapLayer = new TiledMapLayer(props);
        return mapLayer;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>
