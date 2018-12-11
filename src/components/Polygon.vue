<script>
  import { Polygon } from 'leaflet';

  export default {
    name: 'Polygon_',
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
        const props = this.$props;
        const { latlngs, ...options } = props || null;
        const newPolygon = new Polygon(latlngs, options);
        // const newPolygon = new Polygon(this.$props.latlngs, {
        //   color: this.$props.color,
        //   weight: this.$props.weight,
        //   fillColor: this.$props.fillColor,
        // });
        return newPolygon;
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        this.$leafletElement.addTo(map);
      },
    }
  };

</script>
