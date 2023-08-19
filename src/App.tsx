import React, { useEffect, useRef } from 'react'
 function App() {
  const ref = useRef<HTMLInputElement>(null);
 
 // Maybe the React developers should name it:
 // afterRender, instead of useEffect.
  useEffect(() => {
    if ( ref.current) ref.current.focus();
  });
  
  useEffect(() => {
    document.title = 'My App';
  })
  return (
    <div>
      <input ref={ref} type="text" className='form-control' />
    </div>
  )
}
export default App;

