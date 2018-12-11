<template>
  <div class="map" ref="map">
    <slot />
  </div>
</template>

<script>
  import { Map, latLng } from 'leaflet';
  import { query as Query } from 'esri-leaflet';
  export default {
    name: 'Map_',
    props: ['center','zoom'],
    mounted() {
      const map = this.$leafletElement = this.createLeafletElement();
      for (let child of this.$children) {
        child.parentMounted(this, child.$props);
      }
      this.$store.commit('setMap', map);
      map.on('click', this.identifyParcel);
    },
    methods: {
      createLeafletElement() {
        const { ...options } = this.$props;
        return new Map(this.$refs.map, options);
      },
      identifyParcel(e) {
        var latlng = latLng(e.latlng);
        var query = Query({
          url:'//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0'
        }).contains(latlng).run((error, featureCollection, response) => {
          var latlngs = featureCollection.features[0].geometry.coordinates[0];
          var flipped = []
          for (let ll of latlngs) {
            flipped.push([ll[1], ll[0]])
          }
          this.$store.commit('setParcelCoords', flipped);
        })
      }
    }
  };
</script>

<style>
  .map {
    height: 300px;
    width: 1000px;
  }
</style>
