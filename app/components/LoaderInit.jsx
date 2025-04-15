'use client';

import "../../styles/preloader.css";
import { useEffect } from 'react';
import { initPreloader } from '@/utils/initPreloader.js';

export function LoaderInit() {
  return (
    <>
      <div id="page-transition">
        <div className="ptr-overlay"></div>
            <div className="ptr-preloader">
                <div className="loader__wrap">
                    <div className="loader__logo"><img src="https://d2llx07cilb2cs.cloudfront.net/assets/logo-light.svg" alt="Cresci's"/></div>
                </div>
            </div>
      </div>
    </>
  );
}