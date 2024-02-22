import CardMoto from "./CardMoto"
import CardAuto from "./CardAuto"

function DashboardParking() {
  return (
    <div className='w-full flex flex-col sm:px-5'>
      <h1 className="font-bold italic text-xl sm:text-2xl xl:text-3xl pb-3 sm:py-4">Parqueadero name</h1>
      <div className="w-full flex flex-col gap-5 sm:gap-8">
        <div className='w-full grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-4'>
            <CardAuto/>
            <CardAuto
                estado={false}
            />
            <CardAuto
                estado={false}
            />
            <CardAuto/>
            <CardAuto/>
        </div>
        <div className='w-full grid grid-cols-3 gap-2 sm:grid-cols-4 xl:grid-cols-5'>
            <CardMoto/>
            <CardMoto/>
            <CardMoto
                estado={false}
            />
            <CardMoto/>
            <CardMoto
                estado={false}
            />
            <CardMoto/>
        </div>
      </div>
      
    </div>
  )
}

export default DashboardParking
