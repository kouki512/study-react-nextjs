
import styles from '@/styles/Home.module.css'

export function Headline(props) {
  console.log(props);
  return ( 
    <div>
        <p>
          {props.page} Page
        </p>
        {props.children}

        <button onClick={props.onClick}>ボタン</button>


    </div>

  )
}
