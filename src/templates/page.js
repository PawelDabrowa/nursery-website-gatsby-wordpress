import React, {Component} from "react"

class PageTemplate extends Component {
    render() {

        const currentPage = this.props.data.wordpressPage

        console.log(currentPage)

        return (
            <div>
                <h1 dangerouslySetInnerHTML={{__html: currentPage.title}}/>
                <div dangerouslySetInnerHTML={{__html: currentPage.content}}/>

                
            </div>
        )
    }
}

export default PageTemplate

export const pageQuery = graphql`
    query currentPageQuery($id: String!) {
        wordpressPage(id: { eq: $id }) {
            title
            content
        }
    }
`