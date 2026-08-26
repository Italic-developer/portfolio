import {useRef ,useState, useEffect} from 'react'

function useIsVisible(options:{threshold:number}) {
    const containerRef = useRef(null)
    const [isVisible,setIsVisible]= useState(false)

    const ElementVisible =(entries: IntersectionObserverEntry[])=>{
      const [entry] = entries
      setIsVisible(entry.isIntersecting)
    }
    useEffect(()=>{
       const observer = new IntersectionObserver(ElementVisible,options)
       
       if (containerRef.current) observer.observe(containerRef.current) 
       
        return ()=>{
             if (containerRef.current) observer.unobserve(containerRef.current) 
        }
    },[containerRef,options])
  return[containerRef,isVisible]
}

export default useIsVisible
