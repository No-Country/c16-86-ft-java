import { useState,useEffect } from "react";

import { createContext } from "react";

import useEstacionamientos from '../hooks/useEstacionamientos'
import useClientes from "../hooks/useCliente";

import generateUUID from "../../helpers/generaID";

const TicketContext = createContext()

function TicketProvider({children}) {
    const [tickets,setTickets]=useState([])

    const {
        estacionamiento,
        setEstacionamiento
    }=useEstacionamientos()

    useEffect(()=>{
        const isEmpty = localStorage.getItem('tickets')
        if(isEmpty === null){
            localStorage.setItem('tickets',JSON.stringify([]))
        }else{
            const valueTickets = JSON.parse(localStorage.getItem('tickets'))
            setTickets(valueTickets)    
        }
    },[])

    useEffect(()=>{
        localStorage.setItem('tickets',JSON.stringify(tickets))
    },[tickets])

    const obtenerTickets = ()=>{
    }

    const crearTicketEntrada = (dataTicket) => {
        const newData = {
            ...dataTicket,
            id: generateUUID(),
            fechaIngreso: new Date()
        };
    
        const cambiandoEstadoParking = estacionamiento.map(item => {
            if (item.id === newData.idEstacionamiento) {
                if (newData.typeVehiculo === 'auto') {
                    return {
                        ...item,
                        parkingCarros: item.parkingCarros.map(parking => {
                            if (parking.nomenclatura === newData.idParking) {
                                return {
                                    ...parking,
                                    disponible: false,
                                    ticket: newData.id
                                };
                            }
                            return parking;
                        })
                    };
                } else if (newData.typeVehiculo === 'moto') {
                    return {
                        ...item,
                        parkingMotos: item.parkingMotos.map(parking => {
                            if (parking.nomenclatura === newData.idParking) {
                                return {
                                    ...parking,
                                    disponible: false,
                                    ticket: newData.id
                                };
                            }
                            return parking;
                        })
                    };
                }
            }
            return item;
        });
    
        setEstacionamiento(cambiandoEstadoParking);
        setTickets([newData, ...tickets]);
    };

/*     const crearTicketEntrada = (dataTicket)=>{
        const newData = dataTicket;
        newData['id'] = generateUUID();
        newData['fechaIngreso'] = new Date();



        const cambiandoEstadoParking = estacionamiento?.map( item =>{
            if(item.id === newData.idEstacionamiento){
                if(newData.typeVehiculo === 'auto'){
                    item.parkingCarros.map(item => {
                        if(item.nomenclatura === newData.idParking){
                            item.disponible = false
                            item.ticket = newData.id
                            return item
                        }
                        return item
                    })
                }
                
                if(newData.typeVehiculo === 'moto'){
                    item.parkingMotos.map(item => {
                        if(item.nomenclatura === newData.idParking){
                            item.disponible = false
                            item.ticket = newData.id
                            return item
                        }
                        return item
                    })
                }

                return item;
            }
            return item;
        })



        setEstacionamiento(cambiandoEstadoParking)
        setTickets([newData,...tickets])
    } */

    const cerrarTicketSalida = ()=>{

    }

    return (
        <TicketContext.Provider
            value={{
                obtenerTickets,
                crearTicketEntrada,
                cerrarTicketSalida
            }}
        >
            {children}
        </TicketContext.Provider>
    )
}

export{
    TicketContext
}

export default TicketProvider;