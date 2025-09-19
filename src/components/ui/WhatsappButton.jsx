import { Link } from "react-router-dom"
import { WhatsappIcon } from "./icons/icons"

const WhatsappButton = () => {
  return (
    <Link
    className="fixed bottom-10 right-10 hover:scale-110"
      to="https://api.whatsapp.com/send?phone=541162715952&text=Hola%20%2C%20contame%20mas%20sobre%20tus%20servicios!%20gracias"
      target="_blank"
    >
      <WhatsappIcon />
    </Link>
  )
}

export default WhatsappButton