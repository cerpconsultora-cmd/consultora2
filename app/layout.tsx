import "./globals.css";

export const metadata = {
title:"PREVITEC Integral",
description:"Seguridad Higiene Emergencias Capacitación"
}

export default function RootLayout({
children,
}:{
children:React.ReactNode
}){

return(
<html lang="es">
<body>

{children}

</body>
</html>
)

}
