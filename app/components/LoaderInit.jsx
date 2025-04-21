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
                    <div className="logo-salesforce"><img src="content/hero/logo-salesforce.svg" width="100%"/></div>
                </div>
            </div>
      </div>
    </>
  );
}