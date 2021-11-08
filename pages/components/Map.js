import { useEffect } from 'react'
import tw from 'tailwind-styled-components' 
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 
  'pk.eyJ1IjoiYWJlbG1hcnRpbmV6ODY2IiwiYSI6ImNrdmxvNmdxODM1bXIydXAxMDV1b3BremgifQ.SFRzj5i5t3zTSWpMUd5CDw';

const Map = () => {
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
            center: [-99.29011, 39.39172],
            zoom: 3,
          });
        });

        return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1
`
