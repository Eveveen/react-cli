import React, { Component } from 'react';
import axios from 'axios';
import Style from './index.module.sass';

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    componentDidMount() {
        axios.get(`http://localhost:8080/tmp/getCreativeSets`)
            .then((response) => {
                this.setState({ data: response.data })
            }).catch((err) => {
                console.log("err", err)
            })
    }

    render() {
        const { data } = this.state;
        return <div className={Style.root}>
            {!!data ? data : 'wait'}
        </div>
    }
}