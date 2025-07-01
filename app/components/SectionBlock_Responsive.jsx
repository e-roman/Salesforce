// app/page.js
'use client';

import { useEffect } from 'react';

import "../../styles/block-text-mobile.css";

export function SectionBlockMobile() {
  return (
    <>
        <section className="project--intro-mobile">

            <div className="logo-salesforce"><img src="content/hero/logo-salesforce.svg" width="100%"/></div>

            <h2 className="intro__title-mobile">
                Art is not<br/>
                responsive, not<br/>
                all that shit is to<br/>
                see in mobile.</h2>
            <div className='block-textIntro'>
              <p>This is not Instagram.</p>
            </div>
        </section>
    </>
  );
}




