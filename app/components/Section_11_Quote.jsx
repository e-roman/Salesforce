// app/page.js
'use client';

import { useEffect } from 'react';

import "../../styles/quoteSection.css";

export function SectionBlockQuote() {
  return (
    <>
        <section id="quoteSection">
            <div className="section-inner">
                <div className='content-quote'>
                    <div id="text-out">
                        <h4 className="title-section font-h4 anim-zoom-text">Step into the future we craft together,<br/>forging profound connections that<br/>propel us beyond expectations.</h4>
                    </div>
                    <div className="logo-salesforce padding-top-100"><img src="content/hero/logo-salesforce.svg" width="100%" className="img-zoom"/></div>
                </div>
            </div>
        </section>
    </>
  );
}




