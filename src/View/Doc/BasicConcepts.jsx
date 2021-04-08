import React from 'react';
import { Table } from 'react-bootstrap';

class BasicConcepts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alerts: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            thead: ['Một số khái niệm react', 'Đã tìm hiểu', 'Link', 'Note'],
            tbody: [
                { 
                    id: 1, 
                    kn: 'Prop', 
                    dth: 'Done', 
                    link:'https://viblo.asia/p/su-khac-nhau-giua-props-va-state-trong-reactjs-OeVKBvrJKkW',
                    note: 'Lưu trữ dữ liệu không thay đổi' 
                },
                { 
                    id: 2, 
                    kn: 'State', 
                    dth: 'Done', 
                    link:'https://viblo.asia/p/su-khac-nhau-giua-props-va-state-trong-reactjs-OeVKBvrJKkW',
                    note: 'Lưu trữ dữ liệu động (component sinh ra nó)' 
                },
                { 
                    id: 3, 
                    kn: 'Handler event', 
                    dth: 'Done', 
                    link:'https://viblo.asia/p/xu-ly-su-kien-event-trong-reactjs-V3m5WLGgKO7',
                    note: 'Dùng giống trong Javascript' 
                },
                { 
                    id: 4, 
                    kn: 'Component', 
                    dth: 'Done', 
                    link:'https://viblo.asia/p/reactjs-bai-2-component-props-state-07LKXYLkZV4',
                    note: 'Component cho phép chúng ta chia nhỏ các thành phần UI' 
                },
                { 
                    id: 5, 
                    kn: 'Lifecycle component', 
                    dth: 'Done', 
                    link:'https://viblo.asia/p/vong-doi-cua-component-new-Qbq5QMYX5D8',
                    note: 'Vòng đời của 1 component' 
                },
                { 
                    id: 6, 
                    kn: 'Router', 
                    dth: 'Done', 
                    link:'https://viblo.asia/p/co-ban-ve-router-trong-reactjs-07LKXzAElV4',
                    note: 'Các khái niệm cơ bản về Router' 
                },
                { 
                    id: 7, 
                    kn: 'History ', 
                    dth: 'Todo', 
                    link:'https://viblo.asia/p/co-ban-ve-history-trong-react-router-vyDZOzwPKwj',
                    note: 'Cơ bản về history trong React Router' 
                },
                { 
                    id: 8, 
                    kn: 'Css', 
                    dth: 'Todo', 
                    link:'https://viblo.asia/p/4-cach-de-style-react-components-OeVKB4w2lkW',
                    note: '4 cách để css' 
                }
            ]
        };
    }

    render() {
        const theads = this.state.thead;
        const tbodys = this.state.tbody;
        return (
            <div>
                <h2>Props</h2>
                <ul>
                    <li>Khái niệm : là 1 từ viết ngắn gọn của properties , nhưng lại là 1 khái niệm trong ReactJS. props là 1 đối tượng, nó lưu trữ các giá trị của các attribute (thuộc tính) của một thẻ (Tag).Là cách mà component có thể nhận được các giá trị của thuộc tính truyền vào từ bên ngoài vào, và là cách mà các component có thể nói chuyện với nhau.</li>
                </ul>
                <Table striped bordered hover size="sm" className="mt-5">
                    <thead>
                        <tr>
                            {
                                theads &&
                                theads.map(thead => (
                                    <th key={thead}>{thead}</th>
                                ))
                            }

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tbodys &&
                            tbodys.map(tbody => (
                                <tr key={tbody.id}>
                                    <td>{tbody.kn}</td>
                                    <td>{tbody.dth}</td>
                                    <td><a href={tbody.link} target="_blank" title={tbody.link}>Click me!</a></td>
                                    <td width="300">{tbody.note}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>

                <a href=""></a>
            </div>
        )
    }

}

export { BasicConcepts };