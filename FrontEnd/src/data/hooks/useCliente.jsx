import { useContext } from "react";
import {ClientesProvider} from '../providers/ClientesProvider'

function useClientes() {
    return useContext(ClientesProvider)
}

export default useClientes;