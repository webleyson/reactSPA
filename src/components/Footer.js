
import React from 'react'

import '../styles/footerStyle.css';


const Footer = () =>{
    return(
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-xs-6">
                    Contact               
                </div>
                <div className="col-xs-6">
                    <address>
                         <h2>Address</h2>
                        <ul>
                            <li>Without Servers Limited</li>
                            <li>1st Floor</li>
                            <li>Wellington House</li>
                            <li>Wellington Street</li>
                            <li>Cardiff</li>
                            <li>CF11 9BE</li>
                            <li>
                                Telephone : +44330 1331225
                            </li>
                            <li>
                                Email : info@withoutservers.com
                            </li>
                        </ul>
                    </address>
                </div>
            </div>
        </div>
    </footer>
    )
}
export default Footer