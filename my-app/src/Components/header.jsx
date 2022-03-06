import React from 'react'
// import {Container,Navbar} from 'react-bootstrap';
function Header() {
    return (
        <div>
            <div className=''>
                <button onClick={myfunc()} className='btn btn-warning' id="liveAlertBtn">click me</button>
                <div className='h3'>
                    {}
                </div>
            </div>
        </div>
    )
    function myfunc () {
        alert("heloo ")
    }
}

export default Header;