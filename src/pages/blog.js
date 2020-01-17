import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from "../components/layout"

import Head from "../components/head";
import blogStyles from './blog.module.scss'

const BlogPage =()=> {

    const data = useStaticQuery(graphql`
      query {
          allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
            edges {
              node {
                title
                slug
                publishedDate(formatString: "MMMM Do, YYYY")
              }
            }
          }
      }
    `)

return (
  <div>
    <Layout>
    <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.post}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.posts}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>{edge.node.title}</h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  </div>
)
}

export default BlogPage;