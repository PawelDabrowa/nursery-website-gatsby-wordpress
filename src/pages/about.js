import React, {Component} from "react"

class PageTemplate extends Component {
    render() {

        const currentPage = this.props.data.wordpressPage


        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                
            </div>
        )
    }
}

export default PageTemplate

export const pageQueryAbout = graphql`
    query PageQuery {
        wordpressPage {
        title
        content
      }
    }
`