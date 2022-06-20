import '../css/slideCard.css'
import React, { useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Left from '@mui/icons-material/ChevronLeft'
import Right from '@mui/icons-material/ChevronRight'

function SlideCard(){
  const images = [useRef(),useRef()];
  const prev = useRef();
  const next = useRef();
  const w = window.innerWidth
  let visible = 0;

  images.forEach((item, i) => {
    if(i==0){
      return
    }
    anime({
      targets:item,
      left:`${w}px`,
      easing:'easeInOutExpo',
      duration:1000
    })
  })

  function clickPrev(){
    if(visible==0){
      return;
    }
    visible--;
    images[visible].current.classList.add('active');
    anime({
      targets: `.con-img-${visible+1}`,
      left: `${w}px`,
      easeing: 'easeInOutExpo',
      duration: 1000
    })
    anime({
      targets: `.con-img-${visible}`,
      left: '0px',
      easeing: 'easeInOutExpo',
      duration: 1000
    })
  }
  
  function clickNext(){
    if(visible +1== images.length){
      return;
    }
    visible++;
    images[visible].current.classList.add('active');
    anime({
      targets: `.con-img-${visible-1}`,
      left: `-${w}px`,
      easeing: 'easeInOutExpo',
      duration: 1000
    })
    anime({
      targets: `.con-img-${visible}`,
      left: '0px',
      easeing: 'easeInOutExpo',
      duration: 1000
    })
  }

  return (
    <div className="con-slide">
      <div className='con-images'>
        <div className='con-img active con-img-0' ref={images[0]}>
          <div className='con-text'>
            <h3>City</h3>
          </div>
        </div>
        <div className='con-img active con-img-1' ref={images[1]}>
          <div className='con-text'>
            <h3>Beach</h3>
          </div>
        </div>
        
      </div>
      <button className='prev btn' ref={prev} onClick={clickPrev}>
        <Left/>
        <i className='bx bxs-chevron-left'></i>
      </button>
      <button className='next btn' ref={next} onClick={clickNext}>
        <Right/>
        <i className='bx bxs-chevron-right'></i>
      </button>
    </div>
  )

}

export default SlideCard;