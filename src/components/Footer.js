
import React from 'react'

import '../styles/footerStyle.css';
import apnLogo from '../assets/apn-standard.png';

const Footer = () =>{
    return(
  
    <footer >
    <div className="hidden-lg d-sm-none">
      <div className="container">
                 <div className="footerHalf pull-left">
                    <a class="btn btn-orange btn-lg w-100" href="tel:+44330 1331225">Call Us <i class="fas fa-phone"></i></a>
                </div>
                <div className="footerHalf pull-right">
                 <email><a class="btn btn-orange btn-lg w-100" href="mailto:info@withoutservers.com">Email Us <i class="fas fa-envelope"></i></a></email>
        </div>
      </div>
    </div>  

    <div className="d-none d-sm-block container">
      <div className="container">
            <div className="row">
                 <div className="col-sm-4">
                 <img className="footerAWSImg" src={apnLogo} />
                </div>
                <div className="col-sm-4 text-center">
                   {/* <span class="fa-stack fa-2x">
                      <i class="fas fa-square fa-stack-2x"></i>
                      <i class="fab fa-facebook fa-stack-1x fa-inverse  text-dark"></i>
                    </span>
                     <span class="fa-stack fa-2x">
                      <i class="fas fa-square fa-stack-2x"></i>
                      <i class="fab fa-twitter fa-stack-1x fa-inverse text-dark"></i>
                    </span>*/}

                    <p>Telephone :  <a  href="tel:+44330 1331225">+44330 1331225</a></p>

                    <p>Email: <email><a href="mailto:info@withoutservers.com">info@withoutservers.com</a></email></p>


                   
                </div>

                <div className="col-sm-4">
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
    </div>
        
    </footer>
    )
}
export default Footer