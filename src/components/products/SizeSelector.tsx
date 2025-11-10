import React from 'react'
import type { Size } from '@/interfaces'
import clsx from 'clsx'

interface Props {
    selectedSize: Size
    availableSize: Size[]
}

export const SizeSelector = ({ availableSize, selectedSize }: Props) => {
    return (
        <div className='my-5 '>
            <h3>Tallas disponibles</h3>
            <div className=''>
                {availableSize.map(size => (
                    <button
                        key={size}
                        className={
                            clsx(
                                "mx-2 hover:underline text-lg cursor-pointer",
                                {'underline': size === selectedSize}
                            )
                        }>
                        {size}
                    </button>))}
            </div>
        </div>
    )
}
