import React, { useReducer } from 'react'
import axios from 'axios'

import Context from './Context'
import Reducer from './Reducer'

import {
    SET_BREED,
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR
} from './Types'

const DogsState = (props) => {

    const initialSate = {
        breeds: [],
        breed: null,
        subbreed: null,
        images: [],
        loading: false,
        error: false,
        message: ''
    }

    const [state, dispatch] = useReducer(Reducer, initialSate)

    // FUNCTIONS

    const setBreed = (breed) => {
        let data = {}
        let breedArray = breed.split(' ')

        if(breedArray.length === 1) {
            data = { breed: breedArray[0].toLowerCase(), subbreed: null }
        } else {
            data = { breed: breedArray[0].toLowerCase(), subbreed: breedArray[1].toLowerCase()  }
        }

        dispatch({
            type: SET_BREED,
            payload: data
        })
    }

    const getImages = async (breed, subbreed=null) => {

        dispatch({ type: GET_PHOTOS })

        let url = ''
        if(subbreed === null) {
            url = `https://dog.ceo/api/breed/${breed}/images/random/30`
        } else {
            url = `https://dog.ceo/api/breed/${subbreed}/${breed}/images/random/60`
        }
        const response = await axios.get(url)
        if(response.data.status === 'success') {
            dispatch({ type: GET_PHOTOS_SUCCESS, payload: response.data.message })
        } else {
            dispatch({ type: GET_PHOTOS_ERROR })
        }
    }

    return (
        <Context.Provider
            value={{
                breed: state.breed,
                subbreed: state.subbreed,
                images: state.images,
                loading: state.loading,
                setBreed,
                getImages
            }}
        >
            {props.children}
        </Context.Provider>
    );
}
 
export default DogsState;