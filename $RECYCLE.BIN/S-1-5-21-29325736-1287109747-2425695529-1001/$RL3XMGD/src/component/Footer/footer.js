import React from 'react';
import DateTime from '../../utils/TimeandDate';
import "./footer.css"

function Footer(props) {
    return (
        <div className='footer bold-500'> 
           <div className='normal-text bold-500'>All rights reserved @ David Milan</div> 
           <DateTime/>
        </div>
    );
}

export default Footer;