import React, { useState } from 'react'

export default function ComponenteReact() {
    const [cliente, setCliente] = useState('luis')
    console.log("cliente: ", cliente);
    return (
        <div>
            ComponenteReact {cliente}
        </div>
    )
}
