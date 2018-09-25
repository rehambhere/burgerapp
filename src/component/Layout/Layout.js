import React,{Fragment} from 'react';

const Layout =(props)=>{
    return <Fragment>
        <nav>home,side</nav>
        <main>{props.children}</main>
    </Fragment>
}

export default Layout;