import React from 'react';
import { Helmet } from "react-helmet";
import { DataGrid, GridColumn, ComboBox, Label } from 'rc-easyui';
import { Row, Col } from 'react-bootstrap';

class EasyUi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0,
            pageSize: 20,
            data: this.getData(10000),
            pagePosition: "bottom",
            pageOptions: {
                layout: ['list', 'sep', 'first', 'prev', 'next', 'last', 'sep', 'refresh', 'sep', 'manual', 'info']
            },
            options: [
                { value: "bottom", text: "Bottom" },
                { value: "top", text: "Top" },
                { value: "both", text: "Both" }
            ]
        }
    }

    getData(total) {
        let data = [];
        for (let i = 1; i <= total; i++) {
            let amount = Math.floor(Math.random() * total);
            let price = Math.floor(Math.random() * total);
            data.push({
                inv: "Inv No " + i,
                name: "Name " + i,
                amount: amount,
                price: price,
                cost: amount * price,
                note: "Note " + i
            });
        }
        return data;
    }

    render() {
        return (
            <Row>
                <Helmet>
                    <title>Easy Ui</title>
                </Helmet>
                <Col>
                    <h2>Pagination Layout</h2>
                    <div style={{ marginBottom: 10 }}>
                        <Label htmlFor="c1">Pager on: </Label>
                        <ComboBox inputId="c1" style={{ width: 120 }}
                            data={this.state.options}
                            editable={false}
                            panelStyle={{ height: 'auto' }}
                            value={this.state.pagePosition}
                            onChange={(value) => this.setState({ pagePosition: value })}
                        />
                    </div>
                    <DataGrid
                        style={{ height: 600, width: '100%' }}
                        pagination
                        {...this.state}
                    >
                        <GridColumn field="inv" title="Inv No"></GridColumn>
                        <GridColumn field="name" title="Name"></GridColumn>
                        <GridColumn field="amount" title="Amount" align="right"></GridColumn>
                        <GridColumn field="price" title="Price" align="right"></GridColumn>
                        <GridColumn field="cost" title="Cost" align="right"></GridColumn>
                        <GridColumn field="note" title="Note"></GridColumn>
                    </DataGrid>
                </Col>
            </Row>
        );
    }
}

export { EasyUi };