
import React, { Component } from 'react';

import { Col, Form, Input, FormGroup, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { onOptionDataChangeAction } from  '../actions';
import { connect } from 'react-redux';


class CreateForm extends Component{

    updateInputValue(e, key) {
        console.log('->>>>>>>>>>>', e, key);
        // this.props.onOptionDataChange(e.target.value, key);
    }

    render() {
        console.log('createForm render --', this.props.rawData);
        return(
            <Form className='form'>
            <Col>
                <FormGroup>
                    <InputGroup>
                        <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                                <Input addon type="checkbox" />
                            </InputGroupText>
                        </InputGroupAddon>
                        {/* <Input placeholder="Enter option data" value = {this.props.rawData.optionValue} onChange = {(e) => this.updateInputValue(e, this.props.keyValue)}/> */}
                        <Input placeholder="Enter option data" value = {this.props.rawData.optionValue} onChange = {(e) => this.props.onOptionDataChangeAction(e, this.props.keyValue)}/>
                    </InputGroup>
                </FormGroup>
            </Col>
        </Form>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps CreateForm -> ', state);
    return {
        questionData : state.data.questionData,
        rawData: state.data.rawData
    };
}

export default connect(mapStateToProps, { onOptionDataChangeAction })(CreateForm);
// export default CreateForm;
