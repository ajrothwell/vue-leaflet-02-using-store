<template>
  <map_ :center="[39.952218, -75.163604]"
        :zoom="17"
  >
    <esri-tiled-map-layer :url="'//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_2018_3in/MapServer/'" />
    <esri-tiled-map-layer :url="'//tiles.arcgis.com/tiles/fLeGjb7u4uXqeF9q/arcgis/rest/services/CityImagery_Labels/MapServer'" />
    <!-- <esri-feature-layer :url="'//services.arcgis.com/fLeGjb7u4uXqeF9q/ArcGIS/rest/services/PWD_PARCELS/FeatureServer/0'"
                        :color="'black'"
                        :weight="2"
                        :fillColor="'blue'"
                        :fillOpacity="0.25"
    /> -->
    <circle-marker :latlng="[39.952218, -75.163604]"
                   :radius="8"
                   :color="'black'"
                   :weight="2"
                   :fillColor="'red'"
                   :fillOpacity="1"
                   :opacity="1"
    />
    <!-- <polygon_ :latlngs="[[39.953229, -75.162204],[39.953110, -75.161308],[39.952830, -75.161373],[39.952941, -75.162301],[39.953229, -75.162204]]"
              :color="'red'"
              :weight="2"
              :fillColor="'blue'"
    /> -->
    <polygon_ :latlngs="this.parcelCoords"
              :color="'red'"
              :weight="2"
              :fillColor="'blue'"
    />
  </map_>
</template>

<script>
import Map_ from './components/Map.vue';
import EsriTiledMapLayer from './components/TiledMapLayer.vue';
import EsriFeatureLayer from './components/FeatureLayer.vue';
import CircleMarker from './components/CircleMarker.vue';
import Polygon_ from './components/Polygon.vue';
export default {
  name: 'app',
  components: {
    Map_,
    EsriTiledMapLayer,
    EsriFeatureLayer,
    CircleMarker,
    Polygon_
  },
  computed: {
    parcelCoords() {
      return this.$store.state.map.parcelCoords || [];
    }
  }
}
</script>
