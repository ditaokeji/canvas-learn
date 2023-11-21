import React from 'react'

const CanvasTest04 = () => {
    React.useEffect(() => {
        const canvas = document.getElementById('test-canvas')
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'rgb(200,0,0)'
        ctx.fillRect(10,10,55,50)
        ctx.fillStyle = 'rgba(0,0,200,0.5)'
        ctx.fillRect(30,30,55,50)
    },[])

    return <>
        <canvas id='test-canvas' width='300' height='200'>
            <p>您的浏览器不支持canvas</p>
        </canvas>
    </>
}

export default CanvasTest04