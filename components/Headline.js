
import styles from '@/styles/Home.module.css'

export function Headline(props) {
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
