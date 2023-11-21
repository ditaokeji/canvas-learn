import React from 'react'

const CanvasTest06 = () => {
    React.useEffect(() => {
        const canvas = document.getElementById('test-canvas')
        const ctx = canvas.getContext('2d')
        ctx.beginPath()//新建一条path
        ctx.moveTo(50,50)//把画笔移动到指定的坐标
        ctx.lineTo(200,50)//绘制一条从当前位置到指定坐标(200,50)的直线
        ctx.closePath()//闭合路径。会拉一条从当前点到path起始点的直线。如果当前点与起始点重合，则什么都不做
        ctx.stroke()//绘制路径
    },[])

    return <>
        <canvas id='test-canvas' width='300' height='200'>
            <p>您的浏览器不支持canvas</p>
        </canvas>
    </>
}

export default CanvasTest06