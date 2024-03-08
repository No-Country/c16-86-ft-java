function TarjetaRegistro({data}) {

    function extraerFechaYHora(fechaStr) {
        const fecha = new Date(fechaStr);
    
        const fechaFormateada = fecha.toISOString().split('T')[0];
        const horaFormateada = fecha.toTimeString().split(' ')[0];
    
        return {
            fecha: fechaFormateada,
            hora: horaFormateada
        };
    }

    const {fecha:fechaIngreso,hora:horaIngreso} = extraerFechaYHora(data.fechaIngreso)
    const {fecha:fechaSalida,hora:horaSalida} = extraerFechaYHora(data.fechaSalida)

    function redondear(numero) {
        return parseFloat(numero.toFixed(3));
    }

    const tiempoConsumido = redondear(data.tiempoConsumido)
    const pagoTicket = redondear(data.cantidad)

    return (
        <div className="w-full flex flex-row flex-wrap gap-2 border shadow bg-white px-3 py-1 rounded-md">

            <div className="flex flex-row gap-2">
                <p className="font-bold">Cliente:</p>
                <div className="flex flex-row gap-2">
                    <p className="uppercase">{data.idCliente.nombres}</p>
                    <p className="uppercase">{data.idCliente.apellidos}</p>
                </div>
            </div>

            
            <div className="flex flex-row gap-2">
                <p className="font-bold">Vehiculo:</p>
                <div className="flex flex-row gap-4">
                    <p className="uppercase">{data.typeVehiculo}</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <p className="font-bold">Patente:</p>
                <div className="flex flex-row gap-4">
                    <p className="uppercase">{data.placa}</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <p className="font-bold">Pago:</p>
                <div className="flex flex-row gap-4">
                    <p className="uppercase">{`$ ${pagoTicket}`}</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <p className="font-bold">Tiempo:</p>
                <div className="flex flex-row gap-4">
                    <p className="uppercase">{`${tiempoConsumido} horas`}</p>
                </div>
            </div>


            <div className="flex flex-row gap-2">
                <p className="font-bold">Ingreso:</p>
                <div className="flex flex-row gap-4">
                    <p>{fechaIngreso}</p>
                    <p>{horaIngreso}</p>
                </div>
            </div>

            <div className="flex flex-row gap-2">
                <p className="font-bold">Salida:</p>
                <div className="flex flex-row gap-4">
                    <p>{fechaSalida}</p>
                    <p>{horaSalida}</p>
                </div>
            </div>



        </div>
    )
}

export default TarjetaRegistro
