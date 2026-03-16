import { useState, useEffect } from 'react'
import styles from './ModalPromocao.module.css'
import { IoMdCloseCircle } from "react-icons/io";


export default function ModalPromocao() {
  const [open, setOpen] = useState(false);

   useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true)
      console.log('cheguei aqui')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.container} ${open ? styles.open : ''}`}>
      <IoMdCloseCircle className={styles.close} onClick={() => setOpen(false)}/>

      <h1>Promoção mês das mulheres!</h1>
      <div></div>

    </div>
  )
}