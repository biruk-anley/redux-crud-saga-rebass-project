// @flow

import React from 'react'
import { Route, Switch, Redirect, Link } from 'react-router-dom'
import PostsPage from './posts/PostsPage'
import { Box, Card, Image, Heading, Text,Flex } from "rebass";
import NewPostPage from './posts/NewPostPage'
import EditPostPage from './posts/EditPostPage'
import PostPage from './posts/PostPage'

type Props = {
  match: {
    url: string
  }
}

export default function AdminPage({ match: { url } }: Props) {
  
  return (
    <Box width={10}>
      <Flex
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
        <Heading color="white">
          <Link to="/admin" className="header__brand">
            Post your Blog
          </Link>
        </Heading>
      </Flex>
      <div className="container">
        <Switch>
          <Route
            exact
            path={`${url}`}
            render={() => <Redirect to={`${url}/posts`} />}
          />
          <Route exact path={`${url}/posts`} component={PostsPage} />
          <Route exact path={`${url}/posts/new`} component={NewPostPage} />
          <Route exact path={`${url}/posts/:id`} component={PostPage} />
          <Route
            exact
            path={`${url}/posts/:id/edit`}
            component={EditPostPage}
          />
          <Redirect to="/error" />
        </Switch>
      </div>
    </Box>
  );
}
