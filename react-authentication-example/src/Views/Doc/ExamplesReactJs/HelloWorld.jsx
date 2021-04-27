import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Hello World!</h1>
                <a href="https://www.youtube.com/watch?v=9hb_0TZ_MVI&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=2" target="_black">Link tham khảo</a>
            </div>
        )
    }

}

export { HelloWorld };