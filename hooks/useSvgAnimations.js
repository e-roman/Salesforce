// hooks/useSvgAnimations.js
import { useEffect } from 'react';

export const useSvgAnimations = () => {
  useEffect(() => {
    const cloud1Code = `<svg className="dot_top1_svg-1 item-active" width="159" height="38" viewBox="0 0 159 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M156.62 36.8731L1.0275 36.2202C0.797586 33.9882 2.03147 32.2876 3.8938 31.0122C5.75613 29.7368 8.01698 29.1826 10.2242 28.7043C17.0221 27.2239 24.8316 26.4419 30.3189 30.6857C28.7172 24.9311 33.1852 18.3035 39.1631 17.5519C38.3813 13.3688 40.6192 8.81375 44.4128 6.83228C46.2522 5.87571 49.3944 6.27048 49.2947 8.32027C57.7557 1.00177 70.3245 -0.729161 81.0079 2.67956C91.6991 6.08828 100.497 14.1432 106.168 23.7468C106.851 24.9008 107.801 26.2521 109.142 26.1155C109.732 26.0547 110.238 25.7055 110.736 25.3867C119.381 19.708 130.601 19.131 140.748 21.2643C148.335 22.8586 156.651 27.0493 157.969 34.6183C158.153 35.6812 157.501 37.4956 156.612 36.8731H156.62Z" stroke="white" strokeMiterlimit="10"/>`;

    const setInnerHTML = (id, svgCode) => {
      const container = document.getElementById(id);
      if (container) container.innerHTML = svgCode;
    };

    setInnerHTML('cloud1', cloud1Code);
  }, []);
};
