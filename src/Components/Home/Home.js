import React from 'react';
import WhatWeDo from './WhatWeDo';
import AboutUs from './AboutUs';
import './Home.css';

const Home = (props) => {
  // useEffect(() => {
  //   console.log('componentDidMount', props)
  // })

  
    return (
      <div className='homePage'>
        <div className='openingLogo'>
          <img className='homeImg' src='https://previews.dropbox.com/p/thumb/ABLnGftCgkdCV37kH0vS_pmM5_9mX-n9w2iyEYiqvWuekCELhP5BFA7p3wBYp3YWeh0YX_d64sEmn8WMt9jfj4smwtF1SqWmbzJM6woeGRihMdTELFI0Mnve0gAkzuXSxN_UK5ItHf5GUWMGmj-c1xepfTXuCqz-HCEAPM__LqqWuZH_enveXhpQhUkDDDEJdMP9YFjhy2kMJFiZiiNQ6OfqJ1HXU2Ylq1vVSDZ2aBZfMRxoRyhsb7P2HXVJL1uuE8GzIW3YRS8oCBO6fThiTfePJ__mNgwIzqsNJywwq3g2joBYjzVhBDu0OT73_rJzfkDpsizozyYXtBhviZmHrRIdurXzdvgviFAdGwMb7KFxNQ/p.jpeg?fv_content=true&size_mode=5' alt='Product'/>
          <h1>
            LOVE YOUR SHELF
          </h1>           
        </div>
        <WhatWeDo />
        <AboutUs />
      </div>
    )
  
};

export default Home;