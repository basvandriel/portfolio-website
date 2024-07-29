import { PDFViewer } from "@react-pdf/renderer"
import CV from "."

import './register_fonts_require'

const CVViewController = () => {
  return (
    <PDFViewer style={{
      height: '100vh',
      width: '100%'
    }}>
      <CV />
    </PDFViewer>
  )
}

export default CVViewController