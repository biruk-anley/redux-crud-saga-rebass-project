// @flow

import React from 'react'

import type { Posts } from '../../types/posts'
import { Box, Card, Image, Heading, Text, Flex, Button,variant } from "rebass";

type Props = {
  loading: boolean,
  posts: Posts,
  onNewPost: () => void,
  onReloadPosts: () => void
}

export default function PostsHeading({
  loading,
  posts,
  onNewPost,
  onReloadPosts
}: Props) {
  return (
    <div>
      <Flex
        px={2}
        color="black"
        bg="white
        "
        alignItems="center"
        width={1000}
        justifySelf="center"
        mx={7}
        sx={{
          p: 3,
          marginLeft: 5,
          marginTop: 2,
          marginBottom: 4,

          borderRadius: 10,
          boxShadow: "0 0 10px rgba(0, 0, 0, .25)",
        }}
      >
        <Text p={2} fontWeight="bold">
          Posts
        </Text>
        <Box mx="auto" />
        <Button
          variant="outlined"
          sx={{
            color: "white",
            backgroundColor: "blue",
            marginRight:1,
            cursor:'pointer'
          }}
          onClick={onNewPost}
          disabled={loading}
          
        >
          New Post
        </Button>
       
        
      </Flex>
    
    </div>
  );
}
