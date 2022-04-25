mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemFsb2VtbSIsImEiOiJjbDF6bG8yNjgwbnY5M2JwNnR0bnRxbDZrIn0.QTHJyt2cNWkufi6-2L-QCA';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // style URL
    center: [-64.78086185351374, -23.784548492262477], //long, lat
    zoom: 16 // starting zoom
});

const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
    input.onclick = (layer) => {
        const layerId = layer.target.id;
        map.setStyle('mapbox://styles/mapbox/' + layerId);
    };
}
let element = document.createElement('div')
element.className = 'marker'

let marker = new mapboxgl.Marker(element)
    .setLngLat({
        lng: -64.78086185351374,
        lat: -23.784548492262477
    })
    .addTo(map)

//     <!-- <script>
//     mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemFsb2VtbSIsImEiOiJjbDF6bG8yNjgwbnY5M2JwNnR0bnRxbDZrIn0.QTHJyt2cNWkufi6-2L-QCA';

//     var map = new mapboxgl.Map({
//         container: 'map',
//         center: [-23.786208013296235, -64.78071526701488], //long, lat
//         style: 'mapbox://styles/mapbox/streets-v11',
//         center: [-64.7833, -23.8222], //long, lat
//         zoom: 9,
//     });
//      let element = document.createElement('div')
//     element.className = 'marker'

//     let marker = new mapboxgl.Marker(element)
//         .setLngLat({
//             lng: -64.78086185351374,
//             lat: -23.784548492262477
//         })
//         .addTo(map)
// </script> -->


// <!-- <script>
//     mapboxgl.accessToken = 'pk.eyJ1IjoiZ29uemFsb2VtbSIsImEiOiJjbDF6bG8yNjgwbnY5M2JwNnR0bnRxbDZrIn0.QTHJyt2cNWkufi6-2L-QCA';
//     const map = new mapboxgl.Map({
//         style: 'mapbox://styles/mapbox/light-v10',
//         center: [-23.786208013296235, -64.78071526701488], //long, lat
//         zoom: 15.5,
//         pitch: 45,
//         bearing: -17.6,
//         container: 'map',
//         antialias: true
//     });

//     map.on('load', () => {
//         // Insert the layer beneath any symbol layer.
//         const layers = map.getStyle().layers;
//         const labelLayerId = layers.find(
//             (layer) => layer.type === 'symbol' && layer.layout['text-field']
//         ).id;

//         // The 'building' layer in the Mapbox Streets
//         // vector tileset contains building height data
//         // from OpenStreetMap.
//         map.addLayer({
//                 'id': 'add-3d-buildings',
//                 'source': 'composite',
//                 'source-layer': 'building',
//                 'filter': ['==', 'extrude', 'true'],
//                 'type': 'fill-extrusion',
//                 'minzoom': 15,
//                 'paint': {
//                     'fill-extrusion-color': '#aaa',

//                     // Use an 'interpolate' expression to
//                     // add a smooth transition effect to
//                     // the buildings as the user zooms in.
//                     'fill-extrusion-height': [
//                         'interpolate', ['linear'],
//                         ['zoom'],
//                         15,
//                         0,
//                         15.05, ['get', 'height']
//                     ],
//                     'fill-extrusion-base': [
//                         'interpolate', ['linear'],
//                         ['zoom'],
//                         15,
//                         0,
//                         15.05, ['get', 'min_height']
//                     ],
//                     'fill-extrusion-opacity': 0.6
//                 }
//             },
//             labelLayerId
//         );
//     });
// </script> -->