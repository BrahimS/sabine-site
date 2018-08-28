import React, { Component } from "react"
import Link from "next/link"
import Head from "next/head"
import Menu from "./Menu.js"

import stylesheet from "../src/styles/style.sass"

class Header extends Component {
	constructor() {
		super()
	}

	render() {
		return (
			<div>
				<Head>
					<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta charSet="utf-8" />
					<meta description="yoag à chevry, yoga à geneve"></meta>
					<title>
                        Sabine Massonnet | Professeur de yoga aux pays de Gex et à Genève
					</title>
				</Head>
				<header>
					<Link href="/">
						<a>
							<img src="/static/images/logo.svg"
								width="70%" />
						</a>
					</Link>
					<Menu menu={this.props.mainNav} />
				</header>
			</div>
		)
	}
}

export default Header
