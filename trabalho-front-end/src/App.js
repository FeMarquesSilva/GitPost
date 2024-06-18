import { RouterProvider, createBrowserRouter} from "react-router-dom"
import { ChakraProvider } from '@chakra-ui/react';

import Index from "./Pages/index"
import Detalhes from "./Pages/Detalhes";
import Login from "./Pages/Login";
import Cadastro from "./Pages/Cadastro"
import Listagem from "./Pages/Listagem"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Detalhes/:id",
    element: <Detalhes />,
  },
  {
    path: "/Cadastro",
    element: <Cadastro />,
  },
  {
    path: "/Listagem",
    element: <Listagem />,
  }
])

function App() {
  return (
        <ChakraProvider>
        <RouterProvider router={router}/>
        </ChakraProvider>
  );
}

export default App;