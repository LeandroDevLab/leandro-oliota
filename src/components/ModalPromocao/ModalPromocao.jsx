import { useState, useEffect } from 'react'
import styles from './ModalPromocao.module.css'
import { IoMdCloseCircle } from "react-icons/io";
import { Link } from 'react-router-dom';



export default function ModalPromocao({img, message, numero, title, textButton }) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);

  const mensagemCode = encodeURIComponent(message)
  console.log(data)
  const whatsappPath = `https://wa.me/55${numero}?text=${mensagemCode}${data}`

   useEffect(() => {
     const timer = setTimeout(() => {
      setData(Date.now())
      setOpen(true)
      console.log('cheguei aqui')
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`${styles.container} ${open ? styles.open : ''}`}>
      <IoMdCloseCircle className={styles.close} onClick={() => setOpen(false)}/>

      <h1 className={styles.title}>{title}</h1>
      <div className={styles.imgContent}><img src={img} alt=""/></div>

      <Link className={styles.link} target="_blank" rel="noopener noreferrer" to={whatsappPath}>{textButton}</Link>


    </div>
  )
}