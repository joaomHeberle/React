import React from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import "./styles.css"
const Carousel =(props)=> {
  
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active")
      })
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active")
  
      props.get(slider.slides[idx].attributes.value.nodeValue)
  
    }

    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current) mainRef.current.moveToIdx(idx)
        })
      })
    }

    slider.on("created", () => {
      if (!mainRef.current) return
      addActive(slider.track.details.rel)
      addClickEvents()
      mainRef.current.on("animationStarted", (main) => {
        removeActive()
        const next = main.animator.targetIdx || 0
        addActive(main.track.absToRel(next))
        slider.moveToIdx(next)
      })
    })
  }
}


  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
  })
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 4,
        spacing: 10,
      },
    },
    [ThumbnailPlugin(instanceRef)]
  )

  return (
    <>
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1"></div>
        <div className="keen-slider__slide number-slide2"></div>
        <div className="keen-slider__slide number-slide3"></div>
        <div className="keen-slider__slide number-slide4"></div>
        <div className="keen-slider__slide number-slide5"></div>
        <div className="keen-slider__slide number-slide6"></div>
      </div>

      <div ref={thumbnailRef} className="keen-slider thumbnail">
        <div value="1" className="keen-slider__slide number-slide1"></div>
        <div value="2" className="keen-slider__slide number-slide2"></div>
        <div value="3" className="keen-slider__slide number-slide3"></div>
        <div value="4" className="keen-slider__slide number-slide4"></div>
        <div value="5" className="keen-slider__slide number-slide5"></div>
        <div value="6" className="keen-slider__slide number-slide6"></div>
      </div>
    </>
  )
}
export default Carousel;