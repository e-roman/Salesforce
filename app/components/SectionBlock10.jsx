'use client';

import { useEffect } from 'react';

export function SectionBlock10() {
  return (
    <>
      <section className="project project--details project--right">
        <span className="project__label project__label--default">Moving forward</span>
        <p>
          As we conclude this transformative project, we are left with profound questions that continue to shape our understanding of AI-generated art and its place in the artistic landscape. How do we reconcile the precision of algorithms with the intangible spark of human creativity? Can machines truly grasp the depth of emotion and meaning that art evokes within us? And as AI continues to advance, how do we preserve the authenticity and soul that define artistic expression?
        </p>
      </section>
      <section className="project project--details project--left">
        <span className="project__label project__label--default">Photo credits</span>
        <p>
          All images except one were generated with <a href="https://midjourney.com">Midjourney</a>. The only "real" image was taken by <a href="https://unsplash.com/@karsten116">Karsten Winegeart</a>. <strong>Can you spot which one?</strong> Hint: it's one of the portraits in the last image grid. Let us know via <a href="https://twitter.com/intent/tweet?text=@codrops">@codrops</a>.
        </p>
      </section>
      <div className="gallery-wrap">
        <div
          className="gallery gallery--one"
          id="gallery-9"
        >
          <div
            className="gallery__item"
            style={{ backgroundImage: 'url(img/70.jpg)' }}
          ></div>
          <div className="caption">Made by @codrops</div>
        </div>
      </div>
      <section className="project project--details project--left">
        <p>
          Like AI-generated art? Get a <a href="https://tympanus.net/codrops/2023/06/12/free-ai-generated-images-vol-1/">free AI Art collection</a> plus prompts to get inspired.
        </p>
      </section>
    </>
  );
}