import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'

const Confirm = () => {
    const router = useRouter()
    const {pickup, dropoff} = router.query

    const [ pickupCoordinates, setPickupCoordinates ] = useState()
    const [ dropoffCoordinates, setDropoffCoordinates ] = useState()

    const getPickupCoordinates = (pickup) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWJlbG1hcnRpbmV6ODY2IiwiYSI6ImNrdmxvNmdxODM1bXIydXAxMDV1b3BremgifQ.SFRzj5i5t3zTSWpMUd5CDw",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setPickupCoordinates(data.features[0].center);
            })
    }

    const getDropoffCoordinates = (dropoff) => {
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiYWJlbG1hcnRpbmV6ODY2IiwiYSI6ImNrdmxvNmdxODM1bXIydXAxMDV1b3BremgifQ.SFRzj5i5t3zTSWpMUd5CDw",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center);
            })
    }

    useEffect(() => {
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    }, [pickup, dropoff])

    return (
        <Wrapper>
            <Map 
            pickupCoordinates={pickupCoordinates}
            dropoffCoordinates={dropoffCoordinates}
            />
            <RideContainer>
                <RideSelector/>
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm UberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const Wrapper = tw.div`
flex h-screen flex-col
`
const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const ConfirmButtonContainer = tw.div`
border-t-2
` 