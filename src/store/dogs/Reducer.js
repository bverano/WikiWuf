import {
    SET_BREED,
    GET_PHOTOS,
    GET_PHOTOS_SUCCESS,
    GET_PHOTOS_ERROR
} from './Types'

const Reducer = (state, action) => {

    switch(action.type) {
        case SET_BREED:
            return {
                ...state,
                breed: action.payload.breed,
                subbreed: action.payload.subbreed
            }
        case GET_PHOTOS:
            return {
                ...state,
                loading: true
            }
        case GET_PHOTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                message: '',
                images: action.payload
            }
        case GET_PHOTOS_ERROR:
            return {
                ...state,
                loading: false,
                error: true,
                message: 'Ocurrió un error. Inténtalo de nuevo.',
                images: []
            }
        default:
            return state
    }
}

export default Reducer