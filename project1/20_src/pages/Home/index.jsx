import React, { Component } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import Message from './Message'
import News from './News'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h3>我是Home的内容</h3>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavLink to="news">News</MyNavLink>
						</li>
						<li>
							<MyNavLink to="message">Message</MyNavLink>
						</li>
					</ul>
					{/* 注册路由 */}
					<Routes>
						<Route path="news" element={<News />} />
						<Route path="message/*" element={<Message />} />

						{/* <Route path="/home/*" element={<Navigate to="/home/news" replace />} /> */}
					</Routes>
				</div>
			</div >
		)
	}
}
