import { useContext } from "react";
import {TicketContext} from '../providers/TicketProvider'

function useTickets() {
    return useContext(TicketContext)
}

export default useTickets;
