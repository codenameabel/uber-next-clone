import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'

const Confirm = () => {

    const getPickupCoordinates = () => {
        const pickup = 'Santa Monica';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWJlbG1hcnRpbmV6ODY2IiwiYSI6ImNrdmxvNmdxODM1bXIydXAxMDV1b3BremgifQ.SFRzj5i5t3zTSWpMUd5CDw",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                console.log("Pick Up");
                console.log(data.features[0].center);
            })
    }

    const getDropoffCoordinates = () => {
        const dropoff = 'Los Angeles';
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWJlbG1hcnRpbmV6ODY2IiwiYSI6ImNrdmxvNmdxODM1bXIydXAxMDV1b3BremgifQ.SFRzj5i5t3zTSWpMUd5CDw",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                console.log("Drop off");
                console.log(data.features[0].center);
            })
    }

    useEffect(() => {
        getPickupCoordinates();
        getDropoffCoordinates();
    }, [])

    return (
        <Wrapper>
            <Map />
            <RideContainer>
                Ride Selector
                Confirm Button
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 
`