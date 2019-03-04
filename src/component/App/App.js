import React, { Component } from 'react';
import intl from 'react-intl-universal';
import './App.css';
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './overwrite-liveramp.sass';
// import './overwrite-antd.sass';

import Portal from '../../common/Portal';

// locale data
const locales = {
    "en-US": require('../../locale/en-US.json'),
    "zh-CN": require('../../locale/zh-CN.json'),
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { initDone: false };
    }

    componentDidMount() {
        var locale = (navigator.language || navigator.browserLanguage);
        let language = locale.indexOf('zh') >= 0 ? `zh-CN` : "en-US";

        if (!locales[language]) { //if language file not existed
            language = "en-US";
        }
        this.loadLocales(language);
    }

    loadLocales(locale) {
        /**
         * init method will load CLDR locale data according to currentLocale,
         * react-intl-universal is singleton, so you should init it only once in your app
         */
        intl.init({
            currentLocale: locale,
            locales,
        }).then(() => {
            this.setState({ initDone: true });
        });
    }

    render() {
        return (
            this.state.initDone && (
                <div className="App">
                    <Portal />
                </div>
            )
        );
    }
}

export default App;