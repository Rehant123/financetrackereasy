import React from 'react'

export function useGetuserdata() {
    const { userID,name,profilePhoto,isAuth} = JSON.parse(localStorage.getItem("auth"))||{};
    
    return {userID,name,profilePhoto,isAuth}

}
