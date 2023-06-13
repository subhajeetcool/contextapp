import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'

const url = 'https://jsonplaceholder.typicode.com'

function usePostApi() {
    const [post, setPost] = useState([])

    const getPosts = useCallback(() => {
        const readPosts = async () => {
            const res = await axios.get(`${url}/posts`)
            setPost(res.data)
        }
        readPosts()
    }, [])
    
    useEffect(() => {
        getPosts()
    }, [])

    return {
        posts: [post, setPost]
    }
}

export default usePostApi
