'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Article } from '../types';

interface FeaturedSliderProps {
  articles: Article[];
}

export default function FeaturedSlider({ articles }: FeaturedSliderProps) {
  useEffect(() => {
    // Wait for flexslider to be available
    const initSlider = () => {
      if (typeof window !== 'undefined' && (window as any).$) {
        const $ = (window as any).$;
        const slider = $('#featured-post-slider');
        
        if (slider.length && typeof slider.flexslider === 'function') {
          slider.flexslider({
            namespace: "flex-",
            controlsContainer: "",
            animation: 'fade',
            controlNav: false,
            directionNav: true,
            smoothHeight: false,
            slideshowSpeed: 7000,
            animationSpeed: 600,
            randomize: false,
            touch: true,
          });
        }
      }
    };

    // Try to initialize after a short delay to ensure scripts are loaded
    const timer = setTimeout(initSlider, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="brick entry featured-grid">
      <div className="entry-content">
        <div id="featured-post-slider" className="flexslider">
          <ul className="slides">
            {articles.map((article) => (
              <li key={article.id}>
                <div className="featured-post-slide">
                  <div 
                    className="post-background" 
                    style={{ backgroundImage: `url('${article.featuredImage}')` }}
                  ></div>
                  <div className="overlay"></div>
                  <div className="post-content">
                    <ul className="entry-meta">
                      <li>{article.publishDate}</li>
                      <li><Link href="#">{article.author}</Link></li>
                    </ul>
                    <h1 className="slide-title">
                      <Link href={`/posts/${article.id}`} title="">
                        {article.title}
                      </Link>
                    </h1>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
