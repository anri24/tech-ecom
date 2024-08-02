import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import axiosClient from "../axios-client";

const StateContext = createContext({
    user: {},
    token: null,
    categories: null,
    selectedCategories: null,
    selectedSubCategories: null,
    productLimited: [],
    setUser: () => {},
    setToken: () => {},
    getCategories: () => {},
    setSelectedCategories: () => {},
    getSubCategories: () => {},
    setSelectedSubCategories: () => {},
    googleAuth: () => {},
    getLimitedProducts: () => {},
    setProductLimited: () => {},
    
})

export const ContextProvider = ({children}) => {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem("TOKEN"));
    const [categories, setCategories] = useState([]);
    const [selectedCategories, setSelectedCategories] = useState(null);
    const [subCategories, setSubCategories] = useState([]);
    const [selectedSubCategories, setSelectedSubCategories] = useState(null);
    const [productLimited, setProductLimited] = useState([]);




    function setToken(token){
        _setToken(token)
        if(token){
            localStorage.setItem("TOKEN", token);
        } else {
            localStorage.removeItem("TOKEN")
        }
    }

    function getCategories(){
        axiosClient.get('/category/all')
        .then(({data}) => {
            setCategories(data.data)
        })
    }

    function getSubCategories(){
        if(selectedCategories){
            axiosClient.get(`/category/${selectedCategories}`)
            .then(({data}) => {
                setSubCategories(data.data.children);
            })
        }
    }

    function getLimitedProducts(){
        axiosClient.get('product/limited')
        .then(({data}) => {
            setProductLimited(data);
        });
    }

    function googleAuth(data){   
        axiosClient.post('/google-auth', data)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        });
    }
        
    return (
        <StateContext.Provider value={{
            user,
            token,
            categories,
            selectedCategories,
            subCategories,
            selectedSubCategories,
            productLimited,
            setUser,
            setToken,
            setSelectedCategories,
            getCategories,
            getSubCategories,
            setSelectedSubCategories,
            googleAuth,
            getLimitedProducts,
            setProductLimited,
            
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);