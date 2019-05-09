import React from 'react'

const Btn = ({ pending, children, onClick }) => (
    <button
       onClick={onClick}
       disabled={pending}
       className='botao-filtro'
    >
      {children}
    </button>
)

export default Btn
