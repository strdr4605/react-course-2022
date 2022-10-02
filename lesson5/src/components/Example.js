import React, { useState, useEffect } from 'react';

export default function Example() {
  const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(()=> alert('HEllo'), 2000);


//   }, []);

    useEffect(() => {
        console.log('rerender')
    })

    useEffect(() => {
        console.log('on count change', count);

        if (count > 3) {
            alert('Too much ' + count);
            setCount(0);
        }
    }, [count]);

    useEffect(() => {
        console.log('on mount', count);
    }, []);

//   console.log('rerender');

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
