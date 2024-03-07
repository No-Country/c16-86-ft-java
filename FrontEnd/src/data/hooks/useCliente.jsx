import { useContext } from "react";
import {ClienteContext} from '../providers/ClientesProvider'

function useClientes() {
    return useContext(ClienteContext)
}

export default useClientes;