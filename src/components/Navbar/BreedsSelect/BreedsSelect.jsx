import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'

import DogsContext from '../../../store/dogs/Context'

import './BreedsSelect.css'

const BreedsSelect = () => {

    const dogsContext = useContext(DogsContext)
    const { setBreed } = dogsContext

    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const [breeds, setBreeds] = useState([])

    useEffect(() => {
        const getBreeds = async () => {
            const response = await axios.get('https://dog.ceo/api/breeds/list/all')
            const apiBreeds = response.data.message
            let breedList = []
            for(let breed in apiBreeds) {
                if(apiBreeds[breed].length) {
                    apiBreeds[breed].forEach(subbreed => {
                        let name = `${capitalize(subbreed)} ${capitalize(breed)}`
                        breedList.push(name)
                    })
                } else {
                    breedList.push(capitalize(breed))
                }
            }
            setBreeds(breedList)
            setBreed(breedList[0])
        }
        getBreeds()
        //eslint-disable-next-line
    }, [])

    return (
        <select className="breeds-select" onChange={(e) => setBreed(e.target.value) }>
            {
                breeds.map(breed => {
                    return (
                        <option 
                            key={breed} 
                            value={breed}
                        >{breed}</option>
                    )
                })
            }
        </select>
    );
}
 
export default BreedsSelect;