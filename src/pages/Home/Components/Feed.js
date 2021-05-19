import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import PostCard from '../../../components/PostCard'

const useStyle = makeStyles((theme) => ({
    root: {

    }
}))

const posts = [
    {
        id: 1,
        author: {
            id: 1,
            name: "Miguel S. Ribeiro",
            username: "MDMago",
            avatar: "/images/avatars/miguel.png"
        },
        title: "Criando um app do zero utilizando React.js",
        date: "May 12, 2021",
        description: "Fala pessoal! Qual o framework favorito de vocês?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "http://via.placeholder.com/150"
    },
    {
        id: 2,
        author: {
            id: 2,
            name: "Ze piqueno",
            username: "MDMago",
            avatar: "/images/avatars/miguel.png"
        },
        title: "Criando um app do zero utilizando React.js",
        date: "May 12, 2021",
        description: "Fala pessoal! Qual o framework favorito de vocês?",
        hashtags: "#dotnet, #javascript, #reactjs, #developer",
        image: "http://via.placeholder.com/150"
    }
]

function Feed()
{
    const classes = useStyle()

    return (
        <div className={classes.root}>
            {
                posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))
            }
        </div>
    )
}

export default Feed