import React from 'react'

const CanvasTest05 = () => {
    React.useEffect(() => {
        const canvas = document.getElementById('test-canvas')
        const ctx = canvas.getContext('2d')
        ctx.fillRect(10,10,100,50)
        ctx.strokeRect(10,70,100,50)
        ctx.clearRect(15,15,50,25)
    },[])

    return <>
        <canvas id='test-canvas' width='300' height='200'>
            <p>您的浏览器不支持canvas</p>
        </canvas>
    </>
}

export default CanvasTest05