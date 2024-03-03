import LogoEmpresa from '../../../public/estacsis edificio.png'

function Navegador() {
    return (
        <div className="w-full hidden sm:flex sm:flex-row text-center sm:items-end sm:gap-3">
            <img 
                src={LogoEmpresa} 
                alt="logo empresa" 
                className="w-[2.5rem]"
            />
            <h1 className="text-3xl xl:text-4xl font-bold font-sans-segoe-UI text-blue-950">Estacsis</h1>
        </div>
    )
}

export default Navegador
