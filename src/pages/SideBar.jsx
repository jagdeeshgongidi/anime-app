import React from 'react'
import {Link} from "react-router-dom"
function Sidebar({ topAnime }) {
	return (
		<aside>
			<nav>
				<h3>Top Anime</h3>
				{topAnime.map(anime => (
					<Link key={anime.mal_id}  to={`anime/${anime.mal_id}`}>{anime.title}</Link>
				))}
			</nav>
		</aside>
	)
}

export default Sidebar