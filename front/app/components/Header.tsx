import React from 'react'
import Image from 'next/image'
import cgPayLogo from '@/public/assets/img/cg_pay_logo.png'
import Nav from './Nav'

export default function Header() {
  return (
    <header className='h-[144px] bg-principalWine w-full flex justify-between items-center'>
        <Image src={cgPayLogo} className='w-[140px]' alt="cg pay logo"/>
        <Nav/>
        <button className=' border-solid border-4 border-secondarySilver rounded-lg p-4'>Acessar Conta</button>
    </header>
  )
}
