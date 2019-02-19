import React, {Component} from 'react';


const URL = 'https://ag3mez6h5c.execute-api.us-west-2.amazonaws.com/prod';

export default class ModalContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            phone: null,
            message: null
        }
    }

    handleName(e) {
        this.setState({name: e.target.value})
    };


    handleMessage(e) {
        this.setState({message: e.target.value})
    };

    handlePhone(e) {
        this.setState({phone: e.target.value})
    };

    addEvent() {

        if ([this.state.name,
            this.state.message,
            this.state.phone
        ].every((item) => {
            return !!item;
        })) { //If all are not null

            let data = {
                name: this.state.name,
                message: this.state.message,
                phone: this.state.phone
            };

            let headers = {
                "Content-Type": 'application/json',
            };

            fetch(URL, {
                method: "post",
                body: JSON.stringify(data),
                headers: headers
            }).then(
                function (response) {
                    if (response.status !== 200) {
                        console.log('ERROR, Status Code: ' +
                            response.status);
                        return;
                    }

                    // Examine the text in the response
                    response.json().then(function (data) {
                        document.getElementById('modalUserMessage').innerHTML = '<div class="alert alert-success" role="alert">Thanks for getting in touch. We will get back to you ASAP!</div>';
                    });
                }
            )
                .catch(function (err) {
                    console.log('Fetch Error', err);
                });
        } else {
            //Display error message
         
             document.getElementById('modalUserMessage').innerHTML = '<div class="alert alert-danger" role="alert">Fill in all required fields</div>';
        }
    };

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="inputName">Name<span>*</span></label>
                    <br />
                    <input type="text" placeholder={"Full Name"} className="form-control" id="inputName" aria-describedby="inputName" onChange={(event) => this.handleName(event)}/>
                    
                  
                    <br />
                    <label htmlFor="inputPhone">Phone<span>*</span></label>
                    <input type="tel" className="form-control" id="inputPhone" placeholder={"Phone"} onChange={(event) => this.handlePhone(event)}/>
                    <br />
                    <label htmlFor="inputMessage">Message<span>*</span></label>
                    <textarea  rows="3" type="message" className="form-control" id="inputMessage" placeholder={"Message"} onChange={(event) => this.handleMessage(event)}/>
                    
             <br />
                    <button class="btn btn-primary" onClick={() => this.addEvent()}>Send Message</button>
                </div>
            </div>
        )
    }

}
