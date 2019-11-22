import React, { Component } from 'react';
import { Container, Col, Form, Input, FormGroup} from 'reactstrap';

import CreateForm from './CreateForm';
import { addRawAction, deleteRawAction, onOptionDataChangeAction, onQuestionDataChangeAction } from  '../actions'; 
import './App.css';
import { connect } from 'react-redux';

// class App extends Component {

//     constructor(props) {
//         super(props);
//         // console.log('actions ', addRawAction, deleteRawAction, onOptionDataChangeAction, onQuestionDataChangeAction);
//         console.log('reducers -> props ', this.props);
//         this.state = {
//             questionData: '',
//             rawData: [
//                 { optionValue: '', isCorrect: false },
//             ],
//         }
//         this.onOptionDataChange = this.onOptionDataChange.bind(this);
//     };

//     addRaw = () => {
//         const add = {optionValue: '', isCorrect: false };
//         this.state.rawData.push(add);
//         this.setState({
//             rawData: this.state.rawData,
//         });
//     }

//     deleteRaw = (index) => {
//         this.state.rawData.splice(index, 1);
//         this.setState({
//             rawData: this.state.rawData,
//         });
//     }

//     onOptionDataChange(dataValue, index) {
//         let newData = this.state.rawData;
//         newData[index].optionValue = dataValue;
//         this.setState({
//             rawData: newData,
//         });
//     }

//     onQuestionDataChange(e) {
//       this.setState({
//         questionData: e.target.value,
//       });
//     }

//     async componentWillMount() {
//         console.log('componentWillMount ', this.props);
//     }

//     render() {
//         return (
//             <div className='mx-auto'>
//                 <Container className='Mcq'>
//                     <h5>Create a Multiple Choice Question</h5>
//                     <h6>Enter the question you want to ask audience</h6>
//                     <Form className='form'>
//                         <Col>
//                             <FormGroup>
//                                 <Input
//                                     type="text" value = {this.state.questionData} onChange = {(e) => this.onQuestionDataChange(e)} name="question" placeholder="Example: What is the capital of Uganda"
//                                 />
//                             </FormGroup>
//                         </Col>
//                     </Form>
//                     <h5>Answers</h5>
//                     <h6>Enter the answers and pick at least one correct answers</h6>

//                     {this.state.rawData.map((data, i) =>
//                         <div key={`option_${i}`} className="container no-pad" style= {{display:'flex', padding: 0}}>
//                             <div className="col-sm-11 no-pad">
//                                 <CreateForm keyValue = {i} rawData = {data} onOptionDataChange = {this.onOptionDataChange} />
//                             </div>
//                             <button className="col-sm-1 no-pad delete-button" style = {{height: '37px', outline: 'none'}} onClick={() => this.deleteRaw(i)} >
//                                 <i className="fa fa-trash" aria-hidden="true"></i>
//                             </button>
//                         </div>
//                     )}

//                     <button onClick={this.addRaw} className='add-button margin-button' style = {{ height: '37px', outline: 'none', padding: '0px 30px' }}>
//                         <i className="fa fa-plus" aria-hidden="true"></i>
//                     </button>
//                     {/* <button onClick={() => this.props.addRawAction(this.props.rawData)} className='add-button margin-button' style = {{ height: '37px', outline: 'none', padding: '0px 30px' }}>
//                         <i className="fa fa-plus" aria-hidden="true"></i>
//                     </button> */}
//                 </Container>
//             </div>
//         );
//     }
// }

// export default App;

class App extends Component {render() {
        console.log('render -> ', this.props.rawData);
        return (
            <div className='mx-auto'>
                <Container className='Mcq'>
                    <h5>Create a Multiple Choice Question</h5>
                    <h6>Enter the question you want to ask audience</h6>
                    <Form className='form'>
                        <Col>
                            <FormGroup>
                                <Input
                                    type="text" value = {this.props.questionData} onChange = {(e) => this.props.onQuestionDataChangeAction(e)} name="question" placeholder="Example: What is the capital of Uganda"
                                />
                            </FormGroup>
                        </Col>
                    </Form>
                    <h5>Answers</h5>
                    <h6>Enter the answers and pick at least one correct answers</h6>

                    {this.props.rawData.map((data, i) =>
                        <div key={`option_${i}`} className="container no-pad" style= {{display:'flex', padding: 0}}>
                            <div className="col-sm-11 no-pad">
                                <CreateForm keyValue = {i} rawData = {data} onOptionDataChange = {this.onOptionDataChange} />
                            </div>
                            <button className="col-sm-1 no-pad delete-button" style = {{height: '37px', outline: 'none'}} onClick={() => this.props.deleteRawAction(this.props.rawData, i)} >
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </button>
                        </div>
                    )}

                    <button onClick={() => this.props.addRawAction(this.props.rawData)} className='add-button margin-button' style = {{ height: '37px', outline: 'none', padding: '0px 30px' }}>
                        <i className="fa fa-plus" aria-hidden="true"></i>
                    </button>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log('mapStateToProps ', state);
    return {
        questionData : state.data.questionData,
        rawData: state.data.rawData
    };
}

export default connect(mapStateToProps, { addRawAction, deleteRawAction, onOptionDataChangeAction, onQuestionDataChangeAction })(App);

