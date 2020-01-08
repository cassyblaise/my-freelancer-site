import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
const AboutPage =()=>{
    return(
        <div>
          <Layout>
            <h1>Casilfy is a web developmentcompany</h1>
            <p>This is my first blog post, where am blogging about fake news about social media.</p>
            <p><Link to='/contact'>want to work with me? please contact me</Link></p>
          </Layout>
        </div>
    )
}

export default AboutPage