<script>
  import { featureLayer as FeatureLayer } from 'esri-leaflet';
  export default {
    name: 'EsriFeatureLayer',
    props: ['url', 'color', 'fillColor', 'fillOpacity', 'weight'],
    created() { const leafletElement = this.$leafletElement = this.createLeafletElement(); },
    render(h) { return; },
    methods: {
      createLeafletElement() {
        const props = Object.assign({}, this.$props);
        return new FeatureLayer(props);
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      }
    }
  };
</script>
