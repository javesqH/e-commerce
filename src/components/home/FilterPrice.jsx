import React from 'react'

const FilterPrice = ({setInputPrice}) => {


    const handleSubmit = e => {
         e.preventDefault()
         const inputFrom = +e.target.from.value
         const inputTo = +e.target.to.value
         if(inputFrom && inputTo){
              setInputPrice({
                from: inputFrom,
                to: inputTo
              })
         } else if (!inputFrom && inputTo) {
             setInputPrice({
                from:0,
                to: inputTo
             })
         } else if (inputFrom && !inputTo) {
            setInputPrice({
               from:inputFrom,
               to: Infinity
    })
} else {
    setInputPrice({
        from: 0,
        to: Infinity
    })
}
    }
    return (
        <section>
            <form className='form-price' onSubmit={handleSubmit}>
                <div className='div-from'>
                    <label htmlFor="from">From</label>
                    <input type="number" id='from' />
                </div>
                <div className='div-to'>
                    <label htmlFor="to">To</label>
                    <input type="number" id='to' />
                </div>
                <button>Apply</button>
            </form>
        </section>
    )
}

export default FilterPrice