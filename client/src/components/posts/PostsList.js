// @flow

import React from 'react'
import { Link } from 'react-router-dom'

import type { Posts } from '../../types/posts'
import { Box, Card, Image, Heading, Text, Flex, Button,variant } from "rebass";

type Props = {
  loading: boolean,
  posts: Posts,
  url: string,
  onEditPost: (id: number) => void,
  onDeletePost: (id: number) => void
}

export default function PostsList(props: Props) {
  const { loading, posts, url, onEditPost, onDeletePost } = props

  if (loading) return <p>Loading...</p>
  if (posts.length === 0) return <div>No posts.</div>

  return (
    <Card
      px={5}
      color="white"
      bg="white"
      alignItems="center"
      width={1100}
      justifyContent="center"
      sx={{
        p: 2,
        marginLeft: 7,
        marginTop: 2,
        marginBottom: 2,

        borderRadius: 10,
        boxShadow: "0 0 16px rgba(0, 0, 0, .25)",
      }}
    >
      <ul className="posts">
        {posts.map((post) => (
          <li className="posts__item" key={post.id}>
            <Link className="posts__title" to={`${url}/${post.id}`}>
              <Heading>{post.title}</Heading>
            </Link>

            <button
              className="btn posts__btn"
              onClick={() => onEditPost(post.id)}
              title="Edit"
            >
              <i className="fa fa-pencil-square-o" />
            </button>
            <button
              className="btn posts__btn"
              onClick={() => onDeletePost(post.id)}
              title="Delete"
            >
              <i className="fa fa-trash-o" />
            </button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
