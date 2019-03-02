import React from 'react';

class Filters extends React.Component{
render(){
    return(
        <div>
            <form>
                <input type="text" placeholder="Search..."/>
                <p>
                <input type="checkbox"/>Only show stock products
                </p>
            </form>
        </div>
    );
}
}
export default Filters;