
import styles from '@/styles/Home.module.css'

export default function Headline(props) {
  console.log(props.title);
  return ( 
    <div>
        <p>
          {props.page} Page
        </p>
        <p>{props.page}</p>
    </div>

  )
}
