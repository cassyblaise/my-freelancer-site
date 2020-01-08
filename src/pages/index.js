import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage =()=>{
    return(
        <Layout>
            <h1>Hello, world</h1>
            <h2>Welcome to caslify creative studio</h2>
            <p>If you need a devloper, <Link to='/contact'>Contact me.</Link></p>
        </Layout>
    )
}

export default IndexPage