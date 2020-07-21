import React, {Component} from "react"
import SEO from "../components/seo"


class IndexPage extends Component {
    render() {

        const currentPage = this.props.data.wordpressWpHomePage


        return (
            <div>
               <SEO title="Home" />
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
 
                <h1 dangerouslySetInnerHTML={{__html: currentPage.acf.who_we_are}}/>
              

                
            </div>
        )
    }
}

export default IndexPage
export const query = graphql`
{
  wordpressWpHomePage {
      title
      slug
      id
      acf {
      who_we_are
    }
  }
}
`;