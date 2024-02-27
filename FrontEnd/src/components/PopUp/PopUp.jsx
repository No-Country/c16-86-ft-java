function PopUp({children,open}) {
    return (
        <>
            { open && 
                <div
                    style={{
                        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))`
                    }} 
                    className="fixed w-screen h-screen left-0 top-0 shadow px-5 py-8"
                >
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-3">
                            {children}
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default PopUp;