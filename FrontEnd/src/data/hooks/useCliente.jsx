import { useContext } from "react";
import {ClienteContext} from '../providers/ClienteProvider'


function useCliente(){
  return useContext(ClienteContext);
}

export default useCliente;