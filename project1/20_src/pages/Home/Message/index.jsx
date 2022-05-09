import React, { Component } from 'react'
import { Link, Route, Routes, Navigate } from 'react-router-dom'
import withRouter from '../../../withRouter'
import Detail from './Detail'

class Message extends Component {
	state = {
		messageArr: [
			{ id: '01', title: '消息1' },
			{ id: '02', title: '消息2' },
			{ id: '03', title: '消息3' },
		]
	}
	replaceShow = (id, title) => {
		// const url = "detail/" + id + "/" + title
		const url = "detail"
		this.props.router.navigate(url, { replace: true, state: { id: id, title: title } })
	}
	render() {
		const { messageArr } = this.state
		return (
			<div>
				<ul>
					{
						messageArr.map((msgObj) => {
							return (
								<li key={msgObj.id}>
									{/* 向路由组件传递params参数 */}
									{/* <Link to={`detail/${msgObj.id}/${msgObj.title}`}>{msgObj.title}</Link> */}
									{/* <Link to={`detail/?id=${msgObj.id}&title=${msgObj.title}`}>{msgObj.title}</Link> */}
									<Link to='detail' state={{ id: msgObj.id, title: msgObj.title }}>{msgObj.title}</Link>
									<button onClick={() => { this.replaceShow(msgObj.id, msgObj.title) }}>replaceShow</button>
								</li>
							)
						})
					}
				</ul>
				<hr />
				{/* 声明接收params参数 */}
				<Routes>
					{/* <Route path="detail/:id/:title" element={<Detail />} /> */}
					<Route path="detail" element={<Detail />} />
				</Routes>
				<button onClick={() => { this.props.router.navigate(-1) }}>Backwards</button>
				<button onClick={() => { this.props.router.navigate(1) }}>Forwards</button>
			</div >
		)
	}
}
export default withRouter(Message)