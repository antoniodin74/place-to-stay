import fetchData from "./utils/fetchData"
import {v4 as uuidv4} from 'uuid';

const url = process.env.REACT_APP_SERVER_URL + '/user'

export const register = async(user, dispatch)=> {
    console.log('ciao')
    dispatch({type:'START_LOADING'})

    const result = await fetchData({url:url+'/register', body:user}, dispatch)
    if(result){
        dispatch({type:'UPDATE_USER', payload:result})
        dispatch({type:'CLOSE_LOGIN'})
        dispatch({type:'UPDATE_ALERT', payload:{open:true, severity:'success', message:'Your account has been created successfully!'}})
    }
    dispatch({type:'CLOSE_LOADING'})
}

export const login = async(user, dispatch)=> {
    dispatch({type:'START_LOADING'})

    const result = await fetchData({url:url+'/login', body:user}, dispatch)
    if(result){
        dispatch({type:'UPDATE_USER', payload:result})
        dispatch({type:'CLOSE_LOGIN'})
        dispatch({type:'UPDATE_ALERT', payload:{open:true, severity:'success', message:'Your account has been created successfully!'}})
    }
    dispatch({type:'CLOSE_LOADING'})
}

export const updateProfile = async(currentUser, updateFields, dispatch)=> {
    dispatch({ type:'START_LOADING' });

    const { name, file } = updateFields
    let body = {name}
    try {
        if(file){
            const imageName = uuidv4() + '.' + file?.name?.split('.')?.pop()
            const photoURL = await //upload to firebase
        }
    } catch (error) {
        
    }
}