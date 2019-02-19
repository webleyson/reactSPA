
import React from 'react'

import '../styles/footerStyle.css';


const Footer = () =>{
    return(
    <footer>
        <div className="container">
            <div className="row">

                <div className="col-sm-6">
                <span class="fa-stack fa-2x">
                  <i class="fas fa-square fa-stack-2x"></i>
                  <i class="fab fa-facebook fa-stack-1x fa-inverse  text-dark"></i>
                </span>
                 <span class="fa-stack fa-2x">
                  <i class="fas fa-square fa-stack-2x"></i>
                  <i class="fab fa-twitter fa-stack-1x fa-inverse text-dark"></i>
                </span>
                </div>
                <div className="col-sm-6">
                    <address class="text-right">
                       
                            Without Servers<br />
                            1st Floor <br />
                            Wellington House<br />
                            Wellington Street<br />
                            Cardiff<br />
                            CF11 9BE
                              
                       
                    </address>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12 text-center">
                Without Servers Ltd are registered in England and Wales. No 10981878.
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer