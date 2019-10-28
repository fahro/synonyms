import React, {Component} from 'react'
import {Container} from 'reactstrap'
import Header from './Header'
import Footer from './Footer'

class Layout extends Component {

    render() {
        return(
            <div>
                <Header />
                    <Container fluid>
                        { this.props.children }
                    </Container>
                <Footer />
            </div>
        )
    }

}

export default Layout