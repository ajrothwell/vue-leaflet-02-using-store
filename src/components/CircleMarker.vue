<script>
  import { CircleMarker }  from 'leaflet';
  export default {
    name: 'CircleMarker',
    props: ['latlng', 'radius', 'fillColor', 'color', 'weight', 'opacity', 'fillOpacity'],
    mounted() { const leafletElement = this.$leafletElement = this.createLeafletElement(); },
    render(h) { return; },
    methods: {
      createLeafletElement() {
        const props = this.$props;
        const { latlng, ...options } = props;
        const newCircleMarker = new CircleMarker(latlng, options);
        return newCircleMarker;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };
</script>
