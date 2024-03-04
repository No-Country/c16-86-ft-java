import { useContext } from "react";
import {EstacionamientoContext} from '../providers/EstacionamientoProvider'

function useEstacionamientos() {
    return useContext(EstacionamientoContext)
}

export default useEstacionamientos;
