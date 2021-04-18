import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class WhatWeDo extends Component {

  render(){
    return(
      <div className='whatWeDo'>
        <h1 className='whatWeDoTitle'>What We Do</h1>
        <div className='filler' >
          <div className='whatWeDoImage'>
            <img alt='A Product' src='https://previews.dropbox.com/p/thumb/ABIdOG5sEfEilBYLtXzpMBSHseRL33kEiYhVLaEh9WJvXx1s6JhNpPyvoJX0_NpPGHo2xPRqZ4nbwMeeeRnnI3RG8NIgE4018BXDo9Gq1VpH-qdI7DP2EaF621Qb_VKCUbnG2AU6Z59eR7HXqLIWh_ZCa_TscTLv3yYz3yJ2eh1DTactmsjgpz7oyBIyCI3WoXm44ARj_Nwi_eDR0-YMM-iMh5gvWleJGUD1PAtI9QVIx3T5_zcpmcP05pF58BNYLWC2Bw6ajhT157eyWLj04fC4duHokZCJkMA1fe7DguMzo5lWoeWt9Kpw2jujB4p7PKNaIOjtwV7WNwwK_aa4wrMp_KWjvKYziCjfQdfc92yH4A/p.jpeg?fv_content=true&size_mode=5' className='homeImage'/>
            <Link to='all-products' >
             <button>Shop all products Here</button>
            </Link>
          </div>
          <div className='whatWeDoText'>
            <h3>
              what we do speach
            </h3>
          </div>
        </div>
      </div>
    )
  }
}
export default WhatWeDo;