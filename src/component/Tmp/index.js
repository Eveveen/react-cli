import { Component } from 'react';
import axios from 'axios';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8083/tmp/getCreativeSets`)
            .then((response) => {
                this.setState({ data: response.data })
            }).catch((err) => {
                console.log("err", err)
            })
    }

    render() {
        const { data } = this.state;
        return !!data ? data : 'wait'
    }
}