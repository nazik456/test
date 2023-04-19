import { singIn } from "../../firebase"

export default function Auth(){
  
  return (
    <div className="Auth">
      <button onClick={singIn}>Sing in</button>
    </div>
  )
}