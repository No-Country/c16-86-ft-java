import { useContext } from "react";
import {ColaboradorContext} from '../providers/ColaboradorProvider'

function useColaboradores() {
  return useContext(ColaboradorContext)
}

export default useColaboradores;
