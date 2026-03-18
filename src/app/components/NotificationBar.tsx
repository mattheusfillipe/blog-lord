import React from 'react'

export const NotificationBar = ({ className }: { className?: string }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[var(--primary)] text-white text-center py-1 font-bold z-50 flex items-center justify-center text-sm font-mono ${className || ''}`}>
            USE O CUPOM BLOG PARA 10% DE DESCONTO
        </div>
    )
}
